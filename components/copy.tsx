"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "./icons";
import IconWrapper from "./transitions/icon-change";

export default function CopyToClipboard({ children }: any) {
    const [copied, setCopied] = useState(false);
    const codeString = children.props?.children || "";

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString.trim()).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }).catch(() => {
            toast.error(<div>Failed to copy to clipboard!</div>);
        });
    };

    const icon = copied ? (
        <Icons.check className="w-4 h-4" />
    ) : (
        <Icons.copy_2 className="w-4 h-4" />
    );

    return (
        <button
            onClick={handleCopy}
            className="absolute right-3 top-3 text-zinc-400"
        >
            <IconWrapper copied={copied}>
                {icon}
            </IconWrapper>
        </button>
    );
}