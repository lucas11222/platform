import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import "./ButtonAnimated.css";

gsap.registerPlugin(SplitText, CustomEase);

export default function ButtonAnimated({ onClick, text, background, textColor, width, borderColor }) {

    return (
        <button
            onClick={onClick}
            style={{ width: width, color: textColor, background: background, border: `1px solid ${borderColor}` }}
            className="btn"
        >
            <span>{text}</span>
        </button >
    );
}
