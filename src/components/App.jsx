import { useState } from "react"
import Hero from "./LandingPage/Hero"
import Quote from "./LandingPage/Quote"
import About from "./LandingPage/About"
import FeaturedProjects from "./LandingPage/FeaturedProjects"
import FeaturedWritings from "./LandingPage/FeaturedWritings"
import Socials from "./LandingPage/Socials"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <div id={theme}>
        <Hero theme={theme} setTheme={setTheme} />
        <Quote />
        <About />
        <FeaturedProjects />
        <FeaturedWritings />
        <Socials />
      </div>
    </>
  )
}

export default App
