import gsap from "gsap";
import React, { useRef } from "react";
import "./LinkText.css";

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


export default function LinkText({ text = "Hover Me!", to }) {
    const underLineRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.fromTo(underLineRef.current, {
            x: "-101%", // Smooth animation using transformX

        }, {
            x: "0",
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(underLineRef.current, {
            x: "101%", // Reset animation using transformX
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
            onComplete: () => {
                gsap.set(underLineRef.current, { x: "-101%" })
            }
        });
    };

    return (
        <>
            {/* The Actual Code */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="linkText"
            >
                <a href={to}>{text}</a>
                <div ref={underLineRef} className="underLine"></div>
            </div>
        </>
    );
}
