import React from "react";
import CustomPre from "./customPre";

const CustomH1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-2xl font-semibold my-4" {...props} />;
const CustomH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-semibold my-3" {...props} />;
const CustomH3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-lg font-semibold my-2" {...props} />;
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-blue-500 underline" {...props} />;
const CustomP = (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="my-3" {...props} />;
const CustomUl = (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-inside my-3" {...props} />;
const CustomOl = (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal list-inside my-2" {...props} />;
const CustomLi = (props: React.HTMLAttributes<HTMLLIElement>) => <li className="my-1 mx-3" {...props} />;
const CustomBlockquote = (props: React.HTMLAttributes<HTMLElement>) => <blockquote className="border-l-4 border-zinc-800/90 p-2 my-3 italic" {...props} />;
const CustomCode = (props: React.HTMLAttributes<HTMLElement>) => <code className="bg-[#1C1F21] text-[#C4C8C6] px-2 py-1 rounded-md text-sm" {...props} />;
const CustomImg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img className="w-full rounded-sm mb-2" {...props} />;

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
    code: CustomCode,
    img: CustomImg,
};

export default CustomMDXComponents;