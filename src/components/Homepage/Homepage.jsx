import React from "react"
import "./Homepage.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import PRLLogo from "../../assets/images/propelholdings.png"
import HTLogo from "../../assets/images/HotTakes.png"


function Homepage() {
    return (
        <>
        <div>
        <div className="homepagegradient">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="container">
                    <div id="name"><h1>Barry Paul</h1></div>
                    <div id="phrase"><h2>is passionate about building products that'll help simplify people's lives.</h2></div>
                    <ul id="memo">
                        <li><h3 className="facts">currently: software engineer @ Propel Holdings (TSE:PRL)</h3></li>
                        <li><h3 className="facts">interests: coding, products, artificial intelligence</h3></li>
                    </ul>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </>
      
    )
  }
  
  export default Homepage
  