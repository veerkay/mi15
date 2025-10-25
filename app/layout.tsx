import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Mi15  US Army",
  description:
    "Specialists in shipagency, international maritime transport and logistics, we carry breakbulk commodities, steel, project cargo, over-dimensioned, heavylift cargo, and bulk shipments.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />

        {/* Styles copied from original index.html so animations and icons work */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animations.css" />
        <link rel="stylesheet" href="/css/main.css" className="color-switcher-link" />
        <link rel="stylesheet" href="/css/shop.css" className="color-switcher-link" />

        {/* Font Awesome (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Small inline styles from original page (animations + icon sizing) */}
        <style>{`/* Animation for modal text */
          .fade-in {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Icon styling */
          .icon-styled {
            margin-bottom: 15px;
          }

          .icon-styled i {
            font-size: 40px;
          }

          /* Preloader overlay */
          .preloader {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            z-index: 99999;
            transition: opacity 0.45s ease, visibility 0.45s ease;
            opacity: 1;
            visibility: visible;
          }

          .preloader--fade {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

          .preloader_image {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #222;
            box-shadow: 0 0 0 4px rgba(0,0,0,0.05) inset;
            animation: preloader-rotate 1s linear infinite;
          }

          @keyframes preloader-rotate { to { transform: rotate(360deg); } }
        `}</style>

        {/* Load jQuery before other scripts that depend on it */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJ+Y3vQ2VnE6x9j7kQW0nPEY1Zrss+3yD5m3I=" crossOrigin="anonymous" strategy="beforeInteractive" />

        {/* Site scripts that depend on jQuery - run after the page is interactive. Order matters. */}
        <Script src="/js/compressed.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/switcher.js" strategy="afterInteractive" />
      </head>
      <body>{children}</body>
    </html>
  )
}
