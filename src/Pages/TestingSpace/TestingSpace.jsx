import React from "react"
import "./TestingSpace.css"
import ComicButton from "../../../ComponentCreation/3D Comic Button/3DComicButton"


export default function TestingSpace() {
    return (
        <div className="main-testing-space">
            <ComicButton text={"Helloo!"} onClick={() => { alert("yes, lets goo!") }}></ComicButton>
        </div >
    )
}