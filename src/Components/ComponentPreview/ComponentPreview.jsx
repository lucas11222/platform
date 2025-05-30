import React, { useState } from "react";
import "./ComponentPreview.css";

export default function ComponentPreview({ component: Component, title, stack, componentProps = {} }) {
    const [key, setKey] = useState(0);

    const rerunAnimation = () => {
        setKey(prevKey => prevKey + 1);
    };

    const stackItems = stack
        ? stack.split(",").map(item => item.trim())
        : [];

    return (
        <>
            <div className="title">
                <h1>{title}</h1>
                <div className="tech-stack">
                    <p>Dependencies:</p>
                    {stackItems.map((tech, index) => (
                        <div className="stack" key={index}>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="main-comp-prev">
                <button onClick={rerunAnimation} className="rerun-btn">
                    Re-run Animation
                </button>
                <div className="comp-container" key={key}>
                    <Component {...componentProps} />
                </div>
            </div>
        </>
    );
}
