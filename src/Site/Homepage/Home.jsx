import React from "react";
import "./Home.css"
import FirstSection from "./Sections/FirstSection/FirstSection";
import Navbar from "../Components/Navbar/Navbar";


export default function Home() {
    return (
        <div className="main-home-page">
            <div className="overlay"></div>
            <Navbar></Navbar>
            <div className="home-page">
                <FirstSection></FirstSection>
                <div className="main-second-section"></div>
            </div>
        </div>
    )
}