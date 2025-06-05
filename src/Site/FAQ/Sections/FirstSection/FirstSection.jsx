import React, { useEffect, useRef } from "react";
import "./FirstSection.css"
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import ButtonAnimated from "../../../Components/ButtonAnimated/ButtonAnimated";

gsap.registerPlugin(CustomEase, SplitText)


function fixMask({ elements, masks }, baseLineHeight = 1.3) {
    const [firstElement] = elements;
    const lineHeight = parseFloat(
        gsap.getProperty(firstElement, "line-height", "em")
    );
    const lineHeightDifference = lineHeight - baseLineHeight;

    masks.forEach((mask, i) => {
        const isFirst = i === 0;
        const isLast = i === masks.length - 1;

        gsap.set(mask, {
            lineHeight: baseLineHeight,
            marginTop: isFirst ? `${0.6 * lineHeightDifference}em` : "0",
            marginBottom: isLast ? "0em" : `${lineHeightDifference}em`,
        });
    });
}

export default function FirstSection() {

    const split1Ref = useRef(null)
    const split2Ref = useRef(null)
    const runAnimations = () => {
        // Line split for h1
        split1Ref.current = new SplitText(".topLeftFaq h1", {
            type: "lines",
            mask: "lines",
            linesClass: "wordFirstFaq",
        });
        split2Ref.current = new SplitText(".bottomText2 span", {
            type: "lines",
            mask: "lines",
            linesClass: "wordSmallBottomFaq",
        });

        fixMask(split1Ref.current);
        fixMask(split2Ref.current);

        // Animate lines
        gsap.fromTo(
            ".wordFirstFaq",
            { y: "100%" },
            {
                y: "0",
                ease: "smoothEase",
                stagger: 0.04,
                duration: 1.4,
            }
        );
        gsap.fromTo(
            ".wordSmallBottomFaq",
            { y: "100%" },
            {
                y: "0",
                ease: "smoothEase",
                stagger: 0.04,
                duration: 1.4,
                delay: 0.6
            }
        );
        gsap.fromTo(
            ".btn__faq__top button",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: { amount: 0.2, from: "left" },
                duration: 0.9,
                delay: 2,
            }
        );

        // Scramble text animation for .smallText span
        const targetText = "Frequently Asked Questions";
        gsap.to(".smallText3 span", {
            scrambleText: {
                text: targetText,
                chars: "XOXOXO",
                speed: 0,
            },
            duration: 0.8,
            ease: "smoothEase",
        });
    }

    useEffect(() => {
        CustomEase.create("smoothEase", "0.87, 0, 0.13, 1");

        runAnimations();

        const prevWidthRef = { current: window.innerWidth };

        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth !== prevWidthRef.current) {
                prevWidthRef.current = newWidth;
                runAnimations();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (split1Ref.current) split1Ref.current.revert();
        };
    }, []);

    return (
        <div className="main-first-section-faq">
            <div className="first-section-faq">
                <div className="topLeftFaq">
                    <div className="smallText3">
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h1>Answers to questions you might have.</h1>
                    <div className="bottomText2">
                        <span>Get clear, concise answers to help you better understand how Lunar works and what it offers.</span>
                    </div>
                    <div className="btn__faq__top">
                        <ButtonAnimated onClick={() => { window.location.replace("/app") }} text={"Get Started →"} textColor={"white"} background={"black"} borderColor={"black"}></ButtonAnimated>
                        <ButtonAnimated onClick={() => { window.location.replace("/app/terms") }} text={"Permissions →"} textColor={"black"} background={"#FFFB00"} borderColor={"black"}></ButtonAnimated>
                    </div>
                </div>
                <div className="faq-list">
                </div>
            </div>
        </div>
    )
}