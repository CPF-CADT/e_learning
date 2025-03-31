import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ markdownText }){
    return (
        <div>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>  
    );
}