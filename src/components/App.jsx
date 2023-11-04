import { useState } from "react"
import Hero from "./LandingPage/Hero"
import Quote from "./LandingPage/Quote"
import About from "./LandingPage/About"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <div id={theme}>
        <Hero theme={theme} setTheme={setTheme} />
        {/* <Quote /> */}
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
