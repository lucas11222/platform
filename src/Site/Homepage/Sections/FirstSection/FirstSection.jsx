import React, { useEffect, useRef } from "react";
import "./FirstSection.css";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ButtonAnimated from "../../../Components/ButtonAnimated/ButtonAnimated";

gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

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
            marginBottom: isLast
                ? "0em" // No bottom margin on last mask
                : `${lineHeightDifference}em`,
        });
    });
}

export default function FirstSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        const split1 = new SplitText(".text__main h1", {
            type: "words",
            mask: "words",
            wordsClass: "wordFirstMain",
        });
        const split2 = new SplitText(".text__bottom span", {
            type: "words",
            mask: "words",
            wordsClass: "wordSecondMain",
        });

        fixMask(split1);
        fixMask(split2);

        CustomEase.create("smoothEase", "0.87, 0, 0.13, 1");

        gsap.fromTo(
            ".wordFirstMain",
            { y: "100%" },
            {
                y: "0",
                ease: "smoothEase",
                stagger: 0.01,
                duration: 1.4,
            }
        );

        gsap.fromTo(
            ".wordSecondMain",
            { y: "100%" },
            {
                y: "0",
                ease: "smoothEase",
                stagger: { amount: 0.2, from: "left" },
                duration: 1.4,
                delay: 0.5,
            }
        );

        gsap.fromTo(
            ".comp__prev, .comp",
            { y: "100%", opacity: 0 },
            {
                y: "0",
                opacity: 1,
                ease: "smoothEase",
                stagger: { amount: 0.2, from: "left" },
                duration: 1.4,
                delay: 1.6,
            }
        );

        gsap.fromTo(
            ".btns__main button",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: { amount: 0.2, from: "left" },
                duration: 0.9,
                delay: 2,
            }
        );
    }, []);

    useEffect(() => {
        const isMobileOrTablet = window.innerWidth <= 1024;
        const container = containerRef.current;
        const comps = container?.querySelectorAll(".comp");

        comps?.forEach((comp) => {
            const video = comp.querySelector("video");

            if (!video) return;

            if (isMobileOrTablet) {
                video.pause();
                video.currentTime = 0;
                video.removeAttribute("autoplay");
                video.removeAttribute("muted");
                video.removeAttribute("playsinline");
                video.controls = false;
            } else {
                const play = () => video.play();
                const pause = () => {
                    video.currentTime = 0;
                    video.pause();
                };

                comp.addEventListener("mouseenter", play);
                comp.addEventListener("mouseleave", pause);

                return () => {
                    comp.removeEventListener("mouseenter", play);
                    comp.removeEventListener("mouseleave", pause);
                };
            }
        });
    }, []);

    return (
        <div className="main-first-section">
            <div className="firstSection">
                <div className="text__main">
                    <h1>Create websites that inspires, at blazing fast speed.</h1>

                    <div className="text__bottom">
                        <span>
                            Lunar gives you ready-to-use components paired with
                            step-by-step tutorials — all open-source, completely
                            free, and designed to help you build with confidence.
                        </span>
                    </div>

                    <div className="btns__main">
                        <ButtonAnimated
                            text="Explore Docs →"
                            background="#FFFB00"
                            borderColor="black"
                        />
                        <ButtonAnimated
                            text="About →"
                            background="black"
                            textColor="white"
                            borderColor="white"
                        />
                    </div>
                </div>

                <div className="comp__prev" ref={containerRef}>
                    <div className="wrapppp">
                        <div className="comp">
                            <div className="vid">
                                <video
                                    src="https://res.cloudinary.com/daqmqnfju/video/upload/f_auto/v1748592851/Screen_Recording_2025-05-30_133717_ucfri4.mp4"
                                    muted
                                    playsInline
                                />
                            </div>
                            <CompDetails text="Bottom Nav Bar" />
                        </div>

                        <div className="comp">
                            <div className="vid" >
                                <video
                                    src="https://res.cloudinary.com/daqmqnfju/video/upload/f_auto/v1748594458/Screen_Recording_2025-05-30_140651_px2s3j.mp4"
                                    muted
                                    playsInline
                                />
                            </div>
                            <CompDetails text="Link Text" />
                        </div>

                        <div className="comp">
                            <div className="vid">
                                <video
                                    src="https://res.cloudinary.com/daqmqnfju/video/upload/f_auto/v1748595216/Screen_Recording_2025-05-30_142018_alm58s.mp4"
                                    muted
                                    playsInline
                                />
                            </div>
                            <CompDetails text="On-Scroll Image Parallax" />
                        </div>

                        <div className="comp">
                            <div className="vid" >
                                <video
                                    src="https://res.cloudinary.com/daqmqnfju/video/upload/f_auto/v1748782902/staggeredTextVidDemo_deuudk.mp4"
                                    muted
                                    playsInline
                                />
                            </div>
                            <CompDetails text="Staggered Text " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CompDetails({ text }) {
    return (
        <div className="details-btn">
            <div className="dtl-txt">
                <span>{text}</span>
            </div>
            <div className="btn-go">
                <button>
                    <svg
                        height="12"
                        width="12"
                        viewBox="0 0 16 16"
                        style={{ color: "white" }}
                        strokeLinejoin="round"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
