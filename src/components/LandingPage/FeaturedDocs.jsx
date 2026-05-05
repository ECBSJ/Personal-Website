import { MdOpenInNew } from "react-icons/md"
import { MdDocumentScanner } from "react-icons/md";

function FeaturedDocs() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured featured-docs">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdDocumentScanner className="featured__content-title-icon" style={{ color: "#929292" }} />
              Bridging Bitcoin
            </h2>
            <small>Teach simply. Enable deeply.</small>
            <p className="featured__content-body">As one of the marquee products on Stacks, sBTC had a clear path for retail usage, but there was a gap in helping devs understand how to integrate it into their own apps. I addressed this by creating a guide that starts with easy-to-digest concepts before progressively diving into the implementation details. The guide also served as a foundation for multiple live demos.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://docs.stacks.co/more-guides/sbtc/bridging-bitcoin/btc-to-sbtc" target="_blank">
              Guide
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-docs">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdDocumentScanner className="featured__content-title-icon" style={{ color: "#929292" }} />
              Developer Quickstart
            </h2>
            <small>Nothing beats a succint 0→1 guide.</small>
            <p className="featured__content-body">There's nothing more impactful in documentation than its developer quickstart page. Getting it right is a constant and fluid work in progress. It can't be too simple nor can it be too complex. There's a sweet spot that I targeted by surfacing most of the pivotal cores of building on Stacks while keeping the steps simple. Most importantly giving the developer a wholistic sense of why it should be exciting to build here.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://docs.stacks.co/get-started/developer-quickstart" target="_blank">
              Guide
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-docs">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdDocumentScanner className="featured__content-title-icon" style={{ color: "#929292" }} />
              Integration With SDKs
            </h2>
            <small>Turning issues into larger initiatives.</small>
            <p className="featured__content-body">The basis for this guide stemmed from a developer in need of helping using Stacks with an external signing SDK. Long story short, the explainer guide led to a full blown hackathon and then an eventual grant given to a team to natively integrate Stacks into that external SDK. You can check out my reflection on how I turned this single developer issue into a DevRel flywheel.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "0.4vw", fontSize: "2vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://docs.stacks.co/more-guides/onboarding/signing-with-turnkey" target="_blank">
              Guide
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://www.hiro.so/blog/dissecting-a-transaction-signature-on-stacks" target="_blank">
              Explainer
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://x.com/StacksDevs/status/1974133224801755161" target="_blank">
              Hackathon
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://paragraph.com/@ecbsj/every-developer-issue-is-a-seed" target="_blank">
              Reflection
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedDocs
