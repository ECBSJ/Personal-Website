import React, { useEffect } from "react"
import { MdOpenInNew } from "react-icons/md"
import { LuConstruction } from "react-icons/lu"
import artsnlLogo from "../../assets/artsnl-logo-gray.svg"
import hhdaoLogo from "../../assets/hhdao-logo-gray.png"

function FeaturedProjects() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div className="display-flex featured">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <img style={{ width: "5vw" }} src={artsnlLogo} alt="artsnl-logo" id="artsnl-logo" />
              ARTSNL
            </h2>
            <small>Self-Custody | Multicurrency | WalletConnect | Browser Based | Serverless</small>
            <p className="featured__content-body">ARTSNL is a DIY’ed approached cryptocurrency wallet. Common wallet UX processes, such as key generation and transaction structuring, are expanded upon for a more educational hands-on manner. More control is given to the end user making the entire crypto wallet experience more artisanal.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "0.4vw", fontSize: "2vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://artsnl.xyz" target="_blank">
              App
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://mirror.xyz/artsnl.eth/8B8AHD2JZnMx3AmYTU7F40Y9rUMPyOWF8DW3btWQd1M" target="_blank">
              Whitepaper
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://github.com/ECBSJ/ARTSNL" target="_blank">
              Source Code
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://twitter.com/ARTSNL" target="_blank">
              Social
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
          </div>
        </div>
        <div className="display-flex featured">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <img style={{ width: "5vw" }} src={hhdaoLogo} alt="hhdao-logo" id="hhdao-logo" />
              happyhourDAO
            </h2>
            <small>Ethereum | Social DAO | Drink-To-Earn | 2-Token Model | Fair Launch</small>
            <p className="featured__content-body">The happyhourDAO aims to provide a web3 community connecting the F&B industry with plebs in the metaverse through its native ERC20 token, $HOUR. Provisioning an immersive rewards system to incentivize a positive loop between F&B establishments and patrons.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "0.4vw", fontSize: "2vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
            <a className="display-flex featured__link" href="https://happyhourdao.xyz" target="_blank">
              App
              <MdOpenInNew className="featured__content-projects-title-icon" />{" "}
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://drive.google.com/file/d/1u68BTH5Hx1sXBIglYcRtpedAYcFtnXgX/view?usp=sharing" target="_blank">
              Whitepaper
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://github.com/happyhourDAO/HHDAO-Mainnet-App" target="_blank">
              Source Code
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
            <a className="display-flex featured__link hide-on-mobile" href="https://twitter.com/happyhourDAO" target="_blank">
              Social
              <MdOpenInNew className="featured__content-projects-title-icon" />
            </a>
          </div>
        </div>
        <div className="display-flex featured">
          <div className="display-flex featured__content">
            <h2 className="display-flex featured__content-title">
              <LuConstruction className="featured__content-title-icon" style={{ color: "#929292" }} />
              Under Construction
            </h2>
            <small>Unknown | Unknown | Unknown | Unknown | Unknown</small>
            <p className="featured__content-body">My next project is currently under stealth development mode. More details to come later.</p>
          </div>
          <div className="display-flex" style={{ rowGap: "0.4vw", fontSize: "2vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}></div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProjects
