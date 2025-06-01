import React, { useEffect, useRef } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import FirstSection from "./Sections/FirstSection/FirstSection";
import SecondSection from "./Sections/SecondSection/SecondSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const mainRef = useRef(null);

    useEffect(() => {
        gsap.to(mainRef.current, {
            backgroundSize: "100% 250%",
            duration: 1,
            ease: "power2.out", // Easing included here
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
        });
    }, []);

    return (
        <>
            <div className="overlay"></div>
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
