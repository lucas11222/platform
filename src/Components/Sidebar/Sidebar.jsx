import "./Sidebar.css";
import React, { useEffect, useState } from "react";
import logo from "../../assets/Logos/logoYellowTransparent.svg";
import { Link, useLocation } from "react-router-dom";
import closeIcon from "../../assets/x.svg";
import menuIcon from "../../assets/menu.svg";
import githubIcon from "../../assets/github.svg";
import searchIcon from "../../assets/search-1.svg";
import gsap from "gsap";

export const navItems = [
    {
        category: "Introduction",
        className: "category",
        links: [{ name: "Introduction", path: "/app/intro" }],
    },
    {
        category: "Text Animations",
        className: "category",
        links: [
            { name: "Link Text", path: "/app/link-text" },
        ],
    },
    {
        category: "Navigation",
        className: "nav-igation",
        links: [
            { name: "Bottom Bar", path: "/app/bottom-nav" },
        ],
    },
];

export default function Sidebar() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false)

    const updateScreenState = () => {
        if (window.innerWidth < 948) {
            gsap.set(".logoTop", { top: "-100%" }); // Hide logoTop on initial render if width < 948
            gsap.set(".main-sidebar", { left: "-100%", duration: 0.6, ease: "power4.inOut" })
            setIsMobile(true)
        }
        else {
            gsap.set(".logoTop", { top: "0" }); // unhide logoTop on initial render if width < 948
            gsap.set(".main-sidebar", { left: 0, duration: 0.6, ease: "power4.inOut" })
            setIsMobile(false)
        }
    }

    useEffect(() => {

        updateScreenState()

        window.addEventListener("resize", () => {
            updateScreenState()
        })
    }, []);

    const openMenu = () => {
        gsap.to(".main-sidebar", { left: 0, duration: 0.6, ease: "power4.inOut" });
        if (window.innerWidth < 948) {
            gsap.to(".logoTop", { top: 0, duration: 0.6, ease: "power4.inOut" });
            gsap.to(".main-docs", { opacity: 0.2, duration: 0.6, ease: "power4.inOut" });
        }


    };

    const closeMenu = () => {
        gsap.to(".main-sidebar", { left: "-100%", duration: 0.6, ease: "power4.in" });
        if (window.innerWidth < 948) {
            gsap.to(".logoTop", { top: "-100%", duration: 0.6, ease: "power4.in" });
            gsap.to(".main-docs", { opacity: 1, duration: 0.6, ease: "power4.inOut" });
        }
    };

    return (
        <>
            {/* Navigation For Mobile */}
            <div className="nav-mobile">
                <div className="logo-mobile">
                    <img src={logo} alt="Logo" />
                </div>
                <div onClick={openMenu} className="menuIcon">
                    <img src={menuIcon} alt="Menu" />
                </div>
            </div>
            {/* Sidebar Parent Div */}
            <div className="main-sidebar">
                <div className="logoTop">
                    <img src={logo} alt="Logo" />
                    {/* Navbar Desktop */}
                    <div className="nav-items">
                        <div className="search">
                            <button>Search</button>
                            <img src={searchIcon} alt="Search Icon" />
                            <kbd>CTRL + K</kbd>
                        </div>
                        <div className="star-github">
                            <button id="buttonStar">
                                <img src={githubIcon} alt="GitHub" />Star on GitHub
                            </button>
                        </div>
                    </div>
                    {/* Menu Close Button */}
                    <div onClick={closeMenu} className="close">
                        <img src={closeIcon} alt="Close" />
                    </div>
                </div>

                {/* Main Navigation Items (Sidebar) */}

                <div className="main">
                    <div className="sections">
                        {navItems.map((section, index) => (
                            <div className={`category ${section.className || "category"}`} key={index}>
                                <h1>{section.category}</h1>
                                <div className="items">
                                    {section.links.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className={`item ${location.pathname === item.path ? "active" : ""}`}
                                            to={item.path}
                                            onClick={isMobile ? closeMenu : null} // Close menu on item click
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
