import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import "./ButtonAnimated.css";

gsap.registerPlugin(SplitText, CustomEase);

export default function ButtonAnimated({ onClick, text, background, textColor, width, borderColor }) {
    const dup1Ref = useRef(null);
    const dup2Ref = useRef(null);
    const duplicate1DivRef = useRef(null);
    const duplicate2DivRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 1000) {
            const height = dup1Ref.current.offsetHeight;
            dup1Ref.current.parentElement.style.height = (height + 2) + "px";
        }
    }, []);

    useEffect(() => {
        const split1 = new SplitText("#dup1", {
            type: "words",
            wordsClass: "dup1char",
        });
        const split2 = new SplitText("#dup2", {
            type: "words",
            wordsClass: "dup2char",
        });

        duplicate1DivRef.current = dup1Ref.current.querySelectorAll("div");
        duplicate2DivRef.current = dup2Ref.current.querySelectorAll("div");


        const mm = gsap.matchMedia();

        mm.add("(hover: hover) and (pointer: fine)", () => {
            const button = dup1Ref.current.closest("button");
            if (!button) return;

            const slideUp = () => {
                if (!duplicate1DivRef.current || !duplicate2DivRef.current) return;

                gsap.fromTo(
                    duplicate1DivRef.current,
                    { top: "0%", opacity: 1 },
                    {
                        top: "-100%",
                        opacity: 0,
                        duration: 0.6,
                        ease: "power4.inOut",
                        stagger: 0.01,
                    }
                );

                gsap.fromTo(
                    duplicate2DivRef.current,
                    { top: "100%", opacity: 0 },
                    {
                        top: "-100%",
                        opacity: 1,
                        duration: 0.6,
                        ease: "power4.inOut",
                        stagger: 0.01,
                    }
                );
            };

            button.addEventListener("mouseenter", slideUp);

            return () => {
                button.removeEventListener("mouseenter", slideUp);
            };
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <button
            onClick={onClick}
            style={{ width: width, color: textColor, background: background, border: `1px solid ${borderColor}` }}
            className="btn"
        >
            <div className="wrap">
                <span ref={dup1Ref} id="dup1">
                    {text}
                </span>
                <span ref={dup2Ref} id="dup2">
                    {text}
                </span>
            </div>
        </button>
    );
}
