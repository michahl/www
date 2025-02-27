'use client';

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icons } from "./icons";

const CustomPre = ({ className = "", children }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const codeString = children.props?.children || "";
    const language = match ? match[1] : children.props?.className?.replace("language-", "") || "plaintext";

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString.trim()).then(() => {
            alert("Code copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy code: ", err);
        });
    };

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 duration-300"
            >
                <Icons.copy className="w-5 h-5" />
            </button>
            <SyntaxHighlighter
                style={atomDark}
                language={language}
                PreTag="div"
                className="text-sm p-4 my-0.5 rounded-md overflow-x-scroll hide-scrollbar"
            >
                {codeString.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CustomPre;