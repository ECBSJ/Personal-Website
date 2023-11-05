import React, { useEffect } from "react"

function Quote() {
  return (
    <>
      <div style={{ flexDirection: "column" }} className="container">
        <div style={{ flex: 1, width: "100%" }}></div>
        <div style={{ flex: 2, width: "100%", textAlign: "left" }}>
          <span className="moniker" style={{ display: "inline-block", height: "100%", width: "70%" }}></span>
        </div>
        <div style={{ flex: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p className="quote">Things Aren't Always Black And White.</p>
        </div>
        <div style={{ flex: 2, width: "100%", textAlign: "right" }}>
          <span className="moniker-reverse" style={{ display: "inline-block", height: "100%", width: "70%" }}></span>
        </div>
        <div style={{ flex: 1, width: "100%" }}></div>
      </div>
    </>
  )
}

export default Quote
