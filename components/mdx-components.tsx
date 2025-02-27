import React from "react";

const CustomH1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-4xl font-bold my-4" {...props} />;
const CustomH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-semibold my-3" {...props} />;
const CustomPre = (props: React.HTMLAttributes<HTMLElement>) => <pre className="bg-zinc-900 text-sm p-4 my-0.5 rounded-md overflow-x-scroll hide-scrollbar" {...props} />;
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-blue-500 underline" {...props} />;
const CustomP = (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="my-3" {...props} />;
const CustomUl = (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-inside my-3" {...props} />;
const CustomOl = (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal list-inside my-3" {...props} />;
const CustomLi = (props: React.HTMLAttributes<HTMLLIElement>) => <li className="my-1" {...props} />;
const CustomTable = (props: React.HTMLAttributes<HTMLTableElement>) => <table className="table-auto w-full my-3" {...props} />;
const CustomTh = (props: React.HTMLAttributes<HTMLTableHeaderCellElement>) => <th className="border p-2" {...props} />;
const CustomTd = (props: React.HTMLAttributes<HTMLTableDataCellElement>) => <td className="border p-2" {...props} />;
const CustomBlockquote = (props: React.HTMLAttributes<HTMLElement>) => <blockquote className="border-l-4 border-gray-500 p-2 my-3" {...props} />;

const CustomMDXComponents = {
    h1: CustomH1,
    h2: CustomH2,
    a: CustomLink,
    pre: CustomPre,
    p: CustomP,
    ul: CustomUl,
    ol: CustomOl,
    li: CustomLi,
    table: CustomTable,
    th: CustomTh,
    td: CustomTd,
    blockquote: CustomBlockquote,
}

export default CustomMDXComponents;