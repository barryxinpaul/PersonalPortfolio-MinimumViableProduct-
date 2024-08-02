import React from "react"
import "./Experiences.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Timeline from "./Timeline/Timeline"
import PRLLogo from "../../assets/images/propelholdings.png"
import HTLogo from "../../assets/images/HotTakes.png"
import AlephLogo from "../../assets/images/alephlogo.png"
import W5Logo from "../../assets/images/w5logo.png"

function Experiences() {
    return (
      <>
      <div id="background">
        <div className="navbar">
          <Navbar />
        </div>
        <div id="ExperienceHero">
          <h1 id="ExperienceTitle">Experiences</h1>
          <Timeline />
          <div>
            {/*<ul id="imageslist">
              <li className="images"><img src={PRLLogo} alt="Propel Holdings Logo" /></li>
              <li className="images"><img src={HTLogo} alt="HotTakes Logo" /></li>
              <li className="images"><img src={AlephLogo} alt="Aleph Group Logo" /></li>
            </ul> */}
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Experiences
  