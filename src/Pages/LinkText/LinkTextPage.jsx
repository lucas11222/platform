import "./LinkTextPage.css";
import React, { useState } from "react";
import MDConverter from "../../Components/MDConverter/MDConverter";
import { useEffect } from "react";
import ComponentPreview from "../../Components/ComponentPreview/ComponentPreview";
import LinkText from "../../Components/LinkText";

export default function StartingPage() {
    const [markdownContent, setMarkdownContent] = useState(``);

    useEffect(() => {
        fetch('/LinkText.md')
            .then(response => response.text())
            .then(text => {
                setMarkdownContent(text);
            })
            .catch(error => console.error("Error loading markdown file:", error));
    }, []);


    return (
        <div className="main-linkText-page">
            <div className="linkText-page">
                <ComponentPreview component={LinkText} title={"Link Text"} stack={"gsap"}></ComponentPreview>
                <hr />
                <MDConverter markdown={markdownContent}></MDConverter>

            </div>
        </div>
    );
}