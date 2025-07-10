import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const featuredCourses = [
  {
    id: "1",
    title: "تطوير المواقع الإلكترونية باستخدام React و Next.js",
    instructor: "أحمد محمد",
    rating: 4.8,
    students: 1250,
    price: 89,
    originalPrice: 149,
    image: "/logo.jpg",
    level: "متوسط",
  },
  {
    id: "2",
    title: "تصميم واجهات المستخدم UX/UI من الصفر",
    instructor: "فاطمة أحمد",
    rating: 4.9,
    students: 890,
    price: 79,
    originalPrice: 129,
    image: "/logo.jpg",
    level: "مبتدئ",
  },
  {
    id: "3",
    title: "التسويق الرقمي ووسائل التواصل الاجتماعي",
    instructor: "خالد العلي",
    rating: 4.7,
    students: 2100,
    price: 69,
    originalPrice: 99,
    image: "/logo.jpg",
    level: "مبتدئ",
  },
  {
    id: "4",
    title: "تعلم اللغة الإنجليزية للمبتدئين",
    instructor: "سارة محمود",
    rating: 4.6,
    students: 3200,
    price: 49,
    originalPrice: 79,
    image: "/logo.jpg",
    level: "مبتدئ",
  },
];

const categories = [
  { name: "البرمجة والتطوير", icon: BookOpen, count: 1200 },
  { name: "التصميم", icon: Award, count: 800 },
  { name: "التسويق", icon: TrendingUp, count: 650 },
  { name: "اللغات", icon: Users, count: 450 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              تعلّم أي مهارة من أي مكان
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              اكتشف آلاف الدورات التعليمية عالية الجودة من أفضل المدربين العرب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  استكشف الدورات
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Play className="w-5 h-5 ml-2" />
                شاهد كيف يعمل
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            تصفح حسب الفئة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/courses?category=${encodeURIComponent(category.name)}`}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-green-50 hover:border-green-200 border-2 border-transparent transition-all duration-300 hover-scale"
              >
                <category.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.count} دورة</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              الدورات المميزة
            </h2>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                عرض الكل
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-green-100">طالب مسجل</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3,000+</div>
              <div className="text-green-100">دورة تعليمية</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">مدرب خبير</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">معدل الرضا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">صادق للتعلم</h3>
              <p className="text-gray-400 text-sm">
                منصة التعلم الإلكتروني الرائدة في العالم العربي
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/courses" className="hover:text-white">
                    الدورات
                  </Link>
                </li>
                <li>
                  <Link href="/teach" className="hover:text-white">
                    علّم معنا
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">تابعنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white">
                  فيسبوك
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  تويتر
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  لينكد إن
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 صادق للتعلم. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
