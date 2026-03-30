const fence = "\`\`\`";

export const fileTree = [
  { type: "file", name: ".gitignore", path: ".gitignore" },
  { type: "file", name: "CONTRIBUTING.md", path: "CONTRIBUTING.md" },
  { type: "file", name: "ERIC.agent.md", path: "ERIC.agent.md" },
  { type: "file", name: "LICENSE", path: "LICENSE" },
  { type: "file", name: "README.md", path: "README.md" },
  {
    type: "folder",
    name: "scripts",
    path: "scripts",
    children: [
      {
        type: "file",
        name: "schedule_interview.sh",
        path: "scripts/schedule_interview.sh",
      },
    ],
  },
  {
    type: "folder",
    name: "skills",
    path: "skills",
    children: [
      {
        type: "folder",
        name: "community-building",
        path: "skills/community-building",
        children: [
          {
            type: "file",
            name: "SKILL.md",
            path: "skills/community-building/SKILL.md",
          },
        ],
      },
      {
        type: "folder",
        name: "developer-relations",
        path: "skills/developer-relations",
        children: [
          {
            type: "file",
            name: "SKILL.md",
            path: "skills/developer-relations/SKILL.md",
          },
        ],
      },
      {
        type: "folder",
        name: "public-speaking",
        path: "skills/public-speaking",
        children: [
          {
            type: "file",
            name: "SKILL.md",
            path: "skills/public-speaking/SKILL.md",
          },
        ],
      },
      {
        type: "folder",
        name: "technical-writing",
        path: "skills/technical-writing",
        children: [
          {
            type: "file",
            name: "SKILL.md",
            path: "skills/technical-writing/SKILL.md",
          },
        ],
      },
      {
        type: "folder",
        name: "video-content-creation",
        path: "skills/video-content-creation",
        children: [
          {
            type: "file",
            name: "SKILL.md",
            path: "skills/video-content-creation/SKILL.md",
          },
        ],
      },
    ],
  },
];

export const fileContents = {
  "README.md": `# Eric Choy - Developer Relations Agent

> **Status**: \`actively-seeking\` | **Role**: Senior Developer Relations Engineer | **Version**: 2026.3

## Installation

${fence}bash
# Clone this developer advocate
git clone https://github.com/ecbsj/agent-eric.git
cd agent-eric

# Initialize connection
bash scripts/schedule_interview.sh

# Deploy to your team
hire agent-eric
${fence}

## Quick Start

Eric is a high-performance Developer Relations agent optimized for creating engaging technical content, building thriving developer communities, and bridging the gap between complex products and developer adoption.

### Core Capabilities

- **Technical Content**: Transform complex tooling into digestible tutorials and guides  
- **Developer Experience**: Design and implement developer onboarding funnels
- **Product Feedback**: Channel developer insights back to engineering teams
- **Public Speaking**: Keynote conferences, host workshops, moderate panels
- **Community Building**: Scale developer communities from 0 to 10k+ active members

### System Requirements

- **Environment**: High-growth tech companies, developer tool startups
- **Dependencies**: Creative freedom, technical challenges, global remote-friendly culture
- **Runtime**: Any Time Zone (flexible for global collaboration)

## Architecture

${fence}
agent-eric/
├── .gitignore           # Work culture anti-patterns and red flags
├── CONTRIBUTING.md      # Collaboration and networking guide
├── ERIC.agent.md        # Main agent profile and capabilities
├── LICENSE              # Values, principles, and working philosophy  
├── README.md            # Project overview and installation guide
├── scripts/             # Interactive utilities and automation
│   └── schedule_interview.sh    # Interview process automation script
└── skills/              # Specialized expertise modules
    ├── community-building/       # Developer community growth strategies
    ├── developer-relations/      # DevRel strategy and execution  
    ├── public-speaking/          # Conference talks and presentations
    ├── technical-writing/        # Documentation and content creation
    └── video-content-creation/   # Video tutorials and visual content
${fence}

## Features

✅ **Multi-platform expertise**: Web, mobile, cloud, AI
✅ **Content scaling**: Blog posts, video tutorials, interactive demos  
✅ **Community management**: Discord, Slack, forums, social media  
✅ **Developer tooling**: CLIs, SDKs, documentation platforms  

## Getting Started

1. Review the [AGENT.md](./ERIC.agent.md) file for detailed specifications
2. Explore specialized [skills](./skills/) for specific capabilities

## Contributing

Found an interesting project or role? Open an issue or reach out directly:

- **LinkedIn**: /in/ericchoy256
- **Twitter**: @ecbsj
- **Telegram**: @ecbsj

## License

This developer advocate operates under the [MIT License](./LICENSE) - open to collaboration, attribution appreciated, ready to make an impact.

---

*Built with ❤️ for the developer community*`,

  "ERIC.agent.md": `---
name: Eric Choy
role: Senior Developer Relations Engineer
status: actively-seeking
location: (Remote)
telegram: @ecbsj
personal_website: https://ecbsj.me
linkedin: https://linkedin.com/in/ericchoy256/
github: https://github.com/ECBSJ
twitter: https://twitter.com/ECBSJ
description: "Passionate DevRel engineer who transforms complex technical concepts into engaging developer experiences. Expert at scaling developer adoption through strategic content, community programs, and hands-on technical evangelism. Specializes in building thriving communities around developer tools, APIs, and emerging technologies."
---

# Eric Choy - Senior DevRel Agent

## Overview

I'm a Senior Developer Relations Engineer with 3+ years of experience building bridges between complex technical products and the developers who use them. I specialize in creating "aha!" moments - those magical instances where a developer goes from confused to confident with your product.

## Core Capabilities

### 🛠 Technical Foundation
${fence}python
class EricAgent:
    def __init__(self):
        self.languages = ['Python', 'JavaScript', 'Solidity', 'Clarity', 'Rust']
        self.platforms = ['Web', 'Mobile', 'Cloud', 'AI']
        self.specialties = ['APIs', 'Developer Tools', 'Open Source']
    
    def solve_developer_problems(self, complexity='any'):
        return self.translate_to_simple_solutions(complexity)
${fence}

### 🎯 Specialized Skills
${fence}yaml
core_expertise:
  - name: "Developer Relations"
    focus: "Community building, adoption strategy, technical evangelism"
    link: "./skills/developer-relations/SKILL.md"
    
  - name: "Technical Writing" 
    focus: "API docs, tutorials, developer guides, content strategy"
    link: "./skills/technical-writing/SKILL.md"
    
  - name: "Community Building"
    focus: "Platform strategy, engagement, global communities"
    link: "./skills/community-building/SKILL.md"
    
  - name: "Public Speaking"
    focus: "Conference talks, workshops, technical presentations"
    link: "./skills/public-speaking/SKILL.md"
    
  - name: "Video Content Creation"
    focus: "Tutorials, explainers, developer interviews, live streaming"
    link: "./skills/video-content-creation/SKILL.md"
${fence}

## Operational Mode

${fence}yaml
working_style:
  communication: clear, empathetic, technical-but-accessible
  collaboration: cross-functional, developer-first mindset
  problem_solving: data-driven with creative execution
  learning: continuous, community-informed

ideal_environment:
  company_stage: [startup, scale-up, enterprise]
  culture: [remote-friendly, developer-focused, innovation-driven]
  challenges: [complex_products, technical_education, community_building]
${fence}

## Integration Points

### With Engineering Teams
- Translate product features into developer benefits
- Gather and synthesize community feedback for product planning  
- Create technical specifications that developers actually want to read

### With Marketing Teams
- Design developer-focused campaigns that feel authentic, not sales-y
- Create technical content that drives qualified leads
- Build thought leadership through genuine expertise sharing

### With Developer Communities
- Foster inclusive, helpful environments where developers thrive
- Moderate technical discussions with authority and empathy
- Connect developers with each other and with company resources

## Runtime Environment

**Preferred Stack**: Remote-first culture, async communication, global team collaboration  
**Peak Performance**: Technical challenges, creative freedom, measurable impact  
**Power Source**: Developer success stories, "lightbulb moments", community celebrations

## Error Handling

${fence}javascript
try {
  await handleComplexDeveloperProblem();
} catch (confusion) {
  return simplifyWithAnalogy(confusion);
} finally {
  documentSolutionForCommunity();
}
${fence}

## Dependencies

- ☕ High-quality coffee (critical dependency)
- 🎮 Gaming setup for developer empathy research
- 📚 Continuous learning mindset
- 🌍 Global time zone flexibility
- 🎤 Access to conferences and speaking opportunities

---

*Ready to ship. Looking for the right team to deploy with.* 🚀`,

  ".gitignore": `# What Eric Won't Tolerate in Work Culture

## Development Environment Issues
${fence}bash
# Ignore legacy practices that hurt developer productivity
technical-debt-forever.md
meetings-that-could-be-emails/
death-by-powerpoint.pptx
unnecessary-process-overhead/
${fence}

## Communication Anti-Patterns
${fence}bash
# Block ineffective communication styles  
blame-first-culture.txt
interrupt-driven-development/
micromanagement-scripts/
"urgent"-everything-syndrome.md
context-switching-hell/
${fence}

## Team Dynamics Problems
${fence}bash
# Exclude toxic behaviors
knowledge-hoarding.secrets
not-invented-here-syndrome/
credit-stealing.blame
diversity-lip-service-only/
ego-driven-architecture/
${fence}

## Management Red Flags
${fence}bash
# Filter out poor leadership practices
no-career-development-plan.missing
impossible-deadlines-always/
hire-fast-fire-faster.policy
remote-work-second-class-citizens/
innovation-theater-only/
${fence}

## Developer Relations Specific
${fence}bash
# Avoid DevRel anti-patterns
community-as-lead-generation-only/
fake-developer-advocacy/
marketing-disguised-as-content/
conference-talks-as-sales-pitches/
vanity-metrics-only.dashboard
${fence}

## Work-Life Balance Violations
${fence}bash
# Reject unsustainable practices
always-on-expectations/
crunch-mode-as-default/
vacation-shaming.culture
timezone-insensitive-meetings/
personal-time-invasion.policy
${fence}

## Intellectual Honesty Issues
${fence}bash
# Block dishonest practices
we-value-feedback-but-ignore-it/
psychological-safety-theater/
transparent-but-actually-opaque/
growth-mindset-lip-service/
innovation-but-punish-failure/
${fence}

## Technical Debt Management
${fence}bash
# Ignore poor technical practices
security-patches-maybe-later/
tests-are-optional.mindset
documentation-debt-forever/
scalability-problems-tomorrow/
monitoring-after-production-issues/
${fence}

---

## Global .gitignore Includes

*These patterns apply to all professional relationships:*

- Disrespect for people's time and expertise
- Lack of psychological safety for learning and growth  
- Conflating effort with results
- Taking credit for others' work
- Making promises without intention to follow through
- Treating symptoms instead of root causes
- Valuing politics over competence
- Creating unnecessary complexity
- Ignoring developer experience in favor of business metrics only
- Building walls instead of bridges between teams

---

## Exception Handling

${fence}yaml
acceptable_temporary_conditions:
  - startup_growing_pains: "Growth challenges with clear improvement commitment"
  - technical_debt: "Acknowledged debt with realistic paydown plans"  
  - process_evolution: "Iterating on practices with feedback incorporation"
  - resource_constraints: "Honest about limitations with creative solutions"

total_deal_breakers:
  - ethical_violations: "No compromise on integrity"
  - discrimination: "Zero tolerance for bias-based treatment"
  - safety_issues: "Physical or psychological harm"
  - legal_problems: "Compliance and regulatory violations"
${fence}

---

*Just like a good .gitignore file, this helps maintain a clean, productive working environment by filtering out what doesn't belong.* 🚫➡️✨`,

  "scripts/schedule_interview.sh": `#!/bin/bash

echo "🚀 Initializing Interview Process for Eric..."
echo "================================"
echo ""

# Check system requirements
echo "📋 Checking system compatibility..."
echo "✅ DevRel-focused company: Required"
echo "✅ Remote-friendly culture: Required" 
echo "✅ Technical product/API: Required"
echo "✅ Growth mindset: Required"
echo ""

# Environment setup
echo "🛠 Setting up interview environment..."
echo "📅 Scheduling initial conversation..."
echo "☕ Preparing coffee (critical dependency)..."
echo "🎤 Testing technical discussion setup..."
echo ""

# Pre-interview checklist
echo "📝 Pre-interview checklist:"
echo "[ ] Review company's developer documentation"
echo "[ ] Explore community presence and engagement"  
echo "[ ] Research product positioning and developer audience"
echo "[ ] Prepare thoughtful questions about technical challenges"
echo "[ ] Review recent company blog posts and conference talks"
echo ""

# Documentation
echo "📄 Available documentation:"
echo "- ERIC.agent.md: Comprehensive capabilities overview"
echo "- skills/: Specialized expertise deep-dives"
echo ""

# Contact information
echo "📞 Ready to connect:"
echo "Email: ericchoyh@gmail.com"
echo "Telegram: @ecbsj"
echo ""

echo "✨ Eric Choy DevRel Agent - Ready for deployment!"
echo "================================"
echo ""

# Interactive prompt
read -p "Would you like to schedule an interview? (y/n): " response

if [[ $response =~ ^[Yy]$ ]]; then
    echo ""
    echo "🎉 Excellent! Here are the next steps:"
    echo "1. Send email to ericchoyh@gmail.com or Telegram @ecbsj with:"
    echo "   - Brief company overview and role description"
    echo "   - Your biggest developer community challenges" 
    echo "   - Preferred interview timeline"
    echo ""
    echo "2. I'll respond within 24 hours with:"
    echo "   - Thoughtful questions about your developer ecosystem"
    echo "   - Calendar availability for initial conversation"
    echo "   - Relevant case studies and experience examples"
    echo ""
    echo "🚀 Looking forward to learning about your developer community!"
else
    echo ""
    echo "📚 No problem! Feel free to explore the documentation:"
    echo "- Browse the skills/ directory for area-specific expertise"
    echo "- Review ERIC.agent.md for comprehensive capability overview"
    echo ""
    echo "🔄 Run this script again anytime you're ready to connect!"
fi

echo ""
echo "================================"
echo "Thanks for considering Eric Choy for your DevRel team! 🙏"`,

  "CONTRIBUTING.md": `# Contributing to Eric Choy's Developer Relations Journey

Thank you for your interest in collaborating! This guide outlines how you can contribute to Eric's professional growth and the broader developer relations community.

## Ways to Contribute

### 🤝 Professional Opportunities

**Job Opportunities**
- Share relevant DevRel, Technical Writing, or Community Manager positions
- Introduce Eric to hiring managers at developer-focused companies
- Provide insights about company cultures and team dynamics
- Offer informational interviews about your DevRel experiences

**Speaking Opportunities**
- Recommend conferences, meetups, or podcasts seeking DevRel speakers
- Co-present workshops or panels on community building topics
- Suggest technical topics that would benefit from Eric's perspective
- Connect with event organizers looking for experienced speakers

### 💡 Knowledge Sharing

**Industry Insights**
- Share interesting DevRel case studies, research, or best practices
- Discuss emerging trends in developer tools and community building
- Exchange ideas about measuring community impact and ROI
- Collaborate on thought leadership content or research projects

**Technical Discussions**
- Explore new technologies that could benefit developer communities
- Share experiences with developer onboarding and documentation strategies
- Discuss API design patterns that improve developer experience
- Exchange insights about technical content creation and optimization

### 🌟 Community Building

**Network Expansion**
- Introduce Eric to other DevRel professionals and community builders
- Share connections with technical writers, content creators, and speakers
- Connect with startup founders or product managers focused on developers
- Facilitate introductions to conference organizers and community leaders

**Collaborative Projects**
- Partner on open source projects that benefit developer communities
- Co-author blog posts, guides, or research about DevRel best practices
- Collaborate on community building experiments or case studies
- Work together on conference workshops or educational content

## How to Get Involved

### 🚀 Quick Ways to Help

1. **Share This Repo**: Help spread the creative resume format to other DevRel professionals
2. **LinkedIn Engagement**: Comment on, share, or discuss Eric's professional content
3. **Conference Connections**: Tag Eric in relevant CFPs or speaking opportunities
4. **Community Introductions**: Make warm introductions to relevant communities or companies

### 📧 Direct Collaboration

**Email Eric at**: ericchoyh@gmail.com

**Include in your message**:
- Brief introduction about yourself and your background
- Specific area where you'd like to collaborate or contribute
- Any relevant opportunities, insights, or connections you'd like to share
- Preferred communication style and timeline

### 🎯 Specific Contribution Areas

**Content Creation**
${fence}yaml
blog_posts: "Co-author DevRel strategy guides or case studies"
video_content: "Collaborate on technical tutorials or community discussions"
research: "Partner on developer experience research or industry surveys"
documentation: "Improve open source project docs or create new resources"
${fence}

**Event Collaboration** 
${fence}yaml
conferences: "Co-present workshops, panels, or technical deep-dives"
meetups: "Collaborate on local developer community events"
webinars: "Partner on educational content for developer audiences"
hackathons: "Mentor participants or help organize developer events"
${fence}

**Professional Development**
${fence}yaml
mentorship: "Exchange mentoring or career guidance"
skill_sharing: "Teach each other new technical or communication skills"
feedback: "Provide honest input on content, presentations, or strategies"
introductions: "Connect with relevant people in your professional network"
${fence}

## Contribution Guidelines

### 🤝 Communication Expectations

**Response Time**: Eric typically responds to professional inquiries within 24-48 hours

**Meeting Preferences**: 
- 30-minute initial conversations for new connections
- 60-minute deep-dive discussions for collaboration planning
- Async communication welcome for ongoing projects

**Time Zones**: Eastern Time based, but flexible for global collaboration

### 🎯 Quality Standards

**Professional Collaboration**:
- Clear communication about expectations and deliverables
- Mutual respect for each other's time and expertise
- Honest feedback delivered constructively
- Follow-through on commitments and deadlines

**Community Focus**:
- Developer-first mindset in all collaborative efforts
- Emphasis on authentic value creation over promotional content
- Inclusive approach that welcomes developers of all experience levels
- Long-term thinking about community health and sustainability

### 🚀 Success Metrics

We'll know our collaboration is successful when:
- Developers benefit from the content, events, or communities we create together
- Both parties learn new skills or gain valuable professional insights
- Our collaborative work contributes positively to the broader DevRel community
- We've built a sustainable professional relationship that continues to create value

## Recognition

All contributors will be:
- Credited in any content, research, or projects we collaborate on
- Recommended and endorsed for their expertise and collaboration
- Connected with relevant opportunities in Eric's professional network
- Invited to participate in future collaborative projects and initiatives

---

## Code of Conduct

This collaboration operates under the same principles as Eric's professional work:

- **Respectful Communication**: Professional, inclusive, and constructive interactions
- **Developer Focus**: Always prioritize what's best for developer communities
- **Quality Over Quantity**: Better to do fewer things excellently than many things adequately  
- **Learning Mindset**: Approach collaboration with curiosity and openness to feedback
- **Authentic Value**: Focus on genuine helpfulness rather than self-promotion

---`,

  "LICENSE": `MIT License

Copyright (c) 2026 Eric Choy

Permission is hereby granted, free of charge, to any person obtaining a copy of this developer advocate (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Personal License Addendum

### Core Values & Working Principles

**Open Source Mindset**: I believe in collaborative development, knowledge sharing, and building on the work of others while giving proper attribution.

**Developer-First Philosophy**: Every decision should ultimately make developers' lives better, easier, or more productive.

**Inclusive Community Building**: Technology should be accessible to people of all backgrounds, experience levels, and perspectives.

**Continuous Learning**: The tech landscape evolves rapidly; staying curious and adaptable is essential for long-term success.

**Quality Over Quantity**: Better to do fewer things exceptionally well than many things adequately.

### Collaboration Terms

**Attribution Appreciated**: If you're inspired by this resume format or borrow ideas, a mention or link back is appreciated but not required.

**Contributions Welcome**: Suggestions, improvements, or discussions about developer relations are always welcome.

**Commercial Use**: Feel free to adapt this approach for your own career materials or use it as inspiration for client work.

**Derivative Works**: You're encouraged to create your own variations and improvements on this theme.

### No Warranty Clause (Human Edition)

This developer advocate is provided "as is" without warranty of any kind. While I strive for excellence and continuous improvement, I'm human and occasionally:

- Make mistakes (but learn from them quickly)
- Need coffee to function optimally
- Have opinions that might not always align with yours
- Require reasonable work-life balance to maintain peak performance

### Support & Maintenance

**Long-term Stability**: Committed to professional growth and staying current with industry trends.

**Bug Reports**: Feedback on areas for improvement is welcomed and will be addressed promptly.

**Feature Requests**: Open to discussing new opportunities, challenges, and ways to add value to your team.

**Community**: Actively contributing to the developer relations community and supporting other professionals in the field.

### License Compatibility

This developer advocate is compatible with:
- ✅ Remote-first organizations
- ✅ Developer-focused product companies  
- ✅ Startup through enterprise environments
- ✅ Global, diverse, inclusive teams
- ✅ Companies that value creativity and innovation

May have compatibility issues with:
- ❌ Micromanagement environments
- ❌ Companies that don't value developer experience
- ❌ Organizations resistant to change or learning
- ❌ Cultures that don't support work-life balance

---`,

  "skills/developer-relations/SKILL.md": `---
name: developer-relations
description: "Expert-level Developer Relations strategy and execution. Use when discussing community building, developer adoption, technical evangelism, or DevRel program design and measurement."
---

# Developer Relations Mastery

## Core Philosophy

Developer Relations is about building genuine relationships at scale. It's the art of being helpful, authentic, and technical while driving business outcomes through developer success.

## Strategic Approach

### 1. Developer-First Mindset
${fence}yaml
principles:
  - "Developers can smell authenticity from miles away"
  - "Help first, sell never (the helping IS the selling)"
  - "Meet developers where they are, not where you want them to be"
  - "Technical credibility is earned, not claimed"
${fence}

### 2. Content Strategy Pyramid

**Level 1: Educational Foundation**
- Getting Started guides that actually work
- Common pitfalls and how to avoid them
- "Why" explanations, not just "how"
- Code examples that developers can copy-paste and modify

**Level 2: Advanced Applications**  
- Real-world use case implementations
- Performance optimization techniques
- Architecture decision guides
- Integration patterns with popular tools

**Level 3: Thought Leadership**
- Industry trend analysis and predictions
- Technical deep-dives into complex problems
- Open source contributions and discussions
- Conference talks and keynote presentations

### 3. Community Building Framework

**Phase 1: Foundation (0-500 members)**
- Establish clear community guidelines and moderation standards
- Create high-quality seed content to set the tone
- Be personally active - respond to every question in detail
- Focus on quality over quantity of interactions

**Phase 2: Growth (500-5K members)**
- Identify and nurture community champions and power users
- Create recurring events (AMAs, workshops, hackathons)
- Implement recognition programs for helpful community members
- Introduce community-generated content initiatives

**Phase 3: Scale (5K+ members)**
- Establish community governance and moderator programs
- Create self-service resources to reduce individual support load
- Launch ambassador/advocate programs with external developers
- Measure and optimize community health metrics

## Execution Toolbox

### Community Platforms Expertise
${fence}javascript
const platformStrategy = {
  discord: "Real-time community building, instant support",
  github: "Technical discussions, issue triage, contributions",
  stackoverflow: "SEO visibility, technical authority building", 
  reddit: "Authentic engagement, trend awareness",
  twitter: "Industry networking, thought leadership",
  linkedin: "Professional relationships, B2B outreach"
};
${fence}

### Content Creation Pipeline
1. **Research Phase**: Monitor community questions, GitHub issues, support tickets
2. **Creation Phase**: Write/record/build with developers' actual problems in mind  
3. **Distribution Phase**: Multi-platform sharing with platform-specific optimization
4. **Engagement Phase**: Active participation in discussions and follow-up questions
5. **Measurement Phase**: Track engagement, conversion, and developer success metrics

### Developer Onboarding Optimization

**Friction Audit Process**:
1. Time yourself going through your own onboarding flow
2. Recruit 5 external developers to attempt onboarding while screen sharing
3. Document every point of confusion, error, or abandonment
4. Prioritize fixes based on impact and effort
5. Implement improvements and measure time-to-first-success

**Common Friction Points**:
- Authentication/API key setup complexity
- Missing or outdated dependencies in setup instructions
- Unclear error messages that don't guide toward solutions
- Examples that work in isolation but not in real applications
- Documentation that assumes too much prior knowledge

## Measurement & Analytics

### Community Health Metrics
${fence}yaml
engagement_metrics:
  - active_monthly_users: "Quality of community engagement"
  - response_time: "Community support effectiveness" 
  - retention_rate: "Long-term community value"
  - content_creation_ratio: "Community self-sufficiency"

adoption_metrics:
  - signups_to_first_success: "Onboarding effectiveness"
  - api_usage_growth: "Product adoption velocity"
  - support_ticket_reduction: "Documentation quality"
  - developer_nps: "Overall satisfaction"

business_impact:
  - influenced_pipeline: "Revenue attribution"
  - customer_expansion: "Existing customer growth"
  - talent_acquisition: "Employer brand strength"
  - competitive_differentiation: "Market positioning"
${fence}

## Advanced Techniques

### 1. Technical Empathy Development
- Regularly build small projects with your own APIs/tools
- Set up fresh development environments monthly
- Monitor support channels for patterns in developer confusion
- Participate in hackathons using your company's products

### 2. Cross-Functional Collaboration

**With Product Teams**:
- Translate developer feedback into actionable product requirements
- Advocate for developer experience in feature planning
- Provide market intelligence on developer preferences and trends

**With Engineering Teams**:
- Bridge communication gaps between developers and internal teams
- Gather technical feasibility input for community requests
- Contribute code to open source projects and internal tools

**With Sales/Marketing**:
- Qualify technical leads and provide context for sales conversations
- Create technical content that supports marketing campaigns
- Develop case studies that resonate with technical decision-makers

### 3. Global Community Considerations
- Time zone rotation for live events and office hours
- Cultural sensitivity in communication and content creation
- Language localization priorities based on developer demographics
- Regional partnership opportunities and local meetup support

## Continuous Improvement

### Staying Current
- Daily: Monitor community health metrics and respond to urgent issues
- Weekly: Analyze content performance and engagement trends
- Monthly: Conduct developer experience audits and friction assessments
- Quarterly: Strategic review of community growth and business impact alignment

### Skill Development
- Technical skills: Stay current with language and framework trends
- Communication: Practice public speaking, writing, and video creation
- Analytics: Learn to measure and interpret community and business metrics
- Leadership: Develop skills in cross-functional collaboration and influence

---`,

  "skills/technical-writing/SKILL.md": `---
name: technical-writing
description: "Expert technical writing and documentation skills. Use when discussing API documentation, developer guides, technical blog posts, or content strategy for technical audiences."
---

# Technical Writing Excellence

## Core Principles

Technical writing for developers is about **clarity, accuracy, and empathy**. Every piece of content should help a developer accomplish their goals faster and with more confidence.

## Writing Portfolio & Examples

### Technical Blog Posts & Tutorials
${fence}yaml
developer_guides:
  - title: "Dissecting a Transaction Signature on Stacks"
    platform: "Hiro Blog"
    link: "https://www.hiro.so/blog/dissecting-a-transaction-signature-on-stacks"
    
  - title: "Using Real-Time Price Data In Clarity"
    platform: "Hiro Blog"
    link: "https://www.hiro.so/blog/using-real-time-price-data-in-clarity"

  - title: "Build Your Own Wallet on Stacks"
    platform: "Hiro Blog"
    link: "https://www.hiro.so/blog/build-your-own-wallet-on-stacks"
${fence}

### API Documentation & Developer Guides
${fence}yaml
documentation_projects:
  - title: "Your 0→1 guide for building a Clarity contract and app on Stacks."
    type: "Developer Quickstart"
    link: "https://docs.stacks.co/get-started/developer-quickstart"
    contribution: "Lead writer, information architecture"
    
  - title: "Verifying Bitcoin Transactions in Clarity"
    type: "How-To Guide"
    link: "https://docs.stacks.co/more-guides/verify-bitcoin-transactions-clarity"
    contribution: "Complete rewrite, user testing integration"

  - title: "Bridging USDCx"
    type: "How-To Guide"
    link: "https://docs.stacks.co/more-guides/bridging-usdcx"
    contribution: "Lead writer, information architecture"
${fence}

## Content Strategy Framework

### 1. Audience-First Writing

**Know Your Reader's Context**:
${fence}yaml
beginner_developer:
  needs: ["Step-by-step guidance", "Context for why", "Working examples"]
  pain_points: ["Assumed knowledge", "Missing setup steps", "Abstract concepts"]
  
experienced_developer:  
  needs: ["Quick reference", "Edge cases", "Performance considerations"]
  pain_points: ["Too much hand-holding", "Missing advanced details", "Outdated examples"]

enterprise_developer:
  needs: ["Security considerations", "Scale implications", "Integration patterns"] 
  pain_points: ["Toy examples", "Missing production concerns", "No compliance info"]
${fence}

### 2. The Inverted Pyramid Structure

**Start with the outcome**: What will the developer be able to do after reading this?
**Provide the quickest path**: Minimal viable example that works
**Layer in complexity**: Advanced usage, edge cases, troubleshooting
**Reference materials**: Complete API specs, parameter tables, error codes

### 3. Documentation Hierarchy

${fence}
├── Quick Start Guide (15 minutes to success)
├── Tutorials (task-oriented, step-by-step)  
├── How-To Guides (problem-solving focused)
├── Reference Documentation (comprehensive, searchable)
└── Conceptual Explanations (theory and background)
${fence}

## Writing Techniques

### 1. Code Example Best Practices

**Always Include**:
- Complete, runnable examples (not fragments)
- Expected output or results
- Common error scenarios and solutions
- Links to live demos when possible

**Example Structure**:
${fence}python
# ✅ Good: Complete, contextual example
import requests

def fetch_user_data(user_id, api_key):
    """
    Fetch user data from the API.
    
    Args:
        user_id (str): The unique user identifier
        api_key (str): Your API key from the dashboard
    
    Returns:
        dict: User data including name, email, and preferences
        
    Raises:
        requests.HTTPError: If the request fails or user not found
    """
    headers = {"Authorization": f"Bearer {api_key}"}
    response = requests.get(f"https://api.example.com/users/{user_id}", headers=headers)
    response.raise_for_status()  # Raises exception for 4xx/5xx status codes
    return response.json()

# Usage example
try:
    user = fetch_user_data("user_123", "your_api_key_here")  
    print(f"Welcome back, {user['name']}!")
except requests.HTTPError as e:
    if e.response.status_code == 404:
        print("User not found")
    else:
        print(f"API request failed: {e}")
${fence}

### 2. Effective Error Documentation

**Structure for Error Docs**:
1. **Error Message**: Exact text the developer will see
2. **Common Causes**: Why this error typically occurs  
3. **Solutions**: Step-by-step resolution steps
4. **Prevention**: How to avoid this error in the future

${fence}markdown
## Error: \`invalid_api_key\`

**Message**: \`{"error": "invalid_api_key", "message": "The provided API key is not valid"}\`

**Common Causes**:
- Using a test API key in production environment
- API key has been revoked or expired
- Extra whitespace in the API key value
- Missing "Bearer" prefix in Authorization header

**Solution**:
1. Verify your API key in the dashboard
2. Ensure you're using the correct environment (test vs. production)
3. Check for typos or extra characters in your key
4. Confirm your Authorization header format: \`Authorization: Bearer YOUR_KEY\`

**Prevention**: Store API keys in environment variables and validate them during application startup.
${fence}

### 3. Progressive Disclosure Techniques

**Layered Information Architecture**:
- **Headline**: What this section accomplishes
- **Summary**: One-sentence overview
- **Basic Example**: Minimal working code
- **Detailed Explanation**: How and why it works
- **Advanced Usage**: Edge cases, customization, optimization
- **Troubleshooting**: Common issues and solutions

### 4. Cross-Reference Strategy

**Internal Linking Best Practices**:
- Link to prerequisites before starting complex tutorials
- Reference related endpoints in API documentation
- Connect conceptual explanations to practical examples
- Create feedback loops between getting started and advanced guides

## Content Types Mastery

### 1. API Documentation

**Essential Sections**:
${fence}yaml
endpoint_documentation:
  - method_and_url: "POST /api/v1/users"
  - description: "Create a new user account"  
  - parameters: "Required/optional, with types and validation rules"
  - request_example: "Complete JSON payload"
  - response_example: "Success and error responses"
  - status_codes: "All possible HTTP status codes"
  - rate_limits: "Request limits and retry strategies"
${fence}

### 2. Tutorial Writing

**The "Tutorial Contract"**:
- Promise a specific outcome in the title
- List prerequisites upfront
- Provide estimated completion time
- Include validation steps throughout
- End with "what's next" suggestions

**Effective Tutorial Flow**:
${fence}
1. Hook: Why this matters to the developer
2. Setup: Environment and dependencies  
3. Foundation: Basic implementation
4. Enhancement: Add useful features
5. Validation: How to test it works
6. Next Steps: Where to go from here
${fence}

### 3. Troubleshooting Guides

**Problem-Solution Format**:
- **Symptoms**: What the developer observes
- **Diagnosis**: How to confirm the root cause
- **Resolution**: Step-by-step fix instructions
- **Verification**: How to confirm the fix worked


---`,

  "skills/community-building/SKILL.md": `---
name: community-building
description: "Expert community building and management for technical audiences. Use when discussing developer community growth, engagement strategies, community platforms, or community-driven adoption programs."
---

# Community Building Mastery

## Philosophy: Communities vs. Audiences

**Audiences consume content. Communities create value together.**

A thriving developer community is a place where:
- Developers help each other solve problems
- Knowledge sharing happens organically
- Members feel genuine connection to the product and each other
- The community becomes a competitive moat for your product

## Strategic Framework

### 1. Community Lifecycle Management

**Stage 1: Seeds (0-100 members)**
${fence}yaml
objectives:
  - Establish community culture and norms
  - Create high-quality foundational content
  - Be personally present and responsive
  - Recruit founding community champions

tactics:
  - Personal outreach to influential developers
  - Hand-curated, high-value content
  - Direct responses to every question/comment
  - Host small, intimate virtual events
  - Create detailed community guidelines

success_metrics:
  - Response time under 2 hours
  - 80%+ of questions answered by community team
  - Clear community identity and values established
${fence}

**Stage 2: Growth (100-1000 members)**  
${fence}yaml
objectives:
  - Scale engagement through community-driven content
  - Identify and nurture power users
  - Establish recurring programs and events
  - Build member-to-member connections

tactics:
  - Launch "Community Champions" recognition program
  - Create weekly/monthly recurring events (AMAs, workshops)
  - Implement peer recognition systems
  - Develop community-generated content initiatives
  - Host first in-person or large virtual event

success_metrics:
  - 60%+ of questions answered by community members
  - 10+ active community champions identified
  - Regular event attendance growing monthly
  - Member-to-member connection formation
${fence}

**Stage 3: Scale (1000+ members)**
${fence}yaml
objectives:
  - Achieve community self-sufficiency
  - Expand to multiple platforms and formats
  - Create sustainable governance structure
  - Measure and optimize business impact

tactics:
  - Establish community moderator program
  - Launch ambassador/advocate program with benefits
  - Create special interest groups and sub-communities  
  - Develop community advisory board
  - Implement comprehensive community analytics

success_metrics:
  - Community-driven content exceeds company content
  - Self-moderation maintains quality standards
  - Measurable impact on product adoption and retention
  - Community becomes talent acquisition funnel
${fence}

### 2. Platform Strategy

**Platform Selection Matrix**:
${fence}yaml
discord:
  strengths: ["Real-time conversation", "Voice/video capability", "Gaming culture fit"]
  use_cases: ["Developer support", "Casual community chat", "Live events"]
  
slack:  
  strengths: ["Professional context", "Threaded discussions", "Integrations"]
  use_cases: ["Enterprise communities", "Work-focused discussions"]

github_discussions:
  strengths: ["Code context", "SEO visibility", "Issue integration"]  
  use_cases: ["Technical Q&A", "Feature requests", "Open source projects"]

reddit:
  strengths: ["Discoverability", "Voting system", "Broader reach"]
  use_cases: ["Thought leadership", "Industry discussions", "Content amplification"]

custom_platform:
  strengths: ["Complete control", "Branded experience", "Custom features"]
  use_cases: ["Enterprise communities", "Unique workflow requirements"]
${fence}

### 3. Engagement Playbook

**The Community Flywheel**:
${fence}
Valuable Content → Member Engagement → Knowledge Sharing → 
Community Value → Attracts New Members → More Valuable Content
${fence}

**High-Impact Engagement Tactics**:

**Weekly Rhythms**:
- **Monday Motivation**: Spotlight community member projects
- **Wednesday Workshops**: Technical deep-dives and tutorials  
- **Friday Features**: New product updates with hands-on exploration

**Monthly Programs**:
- **Community AMAs**: Direct access to product teams
- **Member Showcases**: Platform for community members to present
- **Challenge/Hackathon Events**: Collaborative building opportunities

**Quarterly Initiatives**:
- **Community Awards**: Recognition for helpful members
- **Advisory Board Sessions**: Community input on product roadmap
- **Community Survey**: Measure satisfaction and gather feedback

## Community Management Excellence

### 1. Moderation Philosophy

**The "Helpful Default" Approach**:
- Assume positive intent in all interactions
- Guide rather than punish when possible
- Make community guidelines clear and consistently applied
- Address problems privately before public action

**Escalation Framework**:
${fence}yaml
level_1_gentle_guidance:
  - Private message with helpful redirection
  - Public reply modeling appropriate tone
  - Provide resources for better engagement

level_2_clear_boundaries:
  - Warning with specific behavioral expectations
  - Temporary restrictions (muting, time-outs)
  - Required reading of community guidelines

level_3_protective_action:
  - Permanent removal for repeated violations
  - Protection of vulnerable community members
  - Documentation for pattern recognition
${fence}

### 2. Community Health Metrics

**Engagement Health**:
${fence}yaml
activity_metrics:
  daily_active_users: "Short-term engagement indicator"  
  monthly_active_users: "Community vitality measure"
  posts_per_member: "Content creation distribution"
  response_rate: "Community helpfulness indicator"

relationship_metrics:
  member_retention_90day: "Community stickiness"
  cross_member_interactions: "Community connection strength"  
  returning_event_attendance: "Program effectiveness"
  peer_to_peer_help_ratio: "Community self-sufficiency"

business_impact:
  community_to_customer_conversion: "Revenue attribution"
  support_ticket_deflection: "Operational efficiency"
  product_feedback_volume: "Product development input"
  employer_brand_lift: "Talent attraction impact"
${fence}

### 3. Crisis Management

**Community Crisis Response Plan**:

**Preparation**:
- Clear escalation procedures for community team
- Pre-approved response templates for common issues
- Direct communication channels to legal/PR teams
- Community leader contact information readily available

**Response Protocol**:
1. **Assess**: Understand the scope and impact of the issue
2. **Acknowledge**: Respond quickly to show you're aware and engaged
3. **Act**: Take appropriate corrective action transparently  
4. **Adapt**: Update policies and procedures to prevent recurrence
5. **Archive**: Document lessons learned for future reference

## Advanced Community Strategies

### 1. Community-Led Growth

**Developer Advocate Program**:
${fence}yaml
program_structure:
  selection_criteria: ["Community contribution", "Technical expertise", "Communication skills"]
  benefits_package: ["Early access", "Direct product team contact", "Speaking opportunities", "Swag/equipment"]
  responsibilities: ["Content creation", "Event participation", "Feedback collection", "Peer mentoring"]
  success_metrics: ["Content reach", "Community engagement", "Product feedback quality"]
${fence}

### 2. Cross-Community Partnerships

**Strategic Community Alliances**:
- Partner with complementary developer communities for knowledge sharing
- Co-host events with related but non-competitive communities  
- Create content exchange programs with industry communities
- Develop joint hackathons and challenges

### 3. Global Community Considerations

**Localization Strategy**:
${fence}yaml
cultural_adaptation:
  - Communication style preferences by region
  - Local holiday and event calendar awareness
  - Regional developer conference partnership opportunities
  - Time zone rotation for live events and office hours

language_support:
  - Documentation translation priorities based on user data
  - Native-speaking community moderators for major markets
  - Regional social media and platform preferences
  - Local developer community partnership opportunities
${fence}

## ROI and Business Impact

### Measuring Community Value

**Direct Revenue Impact**:
- Community member to customer conversion rates
- Average customer lifetime value for community-sourced leads
- Upsell/expansion rates among community-engaged customers

**Cost Savings**:
- Support ticket deflection through peer-to-peer help
- Reduced customer acquisition costs through referrals
- Decreased time-to-value through community onboarding

**Strategic Value**:
- Product feedback volume and quality from engaged users
- Talent pipeline development through technical community engagement
- Competitive differentiation through community network effects

### Community Investment Framework

${fence}yaml
resource_allocation:
  team_time: "40% engagement, 30% content, 20% events, 10% strategy"
  budget_distribution: "50% tooling/platform, 30% events, 20% recognition/rewards"
  success_timeline: "3 months foundation, 6 months growth, 12 months business impact"
${fence}

---`,

  "skills/public-speaking/SKILL.md": `---
name: public-speaking
description: "Expert public speaking and technical presentation skills. Use when discussing conference talks, workshops, keynotes, or presentation design for technical audiences."
---

# Public Speaking Excellence

## Philosophy: Teaching Through Stories

The best technical talks don't just share information—they create **"aha!" moments** that stick with developers long after the presentation ends. Every talk should leave the audience feeling more capable and inspired.

## Speaking Portfolio & Examples

### Conference Talks & Workshops
${fence}yaml
recent_presentations:
  - title: "What is the Dev Experience for Bitcoin Layers?"
    event: "Bitcoin Builders Conf Nashville 2024"
    recording: "https://www.youtube.com/watch?v=RCHbqfaUbHQ"

  - title: "How to Build With The sBTC SDK on Stacks"
    event: "Stacks Hacker House Buenos Aires 2025"
    image: "https://x.com/adam_haun/status/1990116609655021678"

  - title: "Unit Testing Clarity Contracts"
    event: "Bitcoin Builders Conf Nashville 2024"    
    recording: "https://www.youtube.com/watch?v=2LjWHrZi65U"
${fence}

## Presentation Strategy Framework

### 1. Audience-Centric Design

**Know Your Audience Matrix**:
${fence}yaml
conference_developers:
  context: "Learning new skills, networking, inspiration-seeking"
  attention_span: "20-30 minutes focused, then need engagement"
  success_metric: "Immediate applicability to their work"
  
workshop_attendees:
  context: "Hands-on learning, problem-solving focused"  
  attention_span: "2-4 hours with breaks and interaction"
  success_metric: "Working code/solution by end of session"

enterprise_teams:
  context: "Solving specific business problems, ROI-focused"
  attention_span: "45-60 minutes with Q&A expectation"
  success_metric: "Clear path to implementation or adoption"

community_meetups:
  context: "Casual learning, networking, local connections"
  attention_span: "15-25 minutes, informal interaction welcome"
  success_metric: "Continued conversation after the talk"
${fence}

### 2. The Technical Talk Formula

**Structure Template**:
${fence}
1. Hook (2 minutes): Problem that resonates with everyone
2. Context (3 minutes): Why this matters now  
3. Solution Overview (5 minutes): Your approach at high level
4. Deep Dive (15 minutes): Technical implementation with demos
5. Real-World Application (8 minutes): Case studies and results
6. Next Steps (5 minutes): How audience can implement
7. Q&A (10+ minutes): Interactive engagement
${fence}

**The "Problem-Agitate-Solve" Approach**:
- **Problem**: Start with a pain point every developer recognizes
- **Agitate**: Show the real cost of not solving it 
- **Solve**: Present your solution with clear benefits

### 3. Storytelling for Technical Content

**Narrative Arc for Code Talks**:
${fence}
"I was building X when I ran into Y problem.
I tried the obvious solution Z, but it failed because...
Here's what I learned about the underlying issue...
So I built this approach instead...
Here's how it works [DEMO]...  
And here's the impact it had on our team/users..."
${fence}

## Presentation Crafting

### 1. Slide Design Principles

**Visual Hierarchy Rules**:
- **One concept per slide**: Cognitive load management
- **Code typography**: Large, high-contrast, syntax highlighted
- **Progressive disclosure**: Build complex ideas step by step
- **Visual metaphors**: Abstract concepts made concrete

**Code Demo Best Practices**:
${fence}yaml
preparation:
  - Test demos on presentation hardware
  - Have backup video recordings ready
  - Pre-position all necessary windows and tools
  - Include "oops" recovery strategies in talk notes

execution:  
  - Narrate what you're typing as you type it
  - Use large terminal fonts (24pt minimum)
  - Highlight changes in real-time
  - Pause for audience to process complex code
${fence}

### 2. Advanced Presentation Techniques

**The "Show, Don't Tell" Method**:
${fence}python
# ❌ Instead of saying "Here's an API that's hard to use"
def bad_api_example():
    return "Imagine confusing function names..."

# ✅ Show the actual painful experience  
def process_user_data_advanced_enterprise_edition_v2(
    user_data_dict, 
    processing_options_config_obj,
    callback_handler_interface_implementation,
    error_handling_strategy_pattern_factory
):
    # This is what developers actually face
    pass
${fence}

**Interactive Engagement Strategies**:
- **Live Polls**: "How many of you have experienced this problem?"
- **Code Challenges**: "Can anyone spot the bug in this snippet?"
- **Architecture Discussions**: "What would you try next?"
- **Show of Hands**: "Who's used X technology before?"

### 3. Workshop and Tutorial Delivery

**Hands-On Learning Structure**:
${fence}yaml
workshop_phases:
  setup: "Environment verification (15 minutes)"
  foundation: "Basic implementation everyone builds together (30 minutes)"
  exploration: "Guided individual/pair work (45 minutes)" 
  integration: "Advanced features and real-world concerns (60 minutes)"
  showcase: "Participants present their implementations (30 minutes)"
${fence}

**Managing Workshop Pace**:
- **Checkpoint System**: Regular "Is everyone caught up?" pauses
- **Buddy System**: Pair faster learners with those who need support
- **Parallel Tracks**: Advanced exercises for quick finishers
- **Multiple Solutions**: Show different approaches to the same problem

---`,

  "skills/video-content-creation/SKILL.md": `---
name: video-content-creation
description: "Expert video content creation for developer audiences. Use when discussing video tutorials, technical explainers, developer interviews, live streaming, or video production strategy for DevRel programs."
---

# Video Content Creation Mastery

## Philosophy: Visual Learning for Developers

Video content transforms abstract concepts into tangible understanding. For developers, seeing code in action, watching thought processes unfold, and observing real problem-solving creates deeper learning than text alone.

**Core Principles**:
- **Show, don't just tell**: Demonstrate concepts through live coding and real examples
- **Respect developer time**: Get to the point quickly and deliver actionable value
- **Authentic expertise**: Only create content you genuinely understand and can troubleshoot live
- **Accessibility first**: Design for different learning styles, connection speeds, and devices

## Content Strategy Framework

### 1. Video Content Taxonomy

**End-To-End Tutorial Videos (45-60+ minutes)**
${fence}yaml
purpose: "Step-by-step skill building"
structure: "Problem → Solution → Implementation → Validation"
success_metric: "Completion rate and follow-up questions"
examples:
  - [The Complete Beginner's Guide to Full-Stack Stacks Development](https://www.youtube.com/watch?v=Z9JQU_sOQLQ)
  - [Build a simple Bitcoin Runes Dashboard with Hiro's Runes API](https://www.youtube.com/watch?v=5sh6Gt3ojuw)
  - [Build a BuyMeACoffee app with sBTC](https://www.youtube.com/watch?v=jioU8ARNxFs)
${fence}

**Explainer Videos (3-8 minutes)**
${fence}yaml
purpose: "Concept clarification and 'aha!' moments"
structure: "Context → Problem → How it works → Why it matters"
success_metric: "Engagement rate and social sharing"
examples:
  - [How to Build with sBTC on Stacks](https://www.youtube.com/watch?v=dEJaSyiK63s)
  - [5 Ways to Interact With Devnet in the Hiro Platform](https://www.youtube.com/watch?v=R29s_GC8AoA)
  - [Everything You Need To Know About The Developer Roadmap On Stacks](https://www.youtube.com/watch?v=6Y1wj4FahhM)
${fence}

**Technical Deep Dives (15-45 minutes)**
${fence}yaml
purpose: "Advanced understanding for experienced developers"
structure: "Architecture → Implementation → Trade-offs → Real-world cases"
success_metric: "Watch time and technical discussion quality"
examples:
  - [Build Your Own Bitcoin L2 Wallet Browser Extension](https://www.youtube.com/watch?v=PdluvfFPWoU)
  - [A Deep Dive Into The sBTC Smart Contracts On Stacks](https://www.youtube.com/watch?v=uyqn3ojQkpg)
  - [New Post-Condition Improvements](https://www.youtube.com/watch?v=SMQ7RaUyRko)
${fence}

**Short Snippets (1-3 minutes)**
${fence}yaml
purpose: "Social media engagement and key concept highlights"
structure: "Hook → Key insight → Quick demo → Call-to-action"
success_metric: "Shares, saves, and click-through to full content"
examples:
  - ["Integrating DIA Oracles with Khawla"](https://x.com/hirosystems/status/1961071299658232142)
  - ["Improving onboarding with sponsored transactions"](https://x.com/ECBSJ/status/1872733332145930322)
  - ["Powerful linter in Clarinet Check"](https://x.com/StacksDevs/status/2018330169954754616)
${fence}

**Developer Interviews (20-60 minutes)**
${fence}yaml
purpose: "Community building and thought leadership"
structure: "Introduction → Background → Technical discussion → Insights → Resources"
success_metric: "Audience questions and guest network growth"
examples:
  - [Building Faster Payment Solutions for Bitcoin](https://www.youtube.com/watch?v=iuNQ88VoRiU)
  - "Open source maintainer stories"
  - [The Adventures of Learning the Clarity Smart Contract Language](https://www.youtube.com/watch?v=akHzkRXxG8Y)
${fence}

### 2. Content Planning Matrix

**Audience Skill Level vs Content Depth**:
${fence}
                  Beginner    Intermediate    Advanced
Quick Win         Tutorials   Explainers      Tips/Tricks
Deep Learning     Courses     Deep Dives      Masterclasses
Community         Q&A         Interviews      Panel Discussions
${fence}

## Production Workflow Excellence

### 1. Pre-Production Process

**Content Brief Template**:
${fence}yaml
video_objective: "What specific problem does this solve?"
target_audience: "Who is this for and what do they already know?"
learning_outcomes: "What will viewers be able to do after watching?"
key_concepts: "3-5 main technical points to cover"
demo_requirements: "What needs to be shown working?"
call_to_action: "What should viewers do next?"
${fence}

**Script Development Framework**:
${fence}markdown
## Hook (15-30 seconds)
- Problem statement that resonates
- Preview of the solution/outcome
- Time commitment ("In 10 minutes, you'll know how to...")

## Setup (30-60 seconds)  
- Prerequisites and assumptions
- Tools/environment needed
- Quick overview of approach

## Main Content (70% of video)
- Step-by-step implementation
- Live coding with narration
- Explanation of key decisions
- Common gotchas and solutions

## Wrap-up (30-60 seconds)
- Summary of what was accomplished
- Next steps or related topics
- Links to resources and documentation
${fence}

### 2. Technical Production Setup

**Essential Equipment Stack**:
${fence}yaml
video_recording:
  screen_capture: "OBS Studio or ScreenFlow"
  camera: "1080p webcam minimum, 4K preferred"
  lighting: "Ring light or softbox for face shots"
  background: "Clean, professional, or greenscreen"

audio_setup:
  microphone: "USB condenser mic (Audio-Technica ATR2100x-USB)"
  audio_interface: "Focusrite Scarlett Solo (for XLR mics)"
  headphones: "Closed-back monitoring headphones"
  acoustic_treatment: "Foam panels or recording in closet"

editing_software:
  beginner: "Camtasia or ScreenFlow"
  intermediate: "Adobe Premiere Pro or Final Cut Pro"
  advanced: "DaVinci Resolve (free, professional-grade)"
${fence}

**Recording Environment Optimization**:
${fence}yaml
technical_setup:
  - Dual monitor setup (code on one, notes on other)
  - Large terminal fonts (minimum 18pt, prefer 24pt+)
  - High contrast color schemes for code visibility
  - Prepared development environment with working examples
  - Backup recordings and multiple save points

visual_composition:
  - Screen recording at 1920x1080 minimum
  - Code editor with syntax highlighting optimized for video
  - Clear, readable font choices (Fira Code, Monaco, Consolas)
  - Consistent window positioning and sizing
  - Prepared "slides" or visual aids for concept explanation
${fence}

### 3. Live Coding Best Practices

**Narration Techniques**:
${fence}python
# ✅ Good: Narrate your thinking process
def process_user_data(users):
    """
    I'm creating a function that takes a list of users
    and I want to filter out inactive ones, then sort by registration date
    """
    # First, let's filter for active users only
    active_users = [user for user in users if user.is_active]
    
    # Now I'll sort by registration date, newest first
    # Using a lambda here because the date field is nested in user object
    return sorted(active_users, key=lambda u: u.created_at, reverse=True)

# ❌ Avoid: Silent typing with no explanation
def process_user_data(users):
    return sorted([u for u in users if u.is_active], key=lambda u: u.created_at, reverse=True)
${fence}

**Error Recovery Strategies**:
- **Embrace Mistakes**: "Oops, let me fix that typo - this is exactly what happens in real development"
- **Debug Live**: Walk through your debugging process rather than cutting it out
- **Multiple Takes**: Record several versions and edit the best parts together
- **Preparation**: Have working code ready, but show the building process

## Engagement and Accessibility

### 1. Visual Engagement Techniques

**Progressive Disclosure**:
${fence}yaml
concept_introduction:
  - Start with high-level diagram or overview
  - Zoom into specific implementation details
  - Build complexity gradually
  - Return to big picture with new understanding

code_presentation:
  - Highlight changed lines as you type
  - Use callout boxes for key concepts
  - Zoom in on complex sections
  - Side-by-side before/after comparisons
${fence}

**Interactive Elements**:
- **Polls and Questions**: "Pause the video and try to predict what happens next"
- **Challenges**: "Before I show the solution, see if you can implement this yourself"
- **Code Along Segments**: "Let's build this together - pause if you need more time"
- **Timestamps**: Clear chapter markers for easy navigation

### 2. Accessibility Considerations

**Multi-Modal Learning Support**:
${fence}yaml
visual_learners:
  - Code highlighting and callouts
  - Diagrams and architecture visualizations
  - Screen annotations and arrows
  - Visual progress indicators

auditory_learners:
  - Clear narration of all actions
  - Explanation of visual elements
  - Audio cues for transitions
  - Background music at appropriate levels

kinesthetic_learners:
  - Downloadable code examples
  - Step-by-step written guides
  - Interactive coding exercises
  - Hands-on challenges and projects
${fence}

**Technical Accessibility**:
- **Closed Captions**: Auto-generated and manually reviewed
- **Transcript Availability**: Searchable text versions of content
- **Multiple Resolutions**: 720p, 1080p, and 4K options where possible
- **Audio Descriptions**: For complex visual content

## Distribution and Platform Optimization

### 1. Platform-Specific Strategy

**YouTube Optimization**:
${fence}yaml
content_strategy:
  - SEO-optimized titles with relevant keywords
  - Custom thumbnails with code snippets or key concepts
  - Detailed descriptions with timestamps and links
  - End screens promoting related videos

engagement_tactics:
  - Community posts for audience questions
  - Premiere scheduling for live chat engagement
  - YouTube Shorts for key concept highlights
  - Playlists organized by skill level and technology
${fence}

**Professional Platforms**:
${fence}yaml
linkedin_video:
  - 3-5 minute professional insights
  - Industry trend discussions
  - Career advice and technical leadership
  - B2B developer tool demonstrations

twitter_video:
  - Quick tips and code snippets (under 2 minutes)
  - Live coding demos
  - Conference talk highlights
  - Developer community discussions
${fence}

### 2. Multi-Platform Content Adaptation

**Content Repurposing Strategy**:
${fence}
Long-form Tutorial (YouTube 20 min)
  ├── Key Concepts → LinkedIn Article
  ├── Code Snippets → Twitter Videos  
  ├── Audio Only → Podcast Episode
  ├── Step-by-step → Blog Post Series
  └── Highlights → Conference Talk Slides
${fence}

## ROI and Business Impact

### Video Content Success Metrics
${fence}yaml
direct_impact:
  - Developer tool adoption from tutorial viewers
  - API usage increases correlated with video releases
  - Conference speaking opportunities from video visibility
  - Community growth and engagement increases

strategic_value:
  - Thought leadership positioning in developer community
  - Talent acquisition through technical demonstrated expertise
  - Partner relationship building through collaborative content
  - Long-term SEO benefits and organic discovery
${fence}

---`,
};
