import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CustomH1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-2xl font-semibold my-4" {...props} />;
const CustomH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-semibold my-3" {...props} />;
const CustomH3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-lg font-semibold my-2" {...props} />;
//const CustomPre = (props: React.HTMLAttributes<HTMLElement>) => <pre className="bg-zinc-900 text-sm p-4 my-0.5 rounded-md overflow-x-scroll hide-scrollbar" {...props} />;
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-blue-500 underline" {...props} />;
const CustomP = (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="my-3" {...props} />;
const CustomUl = (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-inside my-3" {...props} />;
const CustomOl = (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal list-inside my-2" {...props} />;
const CustomLi = (props: React.HTMLAttributes<HTMLLIElement>) => <li className="my-1 mx-3" {...props} />;
const CustomBlockquote = (props: React.HTMLAttributes<HTMLElement>) => <blockquote className="border-l-4 border-zinc-800/90 p-2 my-3" {...props} />;


const CustomPre = ({ className = "", children }: any) => {
    const match = /language-(\w+)/.exec(className || "");

    const codeString = children.props?.children || "";
    const language = match ? match[1] : children.props?.className?.replace("language-", "") || "plaintext";

    return (
        <SyntaxHighlighter
            style={atomDark}
            language={language}
            PreTag="div"
            className="text-sm p-4 my-0.5 rounded-md overflow-x-scroll hide-scrollbar"
        >
            {codeString.trim()}
        </SyntaxHighlighter>
    );
};


const CustomMDXComponents = {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    a: CustomLink,
    pre: CustomPre,
    p: CustomP,
    ul: CustomUl,
    ol: CustomOl,
    li: CustomLi,
    blockquote: CustomBlockquote,
};

export default CustomMDXComponents;