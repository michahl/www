import { motion, AnimatePresence } from "framer-motion";

export default function IconWrapper({ children, copied }: { children: React.ReactNode, copied: boolean }) {
    return (
        <AnimatePresence initial={false} mode="wait">
            <motion.div
                key={copied ? "check" : "copy"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}