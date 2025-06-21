import React, { useRef } from "react";
import gsap from "gsap";
import "./3DComicButton.css";

export default function ComicAvatar({ image, alt, borderColor, color }) {

    const avatarRef = useRef(null)

    const handleMouseEnter = () => {
        gsap.to(avatarRef.current, {
            duration: 0.1,
            y: -4, // Pushes the button up
            ease: "bounce.inOut",
            boxShadow: "0px 4px 0 var(--border-color)", // Restores shadow
            overwrite: true
        });
    };

    const handleMouseLeave = () => {
        gsap.to(avatarRef.current, {
            duration: 0.1,
            y: 0, // Returns the button to its original position
            ease: "bounce.inOut",
            boxShadow: "0px 0px 0 var(--border-color)", // Removes shadow
            overwrite: true
        });
    };

    const handleMouseDown = () => {
        gsap.to(avatarRef.current, {
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
        <img
            ref={avatarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="avatar"
            src={image}
            alt={alt}
            style={{
                "--border-color": borderColor,
                "--button-color": color,
            }}
        />
    );

}
