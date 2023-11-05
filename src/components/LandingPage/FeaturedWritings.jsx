import React, { useEffect } from "react"
import { MdOpenInNew } from "react-icons/md"
import { SiMoonrepo } from "react-icons/si"
import { FaChartBar } from "react-icons/fa"
import { TbMathFunction } from "react-icons/tb"
import { IconContext } from "react-icons"

function FeaturedWritings() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <IconContext.Provider value={{ size: "3.5vw" }}>
          <div className="display-flex featured featured-writing">
            <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
              <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "4vw", fontWeight: "700" }}>
                <SiMoonrepo style={{ color: "#929292" }} />
                Which Side Of The Moon
              </h2>
              <small>Bitcoin | Postulate | Ruminate | Sci-Fi | Cyberpunk</small>
              <p style={{ fontSize: "1.2vw" }}>A witty, sci-fi piece written for BitcoinMagazine. It's postulates a look at two worlds, both of which use Bitcoin as the global currency, but that is where the similarities end. Motivation stems from Bitcoin being at a fork in the road, to decide on whether toxicity or openness will dictate the future.</p>
            </div>
            <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
              <a className="display-flex" href="https://bitcoinmagazine.com/culture/which-side-of-the-moon" target="_blank">
                Read
                <MdOpenInNew />{" "}
              </a>
            </div>
          </div>
          <div className="display-flex featured featured-writing">
            <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
              <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "4vw", fontWeight: "700" }}>
                <FaChartBar style={{ color: "#929292" }} />
                DeFi Investment Strategies
              </h2>
              <small>DeFi | Investments | Yield Farm | Performance Review | Price Analysis</small>
              <p style={{ fontSize: "1.2vw" }}>A data analysis based piece co-written for SEBA Bank. Motivation is to evaluate the performance of different DeFi portfolios. We test three different approaches: hold ETH as it is the major asset that gives exposure to DeFi, buy/sell governance tokens of different DeFi platforms, and the earning governance tokens through yield farming.</p>
            </div>
            <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
              <a className="display-flex" href="https://www.seba.swiss/insights/defi-investment-strategies-a-performance-review/" target="_blank">
                Read
                <MdOpenInNew />{" "}
              </a>
            </div>
          </div>
          <div className="display-flex featured featured-writing">
            <div className="display-flex" style={{ rowGap: "0.5vw", paddingLeft: "30px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flex: 1.5, width: "100%", height: "100%" }}>
              <h2 className="display-flex" style={{ columnGap: "20px", fontSize: "4vw", fontWeight: "700" }}>
                <TbMathFunction style={{ color: "#929292" }} />
                Examining Wallet Elasticity
              </h2>
              <small>Crypto Wallets | Taxonomy | Behavior Analysis | Elasticity | Categorization</small>
              <p style={{ fontSize: "1.2vw" }}>A reflective piece written on my blog in examining the presented three pillars of a crypto wallet and its widening usage spectrum. Ultimately proposing a practical method in quantifying a crypto wallet’s elasticity.</p>
            </div>
            <div className="display-flex" style={{ rowGap: "1vw", fontSize: "2.5vw", paddingRight: "30px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flex: 1, width: "100%", height: "100%" }}>
              <a className="display-flex" href="https://mirror.xyz/ecbsj.eth/NQ36pjPKCBUYQBT7tStVsqxX1ppUF9OVLlrTgJyXbXA" target="_blank">
                Read
                <MdOpenInNew />{" "}
              </a>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default FeaturedWritings
