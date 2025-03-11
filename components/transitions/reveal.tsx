"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function RevealTransition({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{
          type: "tween",
          ease: [0.43, 0.13, 0.23, 0.96],
          duration: 0.8,
        }}
        className="absolute inset-0 bg-background"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}