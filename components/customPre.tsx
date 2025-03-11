'use client';

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./copy";

const CustomPre = ({ className = "", children }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const codeString = children.props?.children || "";
    const language = match ? match[1] : children.props?.className?.replace("language-", "") || "plaintext";

    return (
        <div className="relative group">
            <CopyToClipboard>{children}</CopyToClipboard>
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