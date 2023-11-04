import React, { useEffect } from "react"
import { MdOutlineLightMode, MdLightMode } from "react-icons/md"
import { IconContext } from "react-icons"

function Hero({ theme, setTheme }) {
  function toggleTheme() {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
      <div className="container">
        <IconContext.Provider value={{ size: "30px" }}>{theme == "light" ? <MdOutlineLightMode onClick={(e) => toggleTheme()} className="icon" /> : <MdLightMode onClick={(e) => toggleTheme()} className="icon" />}</IconContext.Provider>
        <h1 style={{ position: "relative", fontSize: "29vw", fontWeight: "600" }}>
          ECBSJ
          <span className="moniker-subtitle">That's my moniker!</span>
        </h1>
      </div>
    </>
  )
}

export default Hero
