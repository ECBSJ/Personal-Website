import React, { useEffect } from "react"
import { MdOpenInNew } from "react-icons/md"
import artsnlLogo from "../../assets/artsnl-logo-gray.svg"
import hhdaoLogo from "../../assets/hhdao-logo-gray.png"

function FeaturedProjects() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured">
          <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
            <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "6vw", fontWeight: "700" }}>
              <img style={{ width: "5vw" }} src={artsnlLogo} alt="artsnl-logo" id="artsnl-logo" />
              ARTSNL
            </h2>
            <small>Self-Custody | Multicurrency | WalletConnect | Browser Based | Serverless</small>
            <p style={{ fontSize: "1.2vw" }}>ARTSNL is a fully open-sourced, DIY’ed approached cryptocurrency wallet. Common wallet UX processes, such as key generation and transaction structuring, are expanded upon for a more educational hands-on manner. More control is given to the end user making the entire crypto wallet experience more artisanal.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex" href="https://artsnl.xyz" target="_blank">
              App
              <MdOpenInNew />{" "}
            </a>
            <a className="display-flex" href="https://mirror.xyz/artsnl.eth/8B8AHD2JZnMx3AmYTU7F40Y9rUMPyOWF8DW3btWQd1M" target="_blank">
              Whitepaper
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="https://github.com/ECBSJ/ARTSNL" target="_blank">
              Source Code
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="https://twitter.com/ARTSNL" target="_blank">
              Social
              <MdOpenInNew />
            </a>
          </div>
        </div>
        <div className="display-flex featured">
          <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
            <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "6vw", fontWeight: "700" }}>
              <img style={{ width: "5vw" }} src={hhdaoLogo} alt="hhdao-logo" id="hhdao-logo" />
              happyhourDAO
            </h2>
            <small>Ethereum | Social DAO | Drink-To-Earn | 2-Token Model | Fair Launch</small>
            <p style={{ fontSize: "1.2vw" }}>The happyhourDAO aims to provide an open, web3 community connecting the post-pandemic recovering F&B industry with plebs in the metaverse through its native ERC20 token, $HOUR. Provisioning an immersive rewards system to incentivize a positive loop between F&B establishments and patrons.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex" href="https://happyhourdao.xyz" target="_blank">
              App
              <MdOpenInNew />{" "}
            </a>
            <a className="display-flex" href="https://drive.google.com/file/d/1u68BTH5Hx1sXBIglYcRtpedAYcFtnXgX/view?usp=sharing" target="_blank">
              Whitepaper
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="https://github.com/happyhourDAO/HHDAO-Mainnet-App" target="_blank">
              Source Code
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="https://twitter.com/happyhourDAO" target="_blank">
              Social
              <MdOpenInNew />
            </a>
          </div>
        </div>
        <div className="display-flex featured">
          <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
            <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "6vw", fontWeight: "700" }}>
              <img style={{ width: "5vw" }} src={artsnlLogo} alt="artsnl-logo" id="artsnl-logo" />
              ARTSNL
            </h2>
            <small>Self-Custody | Multicurrency | WalletConnect | Browser Based | Serverless</small>
            <p style={{ fontSize: "1.2vw" }}>ARTSNL is a fully open-sourced, DIY’ed approached cryptocurrency wallet. Common wallet UX processes, such as key generation and transaction structuring, are expanded upon for a more educational hands-on manner. More control is given to the end user making the entire crypto wallet experience more artisanal.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex" href="" target="_blank">
              App
              <MdOpenInNew />{" "}
            </a>
            <a className="display-flex" href="" target="_blank">
              Whitepaper
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="" target="_blank">
              Source Code
              <MdOpenInNew />
            </a>
            <a className="display-flex" href="" target="_blank">
              Social
              <MdOpenInNew />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProjects
