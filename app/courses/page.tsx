"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const courses = [
  {
    id: "1",

    title: "   بناء السيره الذاتية الاحترافية",
    instructor: "أحمد محمد",

    rating: 4.8,

    students: 1250,

    price: 89,

    originalPrice: 149,

    image: "Image_fx (3).jpg",

    level: "متوسط",
  },

  {
    id: "2",

    title: " اساسيات استخدام لينكد ان",

    instructor: "فاطمة أحمد",

    rating: 4.9,

    students: 890,

    price: 79,

    originalPrice: 129,

    image: "Image_fx (4).jpg",

    level: "مبتدئ",
  },

  {
    id: "3",

    title: "دورة بناء البورت فوليو الشخصي",

    instructor: "خالد العلي",

    rating: 4.7,

    students: 2100,

    price: 69,

    originalPrice: 99,

    image: "Image_fx (5).jpg",

    level: "مبتدئ",
  },

  {
    id: "4",

    title: "مهارات التحضير لمقابلات العمل",

    instructor: "سارة محمود",

    rating: 4.6,

    students: 3200,

    price: 49,

    originalPrice: 79,

    image: "Image_fx (6).jpg",

    level: "مبتدئ",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    price: "all",
    level: "all",
    rating: "all",
    language: "all",
  });

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            جميع الدورات
          </h1>
          <p className="text-gray-600">
            اكتشف آلاف الدورات التعليمية في مختلف المجالات
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="ابحث عن الدورات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 ml-2" />
              الفلاتر
            </Button>
          </div>

          {/* Filters */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block mt-6 pt-6 border-t border-gray-200`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  السعر
                </Label>
                <Select
                  value={filters.price}
                  onValueChange={(value) =>
                    setFilters({ ...filters, price: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر السعر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأسعار</SelectItem>
                    <SelectItem value="free">مجاني</SelectItem>
                    <SelectItem value="paid">مدفوع</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  المستوى
                </Label>
                <Select
                  value={filters.level}
                  onValueChange={(value) =>
                    setFilters({ ...filters, level: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستوى" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع المستويات</SelectItem>
                    <SelectItem value="beginner">مبتدئ</SelectItem>
                    <SelectItem value="intermediate">متوسط</SelectItem>
                    <SelectItem value="advanced">متقدم</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  التقييم
                </Label>
                <Select
                  value={filters.rating}
                  onValueChange={(value) =>
                    setFilters({ ...filters, rating: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التقييم" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع التقييمات</SelectItem>
                    <SelectItem value="4.5">4.5 وأعلى</SelectItem>
                    <SelectItem value="4.0">4.0 وأعلى</SelectItem>
                    <SelectItem value="3.5">3.5 وأعلى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  اللغة
                </Label>
                <Select
                  value={filters.language}
                  onValueChange={(value) =>
                    setFilters({ ...filters, language: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر اللغة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع اللغات</SelectItem>
                    <SelectItem value="arabic">العربية</SelectItem>
                    <SelectItem value="english">الإنجليزية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            عرض {filteredCourses.length} من أصل {courses.length} دورة
          </p>
          <Select defaultValue="popular">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">الأكثر شعبية</SelectItem>
              <SelectItem value="newest">الأحدث</SelectItem>
              <SelectItem value="rating">الأعلى تقييماً</SelectItem>
              <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
              <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-2 bg-transparent">
            تحميل المزيد
          </Button>
        </div>
      </div>
    </div>
  );
}
