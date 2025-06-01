import React from "react";
import "./SecondSection.css"
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText)


export default function SecondSection() {
    return (
        <div className="main-second-section">
            <div className="secondSection">
                <h1>Hello i am secondsetion  send help</h1>
            </div>
        </div>

    )
}