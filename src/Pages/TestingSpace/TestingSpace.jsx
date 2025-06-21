import React from "react"
import "./TestingSpace.css"
import ComicButton from "../../Components/3DComicButton"
import TextStagger from "../../Components/TextStagger"
import TextSlideButton from "../../Components/TextSlideButton"


export default function TestingSpace() {
    return (
        <div className="main-testing-space">
            <TextSlideButton text={"Hover me!"} color={"white"} textColor={"black"} secondaryColor={"black"} secondaryTextColor={"white"}></TextSlideButton>
        </div >
    )
}