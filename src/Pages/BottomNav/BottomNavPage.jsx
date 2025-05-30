import "./BottomNavPage.css";
import React, { useState } from "react";
import MDConverter from "../../Components/MDConverter/MDConverter";
import { useEffect } from "react";
import ComponentPreview from "../../Components/ComponentPreview/ComponentPreview";
import BottomNav from "../../Components/BottomNav";

export default function StartingPage() {
    const [markdownContent, setMarkdownContent] = useState(``);
    const items = ["Home", "About", "Contact", "Work"]

    useEffect(() => {
        fetch('/BottomBar.md')
            .then(response => response.text())
            .then(text => {
                setMarkdownContent(text);
            })
            .catch(error => console.error("Error loading markdown file:", error));
    }, []);


    return (
        <div className="main-bottombar-page">
            <div className="bottombar-page">
                <ComponentPreview
                    component={BottomNav}
                    componentProps={{ items }}
                    title="Bottom Nav"
                    stack="gsap"
                />
                <hr />
                <MDConverter markdown={markdownContent}></MDConverter>

            </div>
        </div>
    );
}