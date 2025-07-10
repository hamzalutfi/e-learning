import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Sadiq E-Learning - تعلّم أي مهارة من أي مكان",
  description: "منصة التعلم الإلكتروني الرائدة في العالم العربي",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
