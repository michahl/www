"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [showChildren, setShowChildren] = useState(children); // Store current page content
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        setIsExiting(true); // Start exit animation
    }, [pathname]);

    const handleAnimationComplete = () => {
        if (isExiting) {
            setShowChildren(children); // Update page content after exit animation
            setIsExiting(false); // Start enter animation
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onAnimationComplete={handleAnimationComplete}
            >
                {showChildren}
            </motion.div>
        </AnimatePresence>
    );
}