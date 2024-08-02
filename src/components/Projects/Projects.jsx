import React from "react"
import "./Projects.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


function Projects() {
    return (
      <>
      <div id="projectsbackground">
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <h1 id="ExperienceTitle">Projects</h1>
          <div className="project">
            <h1>Bitesy</h1>
          </div>
        </div>
        <Footer />
      </div>
      </>
    )
  }
  
  export default Projects
  