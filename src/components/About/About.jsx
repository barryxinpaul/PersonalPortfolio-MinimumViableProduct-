import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import Headshot from "../../assets/images/Headshot.jpeg"

function About () {
    return (
        <>
        <div>
        <div id="aboutbackground">
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
            </div>
            <div>
            <img id="headshot" src={Headshot} alt="Barry Paul" />
            <div id="desc">
                <h1>About me!</h1>
                <p>Hey! I'm Barry, a second year student at Western University with a passion for working on new projects.  From event
                    planning, and case competitions to coding innovative products, I thrive in dynamic environments. I'm currently
                     exploring careers in Product Management and Consulting and I'm always open to chat! Reach me at bpaul33@uwo.ca.
                     <br /><br />My entrepreneurial journey began with a passion for problem-solving and a drive to create positive change.
                      Over the past year, I've worked as a consultant analyst and product operations intern for two sports-focused 
                      startups aiming to crack the North American and European markets.In one instance, I helped develop a new marketing
                      strategy that increased user engagement by 80% and increased pre-launch signups by 40%. What I love most about 
                      entrepreneurship is its dynamic nature—it challenges me to constantly learn, evolve, and think outside the box.</p>
            </div>
            </div>  
        </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default About