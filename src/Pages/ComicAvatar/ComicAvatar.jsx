import "./ComicAvatar.css";
import React, { useState } from "react";
import MDConverter from "../../Components/MDConverter/MDConverter.jsx";
import { useEffect } from "react";
import ComponentPreview from "../../Components/ComponentPreview/ComponentPreview.jsx";
import ComicAvatar from "../../Components/3DAvatar.jsx";
import { useCallback } from "react";

export default function StartingPage() {
    const [markdownContent, setMarkdownContent] = useState(``);
    const alt = "Avatar"
    const image = "https://picsum.photos/200"

    const loadMarkdown = useCallback((path) => {
        fetch(path)
            .then((res) => res.text())
            .then(setMarkdownContent)
            .catch((err) => console.error("Error loading markdown:", err));
    }, []);

    useEffect(() => {
        loadMarkdown("/ComicAvatar/React/ComicAvatar.md");
    }, [loadMarkdown]);

    const handleLanguageChange = (version) => {
        if (version === "react") {
            loadMarkdown("/ComicAvatar/React/ComicAvatar.md");
        } else if (version === "html") {
            loadMarkdown("/ComicAvatar/Vanilla/ComicAvatarVanilla.md");
        }
    };


    return (
        <div className="main-comicAvatar-page">
            <div className="comicAvatar-page">
                <ComponentPreview
                    onLanguageChange={handleLanguageChange} componentProps={{ alt, image }} component={ComicAvatar} title={"Comic Avatar"} stack={"gsap"}></ComponentPreview>
                <hr />
                <MDConverter markdown={markdownContent}></MDConverter>

            </div>
        </div>
    );
}