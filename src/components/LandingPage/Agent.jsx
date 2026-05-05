import { useState, useRef, useEffect } from "react";
import {
  VscFolder,
  VscFolderOpened,
  VscFile,
  VscClose,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";
import { MdMenu } from "react-icons/md";
import { fileTree, fileContents } from "./agentFiles";

function renderInline(text, keyPrefix) {
  if (!text) return text;
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(`([^`\n]+?)`)|(\[([^\]]*)\]\(([^)]+)\))|(https?:\/\/[^\s<>)\]}"']+)/g;
  let lastIndex = 0;
  let match;
  let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(
        <span key={`${keyPrefix}-${idx}`} className="md-bold">
          **{match[2]}**
        </span>
      );
    } else if (match[3]) {
      parts.push(
        <span key={`${keyPrefix}-${idx}`} className="md-inline-code">
          {match[3]}
        </span>
      );
    } else if (match[5]) {
      const isExternal = /^https?:\/\//.test(match[7]);
      parts.push(
        <span key={`${keyPrefix}-${idx}`}>
          <span className="md-bracket">[</span>
          {isExternal
            ? <a href={match[7]} target="_blank" rel="noopener noreferrer" className="md-link">{match[6]}</a>
            : match[6]
          }
          <span className="md-bracket">](</span>
          <span className="md-url">{match[7]}</span>
          <span className="md-bracket">)</span>
        </span>
      );
    } else if (match[8]) {
      parts.push(
        <a key={`${keyPrefix}-${idx}`} href={match[8]} target="_blank" rel="noopener noreferrer" className="md-url md-link">{match[8]}</a>
      );
    }
    lastIndex = match.index + match[0].length;
    idx++;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function tokenizeLine(line, lang, key) {
  if (!lang) return <span key={key}>{line}</span>;
  const tokens = [];
  let remaining = line;
  let idx = 0;

  function pushLinked(text, cls) {
    if (!text) return;
    const urlRe = /(https?:\/\/[^\s<>)\]}"']+)/g;
    let last = 0;
    let um;
    const parts = [];
    while ((um = urlRe.exec(text)) !== null) {
      if (um.index > last) parts.push(<span key={`${key}-${idx++}`} className={cls}>{text.slice(last, um.index)}</span>);
      parts.push(<a key={`${key}-${idx++}`} href={um[1]} target="_blank" rel="noopener noreferrer" className={`${cls} md-link`}>{um[1]}</a>);
      last = um.index + um[0].length;
    }
    if (parts.length === 0) {
      tokens.push(cls ? <span key={`${key}-${idx++}`} className={cls}>{text}</span> : text);
    } else {
      if (last < text.length) parts.push(<span key={`${key}-${idx++}`} className={cls}>{text.slice(last)}</span>);
      tokens.push(...parts);
    }
  }

  function push(text, cls) {
    if (text) tokens.push(cls ? <span key={`${key}-${idx++}`} className={cls}>{text}</span> : text);
  }

  if (lang === "yaml") {
    const cm = remaining.match(/^(\s*)(#.*)/);
    if (cm) { push(cm[1]); push(cm[2], "code-comment"); return <span key={key}>{tokens}</span>; }
    const m = remaining.match(/^(\s*-?\s*)([\w][\w.-]*)(:)(\s*)(.*)/);
    if (m) {
      push(m[1]); push(m[2], "code-key"); push(m[3], "code-punct"); push(m[4]);
      const val = m[5];
      if (/^["']/.test(val)) { pushLinked(val, "code-string"); }
      else if (/^\[/.test(val)) {
        const parts = [];
        const re = /("([^"]*)")|('([^']*)')|([[\],\s]+)/g;
        let last = 0; let rm;
        while ((rm = re.exec(val)) !== null) {
          if (rm.index > last) parts.push(<span key={`${key}-a${idx++}`} className="code-value">{val.slice(last, rm.index)}</span>);
          if (rm[1] || rm[3]) parts.push(<span key={`${key}-a${idx++}`} className="code-string">{rm[0]}</span>);
          else parts.push(<span key={`${key}-a${idx++}`} className="code-punct">{rm[0]}</span>);
          last = rm.index + rm[0].length;
        }
        if (last < val.length) parts.push(<span key={`${key}-a${idx++}`} className="code-string">{val.slice(last)}</span>);
        tokens.push(...parts);
      }
      else if (/^(true|false|null|none)$/i.test(val)) { push(val, "code-keyword"); }
      else if (/^\d/.test(val)) { push(val, "code-number"); }
      else { pushLinked(val, "code-string"); }
      return <span key={key}>{tokens}</span>;
    }
    const lm = remaining.match(/^(\s*-\s+)(.*)/);
    if (lm) { push(lm[1], "code-punct"); pushLinked(lm[2], "code-string"); return <span key={key}>{tokens}</span>; }
    return <span key={key}>{remaining}</span>;
  }

  if (lang === "bash") {
    const cm = remaining.match(/^(\s*)(#.*)/);
    if (cm) { push(cm[1]); push(cm[2], "code-comment"); return <span key={key}>{tokens}</span>; }
    const re = /(\"[^\"]*\"|'[^']*')|(#[^\n]*)|\b(echo|read|if|then|else|fi|for|do|done|while|case|esac|function|return|exit|export|source|alias|cd|bash|git|chmod|mkdir|npm|hire)\b|(\$\w+|\$\{[^}]+\})|(\[\[|\]\]|&&|\|\||;;|[|;(){}])|(-[a-zA-Z]+)|("(?:[^"\\]|\\.)*")/g;
    let last = 0; let m;
    while ((m = re.exec(remaining)) !== null) {
      if (m.index > last) push(remaining.slice(last, m.index));
      if (m[1]) push(m[0], "code-string");
      else if (m[2]) push(m[0], "code-comment");
      else if (m[3]) push(m[0], "code-keyword");
      else if (m[4]) push(m[0], "code-variable");
      else if (m[5]) push(m[0], "code-punct");
      else if (m[6]) push(m[0], "code-flag");
      else if (m[7]) push(m[0], "code-string");
      else push(m[0]);
      last = m.index + m[0].length;
    }
    if (last < remaining.length) push(remaining.slice(last));
    return <span key={key}>{tokens}</span>;
  }

  if (lang === "python") {
    const re = /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(#[^\n]*)|(\b(?:def|class|import|from|return|if|elif|else|for|while|try|except|finally|with|as|raise|pass|lambda|yield|and|or|not|in|is|True|False|None|self|async|await)\b)|(\b\d[\d.]*\b)|(\(|\)|\[|\]|\{|\}|:|,|\.|\+|=|->)/g;
    let last = 0; let m;
    while ((m = re.exec(remaining)) !== null) {
      if (m.index > last) push(remaining.slice(last, m.index));
      if (m[1]) push(m[0], "code-string");
      else if (m[2]) push(m[0], "code-comment");
      else if (m[3]) push(m[0], "code-keyword");
      else if (m[4]) push(m[0], "code-number");
      else if (m[5]) push(m[0], "code-punct");
      else push(m[0]);
      last = m.index + m[0].length;
    }
    if (last < remaining.length) push(remaining.slice(last));
    return <span key={key}>{tokens}</span>;
  }

  if (lang === "javascript" || lang === "js") {
    const re = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|this|class|extends|import|export|default|from|try|catch|finally|throw|async|await|typeof|instanceof|void|delete|in|of|yield)\b)|(\b(?:true|false|null|undefined|NaN|Infinity)\b)|(\b\d[\d.]*\b)|(\(|\)|\[|\]|\{|\}|=>|;|:|,|\.|\+|-|=|!|<|>|\?|\|)/g;
    let last = 0; let m;
    while ((m = re.exec(remaining)) !== null) {
      if (m.index > last) push(remaining.slice(last, m.index));
      if (m[1]) push(m[0], "code-string");
      else if (m[2]) push(m[0], "code-comment");
      else if (m[3]) push(m[0], "code-keyword");
      else if (m[4]) push(m[0], "code-constant");
      else if (m[5]) push(m[0], "code-number");
      else if (m[6]) push(m[0], "code-punct");
      else push(m[0]);
      last = m.index + m[0].length;
    }
    if (last < remaining.length) push(remaining.slice(last));
    return <span key={key}>{tokens}</span>;
  }

  if (lang === "markdown") {
    const hm = remaining.match(/^(#{1,6}\s)(.*)/);
    if (hm) { push(hm[1] + hm[2], "md-header"); return <span key={key}>{tokens}</span>; }
    return <span key={key}>{remaining}</span>;
  }

  return <span key={key}>{remaining}</span>;
}

function highlightMarkdown(text) {
  if (!text) return text;
  const lines = text.split("\n");
  let inFrontmatter = false;
  let inCodeBlock = false;
  let codeLang = null;
  const elements = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nl = i < lines.length - 1 ? "\n" : "";
    if (line === "---" && i === 0) {
      inFrontmatter = true;
      elements.push(<span key={i} className="md-hr">{line}{nl}</span>);
      continue;
    }
    if (inFrontmatter && line === "---") {
      inFrontmatter = false;
      elements.push(<span key={i} className="md-hr">{line}{nl}</span>);
      continue;
    }
    if (inFrontmatter) {
      const m = line.match(/^(\s*)([\w][\w-]*)(:)(.*)/);
      if (m) {
        elements.push(
          <span key={i}>
            {m[1]}<span className="md-yaml-key">{m[2]}</span>
            <span className="md-punct">{m[3]}</span>
            <span className="md-yaml-val">{renderInline(m[4], `ym-${i}`)}</span>{nl}
          </span>
        );
      } else {
        elements.push(<span key={i} className="md-yaml-val">{renderInline(line, `yv-${i}`)}{nl}</span>);
      }
      continue;
    }
    if (line.trimStart().startsWith("```")) {
      if (!inCodeBlock) {
        const langMatch = line.match(/```(\w+)/);
        codeLang = langMatch ? langMatch[1] : null;
      } else {
        codeLang = null;
      }
      inCodeBlock = !inCodeBlock;
      elements.push(<span key={i} className="md-fence">{line}{nl}</span>);
      continue;
    }
    if (inCodeBlock) {
      elements.push(<span key={`cb-${i}`}>{tokenizeLine(line, codeLang, `t-${i}`)}{nl}</span>);
      continue;
    }
    const hm = line.match(/^(#{1,6}\s)(.*)/);
    if (hm) {
      elements.push(
        <span key={i} className="md-header">{hm[1]}{renderInline(hm[2], i)}{nl}</span>
      );
      continue;
    }
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      elements.push(<span key={i} className="md-hr">{line}{nl}</span>);
      continue;
    }
    const bq = line.match(/^(>+\s?)(.*)/);
    if (bq) {
      elements.push(
        <span key={i}><span className="md-blockquote">{bq[1]}</span>{renderInline(bq[2], i)}{nl}</span>
      );
      continue;
    }
    const li = line.match(/^(\s*)([-*+]|\d+\.)(\s)(.*)/);
    if (li) {
      elements.push(
        <span key={i}>{li[1]}<span className="md-list-marker">{li[2]}</span>{li[3]}{renderInline(li[4], i)}{nl}</span>
      );
      continue;
    }
    elements.push(<span key={i}>{renderInline(line, i)}{nl}</span>);
  }
  return elements;
}

function Agent() {
  const [openTabs, setOpenTabs] = useState(["README.md", "ERIC.agent.md"]);
  const [activeTab, setActiveTab] = useState("README.md");
  const [expandedFolders, setExpandedFolders] = useState(
    new Set(["scripts", "skills"])
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  function openFile(path) {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
    setActiveTab(path);
    setSidebarOpen(false);
  }

  function closeTab(e, path) {
    e.stopPropagation();
    const next = openTabs.filter((t) => t !== path);
    setOpenTabs(next);
    if (activeTab === path) {
      setActiveTab(next.length > 0 ? next[next.length - 1] : null);
    }
  }

  function toggleFolder(folderPath) {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderPath)) {
        next.delete(folderPath);
      } else {
        next.add(folderPath);
      }
      return next;
    });
  }

  function getTabLabel(path) {
    const parts = path.split("/");
    const name = parts[parts.length - 1];
    if (name === "SKILL.md" && parts.length >= 2) {
      return parts[parts.length - 2] + "/SKILL.md";
    }
    return name;
  }

  function renderTree(nodes, depth) {
    return nodes.map((node) => {
      if (node.type === "folder") {
        const isExpanded = expandedFolders.has(node.path);
        return (
          <div key={node.path}>
            <div
              className="ide-sidebar-item"
              style={{ paddingLeft: 12 + depth * 16 }}
              onClick={() => toggleFolder(node.path)}
            >
              {isExpanded ? (
                <VscChevronDown size={14} />
              ) : (
                <VscChevronRight size={14} />
              )}
              {isExpanded ? (
                <VscFolderOpened size={16} />
              ) : (
                <VscFolder size={16} />
              )}
              <span>{node.name}</span>
            </div>
            {isExpanded && node.children && renderTree(node.children, depth + 1)}
          </div>
        );
      }
      return (
        <div
          key={node.path}
          className={`ide-sidebar-item${activeTab === node.path ? " ide-sidebar-item--active" : ""}`}
          style={{ paddingLeft: 12 + depth * 16 }}
          onClick={() => openFile(node.path)}
        >
          <span style={{ width: 14 }} />
          <VscFile size={16} />
          <span>{node.name}</span>
        </div>
      );
    });
  }

  return (
    <div className="container agent-container">
      <div className="agent-header">
        <h1 className="agent-title">Deploy. Agent. Eric.</h1>
        <p className="agent-subtitle">
          A humanized DevRel agent built for today's dynamic developer communities.
        </p>
      </div>

      <div className="ide">
        <div className="ide-titlebar">
          <div className="ide-dots">
            <span className="ide-dot" style={{ background: "#ff5f57" }} />
            <span className="ide-dot" style={{ background: "#febc2e" }} />
            <span className="ide-dot" style={{ background: "#28c840" }} />
          </div>
          <span className="ide-titlebar-text">agent-eric</span>
          <button
            className="ide-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MdMenu size={20} />
          </button>
        </div>

        <div className="ide-body">
          <div className={`ide-sidebar${sidebarOpen ? " ide-sidebar--open" : ""}`}>
            <div className="ide-sidebar-header">EXPLORER</div>
            {renderTree(fileTree, 0)}
          </div>

          {sidebarOpen && (
            <div
              className="ide-sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div className="ide-main">
            <div className="ide-tabs">
              {openTabs.map((tab) => (
                <div
                  key={tab}
                  className={`ide-tab${activeTab === tab ? " ide-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="ide-tab-name">{getTabLabel(tab)}</span>
                  <VscClose
                    className="ide-tab-close"
                    size={14}
                    onClick={(e) => closeTab(e, tab)}
                  />
                </div>
              ))}
            </div>

            <div className="ide-content" ref={contentRef}>
              {activeTab && fileContents[activeTab] ? (
                <pre className="ide-content-text">
                  {highlightMarkdown(fileContents[activeTab])}
                </pre>
              ) : (
                <div className="ide-empty">
                  <p className="ide-empty-text">
                    Select a file from the explorer to view its contents.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent;
