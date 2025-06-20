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
        CustomEase.create("smoothEase", "0.87, 0, 0.13, 1");

        const finalRight = window.innerWidth < 800 ? "-40px" : "20px";

        gsap.fromTo(".main-notice", {
            right: "-100%",
            opacity: 0,
            filter: "blur(8px)",
            rotateZ: -60,
        }, {
            right: finalRight,
            opacity: 0.8,
            rotateZ: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.inOut(0.9)",
            delay: 1
        });

        gsap.to(".main-notice", {
            right: "-100%",
            opacity: 0,
            filter: "blur(8px)",
            rotateZ: -60,
            duration: 0.5,
            delay: 7,
            ease: "back.inOut(0.9)"
        });

        gsap.fromTo(mainRef.current, {
            backgroundSize: "100% 250%",
        }, {
            backgroundSize: "120% 150%",
            duration: 2,
            ease: "power1.inOut",
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
                <div className="main-notice">
                    <h1>Are you coming from <a href="https://summer.hackclub.com">Summer Of Making 2025</a>?</h1>
                    <span>This project actually works! it&apos;s not just a simple front-end, click on the buttons to explore the platform!</span>
                </div>
                <div className="home-page">
                    <FirstSection />
                    {/* <SecondSection /> */}
                </div>
            </div>
        </>
    );
}
