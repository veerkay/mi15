"use client"

import React, { useEffect, useState } from "react"

export default function Preloader(): JSX.Element | null {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const hide = () => {
      // trigger fade animation then remove
      setFading(true)
      window.setTimeout(() => setVisible(false), 450)
    }

    if (document.readyState === "complete") {
      hide()
    } else {
      window.addEventListener("load", hide)
    }

    return () => {
      window.removeEventListener("load", hide)
    }
  }, [])

  if (!visible) return null

  return (
    <div id="preloader" className={`preloader ${fading ? "preloader--fade" : ""}`}>
      <div className="preloader_image" />
    </div>
  )
}
