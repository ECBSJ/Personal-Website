import { MdOpenInNew } from "react-icons/md"
import { MdCoPresent } from "react-icons/md";

function FeaturedIRL() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured featured-irl">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdCoPresent className="featured__content-title-icon" style={{ color: "#929292" }} />
              Bitcoin Builders Conf
            </h2>
            <small>"What is the Dev Experience for Bitcoin Layers?" | Nashville 2024</small>
            <p className="featured__content-body">Being on a panel is more fun when the entire panel is with your colleagues. Shared experience and knowledge gives the conversation more focus. We conversed on how bitcoin devtools now spans across apps, wallets, and layers. Each of these facets have their own devtools that don't always ship the same DevEx. I shared the subtle nuances of how different bitcoin devtools comes with its own unique learning curve and contextual mental model, despite its shared end goal.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://www.youtube.com/watch?v=RCHbqfaUbHQ" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-irl">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdCoPresent className="featured__content-title-icon" style={{ color: "#929292" }} />
              Stacks Hacker House
            </h2>
            <small>"How to Build With The sBTC SDK on Stacks" | Buenos Aires 2025</small>
            <p className="featured__content-body">For developers, let alone users, understanding how bitcoin is "bridged" over to a different chain has its mental and technical challenges. Despite the amount of content I needed to cover for this topic, a mix of whiteboarding, code walkthroughs, and the actual UI demo usually is a bonafide approach. Explain clearly while keeping their focus engaged is my thought process for demo preparations.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/adam_haun/status/1990116609655021678" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-irl">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdCoPresent className="featured__content-title-icon" style={{ color: "#929292" }} />
              Bitcoin Builders Conf
            </h2>
            <small>"Unit Testing Clarity Contracts" | Nashville 2024</small>
            <p className="featured__content-body">Attemping to give a rockstar presentation on unit tests is almost an oxymoron. Unit tests are...well, simply unit tests. Emphasizing the need for it in the context of financial smart contracts helps. Notice how I also prepare a mix of slides and code together to keep the audience engaged. Regardless, the magic was in the specific unit testing SDK that needed to be accentuated.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://www.youtube.com/watch?v=2LjWHrZi65U" target="_blank">
              Watch
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedIRL
