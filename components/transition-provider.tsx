"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import RevealTransition from "./transitions/reveal"
import PageWrapper from "./transitions/page-wrapper"

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <PageWrapper>
      <RevealTransition key={pathname}>{children}</RevealTransition>
    </PageWrapper>
  )
}

