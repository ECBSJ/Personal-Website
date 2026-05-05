import { MdOpenInNew } from "react-icons/md"
import { FaWallet, FaCode } from "react-icons/fa"
import { MdDashboard } from "react-icons/md";

function FeaturedDemos() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured featured-demo">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <FaCode className="featured__content-title-icon" style={{ color: "#929292" }} />
              Checking Clarity Contracts
            </h2>
            <small>A feature in Clarinet that helps with Clarity syntax.</small>
            <p className="featured__content-body">Originally this was extracted from a weekly developer livestream. Its promotion as a standalone clip had value that needed to be shared due to ongoing debates on how Clarity syntax should be stylized and formatted.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/StacksDevs/status/2018330169954754616" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-demo">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <FaWallet className="featured__content-title-icon" style={{ color: "#929292" }} />
              Build A Bitcoin L2 Wallet
            </h2>
            <small>A practical walkthrough of wallet internals</small>
            <p className="featured__content-body">I’ve always been interested in crypto wallet tech, and this demo came out of that—especially as @stacks/connect was transitioning from jsontokens to a more modern RPC-style interface. In it, I walk through the wallet-to-dapp communication flow, building a basic wallet UI, integrating with Stacks.js for signing, and deploying it as a Chrome extension.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/hirosystems/status/1913257100551029174" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-demo">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdDashboard className="featured__content-title-icon" style={{ color: "#929292" }} />
              Sponsored transactions
            </h2>
            <small>Sponsoring new user transactions is an excellent onboarding tool.</small>
            <p className="featured__content-body">I made this video when I noticed a few projects were leveraging this. Sponsored transactions in Stacks was always a protocol feature but never really got traction. Sometimes, redundant repitition in calling out nifty features is the baseline for developer marketing.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/ECBSJ/status/1872733332145930322" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedDemos
