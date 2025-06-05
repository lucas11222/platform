import React from "react";
import "./FirstSection.css";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import ButtonAnimated from "../../../Components/ButtonAnimated/ButtonAnimated"

gsap.registerPlugin(SplitText, CustomEase, ScrambleTextPlugin);

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
    const split1Ref = useRef(null);
    const split2Ref = useRef(null);

    const runAnimations = () => {
        gsap.killTweensOf(".topLeftPricing h1, .smallText span");

        if (split1Ref.current) split1Ref.current.revert();
        if (split2Ref.current) split2Ref.current.revert();

        // Line split for h1
        split1Ref.current = new SplitText(".topLeftPricing h1", {
            type: "lines",
            mask: "lines",
            linesClass: "wordFirstPricing",
        });
        split2Ref.current = new SplitText(".bottomText span", {
            type: "lines",
            mask: "lines",
            linesClass: "wordSmallBottomPricing",
        });

        fixMask(split1Ref.current);
        fixMask(split2Ref.current);

        // Animate lines
        gsap.fromTo(
            ".wordFirstPricing",
            { y: "100%" },
            {
                y: "0",
                ease: "smoothEase",
                stagger: 0.04,
                duration: 1.4,
            }
        );
        gsap.fromTo(
            ".wordSmallBottomPricing",
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
            ".btn__pricing__top button",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: { amount: 0.2, from: "left" },
                duration: 0.9,
                delay: 2,
            }
        );

        // Scramble text animation for .smallText span
        const targetText = "PRICING";
        gsap.to(".smallText span", {
            scrambleText: {
                text: targetText,
                chars: "XOXOXO",
                speed: 0,
            },
            duration: 1,
            ease: "smoothEase",
        });

        gsap.fromTo(
            ".pricingCardFree,.pricingCardPaid ",
            { filter: "blur(8px)", opacity: 0 },
            {
                filter: "blur(0px)",
                opacity: 1,
                stagger: { amount: 0.1, from: "left" },
                duration: 0.4,
                delay: 1.6,
            }
        );

    };

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
        <div className="main-first-section-pricing">
            <div className="first-section-pricing">
                <div className="topLeftPricing">
                    <div className="smallText">
                        <span>PRICING</span>
                    </div>
                    <h1>Free for everyone. Affordable pricing for those who need it.</h1>
                    <div className="bottomText">
                        <span>If you want access to <strong>premium components</strong> that are closed-source and professionally handcrafted, you can upgrade to Lunar+. As a Lunar+ user, you&lsquo;ll get access to our exclusive component marketplace, filled with high-quality resources made by experienced developers.</span>
                    </div>
                    <div className="btn__pricing__top">
                        <ButtonAnimated text={"Get Started →"} textColor={"white"} background={"black"} borderColor={"black"}></ButtonAnimated>
                        <ButtonAnimated text={"Permissions →"} textColor={"black"} background={"#FFFB00"} borderColor={"black"}></ButtonAnimated>
                    </div>
                </div>
                <div className="cards">
                    <div className="pricingCardPaid">
                        <div className="smallText2">
                            <span>Lunar<span className="plus">+</span></span>
                        </div>
                        <div className="divider"></div>
                        <div className="price">
                            <h1>$25<span className="per">/mo</span><div className="smallText3"><span>*Excl. taxes</span></div></h1>
                        </div>
                        <div className="divider"></div>
                        <div className="headingPricingCard">
                            <h3>What you&apos;ll get?</h3>
                        </div>
                        <div className="details">
                            <ul>
                                <ul>
                                    <li>Expertly crafted premium components</li>
                                    <li>Step-by-step tutorials for every component</li>
                                    <li>Exclusive AI-powered features</li>
                                    <li>Closed-source, proprietary access</li>
                                </ul>
                            </ul>
                        </div>
                        <div className="btn-pricing">
                            <ButtonAnimated text={"Buy Now"} textColor={"black"} background={"#FFFB00"} borderColor={"black"}></ButtonAnimated>
                        </div>
                    </div>

                    <div className="pricingCardFree">
                        <div className="smallText2">
                            <span>Lunar</span>
                        </div>
                        <div className="divider"></div>
                        <div className="price">
                            <h1>Free Forever</h1>
                        </div>
                        <div className="divider"></div>
                        <div className="headingPricingCard">
                            <h3>What you&apos;ll get?</h3>
                        </div>
                        <div className="details2">
                            <ul>
                                <li>Community-contributed components</li>
                                <li>Fully open-source platform</li>
                                <li>Guided tutorials for each component</li>
                            </ul>
                        </div>
                        <div className="btn-pricing">
                            <ButtonAnimated text={"Get Started"} textColor={"black"} background={"#FFFB00"} borderColor={"black"}></ButtonAnimated>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
