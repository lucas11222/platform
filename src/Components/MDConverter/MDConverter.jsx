import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./MDConverter.css"
import { Link } from "react-router-dom";

export default function MDConverter({ markdown }) {
    const components = {
        code({ node, inline, className, children, ...props }) {
            const codeContent = String(children).trim();
            const match = /language-(\w+)/.exec(className || "");

            // add footer by using "```footer```"
            if (!inline && match && match[1] === "footer") {
                return (
                    <div className="footer-docs" style={{ height: "100px" }} >
                        <p>Proudly created with 💖 by <a href="https://codedbymohit.xyz">Mohit Tiwari</a></p>
                        <div className="links-docs">
                            <Link to="/app/terms">Terms & Conditions</Link>
                            <Link to="/redirect/github">Github</Link>
                        </div>
                    </div>
                );
            }
            if (!inline && match && match[1] === "space") {
                return (
                    <div style={{ height: "50px" }} >

                    </div>
                );
            }
            if (!inline && match && match[1] === "footerFull") {
                return (
                    <div className="footer-docs full" style={{ height: "100px" }} >
                        <p>Proudly created with 💖 by <a href="https://codedbymohit.xyz">Mohit Tiwari</a></p>
                        <div className="links-docs">
                            <Link to="/terms">Terms & Conditions</Link>
                            <Link to="/github">Github</Link>
                        </div>
                    </div>
                );
            }

            const isInline = !className && !codeContent.includes("\n");

            if (isInline) {
                return (
                    <code className="inline-code" {...props}>
                        {codeContent}
                    </code>
                );
            }

            const language = match ? match[1] : "javascript";

            return (
                <div className="code-block">

                    <SyntaxHighlighter
                        customStyle={{ borderRadius: "10px", border: '2px solid var(--borderColorBlack)' }}
                        language={language}
                        style={tomorrow}
                        showLineNumbers
                        wrapLongLines
                    >
                        {codeContent}
                    </SyntaxHighlighter>
                </div >
            );
        },
    };

    return (
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
            {markdown}
        </ReactMarkdown>
    );
}
