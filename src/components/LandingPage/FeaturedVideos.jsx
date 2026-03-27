import { MdOpenInNew } from "react-icons/md"
import { FaWallet, FaCode } from "react-icons/fa"
import { MdDashboard } from "react-icons/md";

function FeaturedVideos() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured featured-video">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <FaCode className="featured__content-title-icon" style={{ color: "#929292" }} />
              Full-Stack App on Stacks
            </h2>
            <small>Clarity Smart Contracts | Stacks | Web3 Dev | Full-Stack | Tutorial</small>
            <p className="featured__content-body">I recorded this as Stacks was wrapping up its Nakamoto upgrade, which made it a great moment to build in the ecosystem. There wasn’t really an end-to-end tutorial covering the full range of open-source dev tools, so I wanted to create one. It was a great chance to bring together Hiro's devtools while showing what it actually looks like to build on a Bitcoin L2.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://www.youtube.com/watch?v=Z9JQU_sOQLQ" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-video">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <FaWallet className="featured__content-title-icon" style={{ color: "#929292" }} />
              Build A Bitcoin L2 Wallet
            </h2>
            <small>Bitcoin | Stacks Connect | Web3 Dev | Crypto Wallet | Chrome Extension</small>
            <p className="featured__content-body">I’ve always been interested in crypto wallet tech, and this tutorial came out of that—especially as @stacks/connect was transitioning from jsontokens to a more modern RPC-style interface. In it, I walk through the wallet-to-dapp communication flow, building a basic wallet UI, integrating with Stacks.js for signing, and deploying it as a Chrome extension.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://www.youtube.com/watch?v=PdluvfFPWoU" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-video">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdDashboard className="featured__content-title-icon" style={{ color: "#929292" }} />
              Bitcoin Runes Dashboard
            </h2>
            <small>Bitcoin | Runes | Dashboard | Next.js | Hiro API</small>
            <p className="featured__content-body">I made this video when Hiro released their hosted Runes API during the bull run. There was a lot of interest but not many clear, end-to-end examples, so I built a simple dashboard to show how developers can actually use the API in practice.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://www.youtube.com/watch?v=5sh6Gt3ojuw" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedVideos
