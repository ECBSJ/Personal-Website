import { MdOpenInNew } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri";
import { MdCameraFront } from "react-icons/md";
import { TbAbc } from "react-icons/tb";

function FeaturedTweets() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured featured-tweet">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <RiTeamFill className="featured__content-title-icon" style={{ color: "#929292" }} />
              Cross-Team Collaboration
            </h2>
            <small>Collaborative product demo with Khawla from DIA.</small>
            <p className="featured__content-body">Being able to collaborate with other projects' Product or DevRel team is an underrated content move for dev teams. It brings to life why a certain integration was built and why it should be used. This also acts as a win-win in the context of exposure and promotion.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/hirosystems/status/1961071299658232142" target="_blank">
              Tweet
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-tweet">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <MdCameraFront className="featured__content-title-icon" style={{ color: "#929292" }} />
              Engineers Front and Center
            </h2>
            <small>Thanks to Stacks Core engineer, Brice Dobry, for diving deep in this one.</small>
            <p className="featured__content-body">I enjoy bringing internal engineers onto the forefront of content. Not only does the community get to see who's really behind the tech but it also gives me a chance to clarify questions I even had. Putting myself in the shoes of a new developer tremendously helps with content creation.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/StacksDevs/status/2032411436971098540" target="_blank">
              Tweet
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
        <div className="display-flex featured featured-tweet">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <TbAbc className="featured__content-title-icon" style={{ color: "#929292" }} />
              Humanizing Announcements
            </h2>
            <small>Let's break down what this partnership really means.</small>
            <p className="featured__content-body">Certain announcements need a more human explanation to capture what something really means. I felt giving context to this partner integration was important considering the available wallet capabilities that already existed in the Stacks ecosystem. Clarifying rather than creating more confusion.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://x.com/ECBSJ/status/1988863439436136853" target="_blank">
              Tweet
              <MdOpenInNew className="featured__content-title-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedTweets
