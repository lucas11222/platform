import "./Terms.css";
import React, { useState } from "react";
import MDConverter from "../../Components/MDConverter/MDConverter";
import { useEffect } from "react";

export default function Terms() {
    const [markdownContent, setMarkdownContent] = useState(``);
    const items = ["Home", "About", "Contact", "Work"]

    useEffect(() => {
        fetch('/Terms.md')
            .then(response => response.text())
            .then(text => {
                setMarkdownContent(text);
            })
            .catch(error => console.error("Error loading markdown file:", error));
    }, []);


    return (
        <div className="main-terms-page">
            <div className="terms-page">
                <MDConverter markdown={markdownContent}></MDConverter>
            </div>
        </div>
    );
}