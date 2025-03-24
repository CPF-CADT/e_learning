import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = () => {
    const markdown = `
    # Hello, Markdown!
    This is **bold text**, _italic text_, and [a link](https://reactjs.org).
    - Item 1
    - Item 2
    - Item 3
    `;

    return (
        <div className="markdown-container">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
