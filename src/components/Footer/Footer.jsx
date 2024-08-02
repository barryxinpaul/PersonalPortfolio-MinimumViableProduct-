import React from "react";
import "./Footer.css";

function Footer () {
    return (
        <>
        <div>
            <ul id="footerlist">
                <li className="footerlink"><a href="mailto: e:bpaul33@uwo.ca">e:bpaul33@uwo.ca</a></li>
                <li className="footerlink"><a href="https://github.com/barryxinpaul" target="_blank" rel="noopener noreferrer">github/barryxinpaul</a></li>
                <li className="footerlink"><a href="https://www.linkedin.com/in/barryxpaul/" target="_blank" rel="noopener noreferrer">linkedin/in/barryxpaul</a></li>
            </ul>
        </div>
        </>
    )
}

export default Footer