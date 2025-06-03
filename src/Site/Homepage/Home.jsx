import React, { useEffect, useRef } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import FirstSection from "./Sections/FirstSection/FirstSection";
import SecondSection from "./Sections/SecondSection/SecondSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import Noise from "../../blocks/Animations/Noise/Noise"

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function Home() {
    const mainRef = useRef(null);


    useEffect(() => {


        gsap.fromTo(mainRef.current, {
            backgroundSize: "100% 250%",
        }, {
            backgroundSize: "120% 150%",
            duration: 2,
            ease: "power1.inOut", // Easing included here,
            delay: 0.2
        });
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
            <div className="main-home-page" ref={mainRef}>
                <Navbar />
                <div className="home-page">
                    <FirstSection />
                    {/* <SecondSection /> */}
                </div>
            </div>
        </>
    );
}
