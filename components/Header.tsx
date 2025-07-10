"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Menu, X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-elegant border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Sadiq E-Learning"
                width={40}
                height={40}
                className="rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              صادق للتعلم
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full group">
              <Input
                type="text"
                placeholder="ابحث عن أي دورة..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 bg-gray-50/50 group-hover:bg-white group-hover:shadow-md"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 w-5 h-5 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link
              href="/courses"
              className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
            >
              الدورات
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/teach"
              className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
            >
              علّم دورة
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Notifications */}
            <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-300">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center pulse-green">
                3
              </span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-300 group"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                2
              </span>
            </Link>

            <Link href="/signin">
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 bg-transparent rounded-xl px-6 py-2 font-medium transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                تسجيل الدخول
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="gradient-primary text-white rounded-xl px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                إنشاء حساب
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 slide-in-right">
            <div className="flex flex-col space-y-4">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="ابحث عن أي دورة..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 bg-gray-50/50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Link
                href="/courses"
                className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                الدورات
              </Link>
              <Link
                href="/teach"
                className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                علّم دورة
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 ml-2" />
                العربة (2)
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link href="/signin">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-green-600 text-green-600 bg-transparent rounded-xl py-3"
                  >
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full gradient-primary text-white rounded-xl py-3 shadow-md">إنشاء حساب</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
