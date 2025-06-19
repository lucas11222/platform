import React, { useRef } from "react";
import gsap from "gsap";
import "./3DComicButton.css";


/*


Copyright (c) 2025 Lunar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

YOU MAY NOT RESELL OR SUBLICENSE THE CODE FOR DIRECT MONETARY GAIN.

*/


export default function ComicButton({ onClick, text, borderColor, color, textColor }) {

    const buttonRef = useRef(null)

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            duration: 0.1,
            y: -4, // Pushes the button up
            ease: "bounce.inOut",
            boxShadow: "0px 4px 0 var(--border-color)", // Restores shadow
            overwrite: true
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            duration: 0.1,
            y: 0, // Returns the button to its original position
            ease: "bounce.inOut",
            boxShadow: "0px 0px 0 var(--border-color)", // Removes shadow
            overwrite: true
        });
    };

    const handleMouseDown = () => {
        gsap.to(buttonRef.current, {
            duration: 0.05,
            y: 4, // Pushes the button down
            ease: "bounce.inOut",
            boxShadow: "0px 2px 0 var(--border-color)",
            overwrite: true
        });
    };

    const handleMouseUp = () => {
        handleMouseEnter(); // Return to hover state on mouse release
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={onClick}
            className="button"
            style={{
                "--border-color": borderColor,
                "--button-color": color,
                "--text-color": textColor,
            }}
        >
            {text}
        </button>
    );

}   
