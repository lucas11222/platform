import React from "react";
import "./FAQ.css"
import FirstSection from "./Sections/FirstSection/FirstSection";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Noise from "../../blocks/Animations/Noise/Noise";

export default function FAQ() {
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
            <div className="main-faq-page">
                <Navbar></Navbar>
                <div style={{ minHeight: `${screenHeight}px` }} className="faq-page">
                    <FirstSection></FirstSection>
                </div>
            </div>
        </>
    )
}
