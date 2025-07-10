"use client"

import { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Heart,
  ShoppingCart,
  Share2,
  Star,
  Clock,
  Users,
  BookOpen,
  Search,
  Grid3X3,
  List,
  Trash2,
  Eye,
  Gift,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const wishlistItems = [
  {
    id: "1",
    title: "تطوير المواقع الإلكترونية باستخدام React و Next.js",
    instructor: "أحمد محمد",
    price: 89,
    originalPrice: 149,
    discount: 40,
    image: "/placeholder.svg?height=200&width=300",
    duration: "12 ساعة",
    lectures: 45,
    level: "متوسط",
    rating: 4.8,
    students: 1250,
    category: "البرمجة والتطوير",
    lastUpdated: "ديسمبر 2024",
    addedToWishlist: "منذ 3 أيام",
    isOnSale: true,
    language: "العربية",
    hasSubtitles: true,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
  {
    id: "2",
    title: "تصميم واجهات المستخدم UX/UI من الصفر",
    instructor: "فاطمة أحمد",
    price: 79,
    originalPrice: 129,
    discount: 39,
    image: "/placeholder.svg?height=200&width=300",
    duration: "8 ساعات",
    lectures: 32,
    level: "مبتدئ",
    rating: 4.9,
    students: 890,
    category: "التصميم",
    lastUpdated: "نوفمبر 2024",
    addedToWishlist: "منذ أسبوع",
    isOnSale: true,
    language: "العربية",
    hasSubtitles: true,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
  {
    id: "3",
    title: "التسويق الرقمي ووسائل التواصل الاجتماعي",
    instructor: "خالد العلي",
    price: 69,
    originalPrice: 99,
    discount: 30,
    image: "/placeholder.svg?height=200&width=300",
    duration: "10 ساعات",
    lectures: 38,
    level: "مبتدئ",
    rating: 4.7,
    students: 2100,
    category: "التسويق",
    lastUpdated: "ديسمبر 2024",
    addedToWishlist: "منذ يومين",
    isOnSale: false,
    language: "العربية",
    hasSubtitles: false,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
  {
    id: "4",
    title: "أساسيات الذكاء الاصطناعي وتعلم الآلة",
    instructor: "محمد الأحمد",
    price: 99,
    originalPrice: 159,
    discount: 38,
    image: "/placeholder.svg?height=200&width=300",
    duration: "15 ساعة",
    lectures: 52,
    level: "متقدم",
    rating: 4.5,
    students: 750,
    category: "البرمجة والتطوير",
    lastUpdated: "أكتوبر 2024",
    addedToWishlist: "منذ شهر",
    isOnSale: true,
    language: "العربية",
    hasSubtitles: true,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
  {
    id: "5",
    title: "إدارة المشاريع الرقمية باستخدام Agile",
    instructor: "نور الدين",
    price: 59,
    originalPrice: 89,
    discount: 34,
    image: "/placeholder.svg?height=200&width=300",
    duration: "6 ساعات",
    lectures: 28,
    level: "متوسط",
    rating: 4.4,
    students: 650,
    category: "إدارة الأعمال",
    lastUpdated: "نوفمبر 2024",
    addedToWishlist: "منذ أسبوعين",
    isOnSale: false,
    language: "العربية",
    hasSubtitles: true,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
  {
    id: "6",
    title: "تعلم اللغة الإنجليزية للمبتدئين",
    instructor: "سارة محمود",
    price: 49,
    originalPrice: 79,
    discount: 38,
    image: "/placeholder.svg?height=200&width=300",
    duration: "20 ساعة",
    lectures: 60,
    level: "مبتدئ",
    rating: 4.6,
    students: 3200,
    category: "اللغات",
    lastUpdated: "ديسمبر 2024",
    addedToWishlist: "منذ 5 أيام",
    isOnSale: true,
    language: "العربية",
    hasSubtitles: false,
    certificateIncluded: true,
    lifetimeAccess: true,
  },
]

const categories = ["الكل", "البرمجة والتطوير", "التصميم", "التسويق", "إدارة الأعمال", "اللغات"]
const levels = ["الكل", "مبتدئ", "متوسط", "متقدم"]
const sortOptions = [
  { value: "newest", label: "الأحدث إضافة" },
  { value: "oldest", label: "الأقدم إضافة" },
  { value: "price-low", label: "السعر: من الأقل للأعلى" },
  { value: "price-high", label: "السعر: من الأعلى للأقل" },
  { value: "rating", label: "الأعلى تقييماً" },
  { value: "popular", label: "الأكثر شعبية" },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedLevel, setSelectedLevel] = useState("الكل")
  const [sortBy, setSortBy] = useState("newest")
  const [showOnlyOnSale, setShowOnlyOnSale] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const removeFromWishlist = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
  }

  const addToCart = (id: string) => {
    // Add to cart logic
    console.log("Added to cart:", id)
  }

  const addAllToCart = () => {
    const filteredItems = getFilteredAndSortedItems()
    filteredItems.forEach((item) => addToCart(item.id))
  }

  const removeSelectedItems = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  const selectAllItems = () => {
    const filteredItems = getFilteredAndSortedItems()
    setSelectedItems(filteredItems.map((item) => item.id))
  }

  const clearSelection = () => {
    setSelectedItems([])
  }

  const getFilteredAndSortedItems = () => {
    let filtered = items

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "الكل") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by level
    if (selectedLevel !== "الكل") {
      filtered = filtered.filter((item) => item.level === selectedLevel)
    }

    // Filter by sale status
    if (showOnlyOnSale) {
      filtered = filtered.filter((item) => item.isOnSale)
    }

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "popular":
          return b.students - a.students
        case "oldest":
          return new Date(a.addedToWishlist).getTime() - new Date(b.addedToWishlist).getTime()
        case "newest":
        default:
          return new Date(b.addedToWishlist).getTime() - new Date(a.addedToWishlist).getTime()
      }
    })

    return filtered
  }

  const filteredItems = getFilteredAndSortedItems()
  const totalSavings = filteredItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0)
  const onSaleCount = filteredItems.filter((item) => item.isOnSale).length

  const renderCourseCard = (course, index) => {
    const isSelected = selectedItems.includes(course.id)

    if (viewMode === "list") {
      return (
        <Card
          key={course.id}
          className={`shadow-elegant hover-scale border-0 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
            isSelected ? "ring-2 ring-green-500 bg-green-50/50" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleItemSelection(course.id)}
                  className="absolute top-2 left-2 w-4 h-4 text-green-600 bg-white border-2 border-gray-300 rounded focus:ring-green-500 z-10"
                />
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={200}
                  height={120}
                  className="rounded-xl object-cover shadow-md"
                />
                {course.isOnSale && (
                  <Badge className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 text-xs rounded-full">
                    {course.discount}% خصم
                  </Badge>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <Link href={`/courses/${course.id}`}>
                    <h3 className="font-bold text-xl text-gray-900 hover:text-green-600 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromWishlist(course.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-gray-600 mb-3 font-medium">بواسطة {course.instructor}</p>

                <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lectures} محاضرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                    <span>({course.students.toLocaleString()})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    <span className="text-sm text-green-600 font-medium">
                      وفر ${course.originalPrice - course.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => addToCart(course.id)}
                      className="gradient-primary text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-4 h-4 ml-2" />
                      أضف للعربة
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-500 rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-3 text-xs text-gray-500">أضيف للمفضلة {course.addedToWishlist}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card
        key={course.id}
        className={`shadow-elegant hover-scale border-0 bg-white/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          isSelected ? "ring-2 ring-green-500 bg-green-50/50" : ""
        }`}
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleItemSelection(course.id)}
            className="absolute top-3 left-3 w-4 h-4 text-green-600 bg-white border-2 border-gray-300 rounded focus:ring-green-500 z-10"
          />
          <Link href={`/courses/${course.id}`}>
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="absolute top-3 right-3 flex gap-2">
            {course.isOnSale && (
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 text-xs rounded-full">
                {course.discount}% خصم
              </Badge>
            )}
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 text-xs rounded-full">
              {course.level}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromWishlist(course.id)}
            className="absolute bottom-3 left-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl bg-white/80 backdrop-blur-sm"
          >
            <Heart className="w-4 h-4 fill-current" />
          </Button>
        </div>

        <CardContent className="p-4">
          <Link href={`/courses/${course.id}`}>
            <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-green-600 transition-colors line-clamp-2">
              {course.title}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-2">بواسطة {course.instructor}</p>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 mr-1">{course.rating}</span>
            </div>
            <div className="flex items-center mr-4">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 mr-1">{course.students.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">${course.price}</span>
              <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{course.duration}</span>
            </div>
          </div>

          <Button
            onClick={() => addToCart(course.id)}
            className="w-full gradient-primary text-white py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            أضف للعربة
          </Button>

          <div className="mt-2 text-xs text-gray-500 text-center">أضيف {course.addedToWishlist}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gradient">قائمة الأمنيات</h1>
              <p className="text-gray-600">دوراتك المفضلة في مكان واحد</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="rounded-xl"
            >
              {viewMode === "grid" ? <List className="w-4 h-4 ml-2" /> : <Grid3X3 className="w-4 h-4 ml-2" />}
              {viewMode === "grid" ? "عرض قائمة" : "عرض شبكة"}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredItems.length}</div>
              <div className="text-sm text-blue-700">دورة في المفضلة</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">${totalSavings}</div>
              <div className="text-sm text-green-700">إجمالي الوفورات</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-red-50 to-red-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{onSaleCount}</div>
              <div className="text-sm text-red-700">دورة بخصم</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-purple-50 to-purple-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{selectedItems.length}</div>
              <div className="text-sm text-purple-700">عنصر محدد</div>
            </CardContent>
          </Card>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قائمة الأمنيات فارغة</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              لم تقم بإضافة أي دورات لقائمة الأمنيات بعد. استكشف دوراتنا وأضف ما يعجبك
            </p>
            <Link href="/courses">
              <Button className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                تصفح الدورات
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Filters and Controls */}
            <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                  {/* Search */}
                  <div className="lg:col-span-3">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="البحث في المفضلة..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:col-span-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="الفئة" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Level Filter */}
                  <div className="lg:col-span-2">
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="المستوى" />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort */}
                  <div className="lg:col-span-2">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="ترتيب حسب" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sale Filter */}
                  <div className="lg:col-span-1">
                    <Button
                      variant={showOnlyOnSale ? "default" : "outline"}
                      onClick={() => setShowOnlyOnSale(!showOnlyOnSale)}
                      className="w-full rounded-xl"
                    >
                      <Gift className="w-4 h-4 ml-2" />
                      بخصم
                    </Button>
                  </div>

                  {/* Bulk Actions */}
                  <div className="lg:col-span-2">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={selectedItems.length === filteredItems.length ? clearSelection : selectAllItems}
                        className="flex-1 rounded-xl text-sm bg-transparent"
                      >
                        {selectedItems.length === filteredItems.length ? "إلغاء التحديد" : "تحديد الكل"}
                      </Button>
                      {selectedItems.length > 0 && (
                        <Button
                          variant="outline"
                          onClick={removeSelectedItems}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl bg-transparent"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bulk Actions Bar */}
                {selectedItems.length > 0 && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800 font-semibold">تم تحديد {selectedItems.length} عنصر</span>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            selectedItems.forEach((id) => addToCart(id))
                            clearSelection()
                          }}
                          className="gradient-primary text-white px-4 py-2 rounded-xl shadow-md"
                        >
                          <ShoppingCart className="w-4 h-4 ml-2" />
                          أضف للعربة ({selectedItems.length})
                        </Button>
                        <Button
                          onClick={removeSelectedItems}
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl bg-transparent"
                        >
                          <Trash2 className="w-4 h-4 ml-2" />
                          حذف المحدد
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  عرض {filteredItems.length} من أصل {items.length} دورة
                </p>
                {onSaleCount > 0 && (
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full">
                    {onSaleCount} دورة بخصم
                  </Badge>
                )}
              </div>
              <Button
                onClick={addAllToCart}
                className="gradient-primary text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4 ml-2" />
                أضف الكل للعربة
              </Button>
            </div>

            {/* Course Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {filteredItems.map((course, index) => renderCourseCard(course, index))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={addAllToCart}
                  className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  أضف جميع الدورات للعربة
                </Button>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                  >
                    <Eye className="w-5 h-5 ml-2" />
                    استكشف المزيد من الدورات
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
