import { useState } from "react"
import Hero from "./LandingPage/Hero"
import Quote from "./LandingPage/Quote"
import Agent from "./LandingPage/Agent"
import About from "./LandingPage/About"
import FeaturedProjects from "./LandingPage/FeaturedProjects"
import FeaturedWritings from "./LandingPage/FeaturedWritings"
import Socials from "./LandingPage/Socials"
import FeaturedVideos from "./LandingPage/FeaturedVideos"
import FeaturedTweets from "./LandingPage/FeaturedTweets"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <div id={theme}>
        <Hero theme={theme} setTheme={setTheme} />
        {/* <Quote /> */}
        <Agent />
        {/* <About /> */}
        <FeaturedWritings />
        <FeaturedVideos />
        <FeaturedTweets />
        <FeaturedProjects />
        <Socials />
      </div>
    </>
  )
}

export default App
