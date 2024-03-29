import { ISvg } from '@/lib/types'
import React from 'react'
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

export default function ArrowLeftSVG({ className = '' }: ISvg) {

  const { dispatch } = useContext(StepContext)

  const handleClick = () => {
    dispatch({
      type: 'prev'
    })
  }

  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
      <path d="M6 12L0 6L6 0L7.4 1.45L3.85 5H16V7H3.85L7.4 10.55L6 12Z" fill="currentColor" />
    </svg>

  )
}
