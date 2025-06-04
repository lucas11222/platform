import React, { useEffect, useState } from "react";
import "./Pricing.css";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import FirstSection from "./Sections/FirstSection/FirstSection";
import Navbar from "../Components/Navbar/Navbar";
import Noise from "../../blocks/Animations/Noise/Noise";

gsap.registerPlugin(CustomEase);

export default function Pricing() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Set screen height only once on load
        setScreenHeight(window.innerHeight);
    }, []);

    return (
        <>
            <Noise
                patternSize={400}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={2}
                patternAlpha={20}
            />
            <div className="main-pricing-page">
                <Navbar />
                <div className="pricing-page" style={{ minHeight: `${screenHeight}px` }}>
                    <FirstSection />
                </div>
            </div>
        </>
    );
}
