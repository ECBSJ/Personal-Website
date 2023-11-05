import React, { useEffect } from "react"
import { MdOpenInNew } from "react-icons/md"

function Socials() {
  return (
    <>
      <div className="container">
        <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
          <a className="display-flex socials" href="https://twitter.com/ECBSJ" target="_blank">
            Twitter
            <MdOpenInNew />{" "}
          </a>
          <a className="display-flex socials" href="https://github.com/ECBSJ" target="_blank">
            Github
            <MdOpenInNew />
          </a>
          <a className="display-flex socials" href="https://www.linkedin.com/in/ericchoy256/" target="_blank">
            LinkedIn
            <MdOpenInNew />
          </a>
          <a className="display-flex socials" href="https://mirror.xyz/ecbsj.eth" target="_blank">
            Blog/Mirror
            <MdOpenInNew />
          </a>
          <a className="display-flex socials" href="" target="_blank">
            Resume/CV
            <MdOpenInNew />
          </a>
        </div>
      </div>
    </>
  )
}

export default Socials
