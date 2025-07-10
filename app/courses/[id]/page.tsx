"use client"

import { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  Users,
  Star,
  Globe,
  Award,
  Download,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  CheckCircle,
  Bookmark,
  Shield,
  Infinity,
} from "lucide-react"
import Image from "next/image"

// Mock course data
const courseData = {
  "1": {
    id: "1",
    title: "تطوير المواقع الإلكترونية باستخدام React و Next.js",
    subtitle: "تعلم بناء تطبيقات ويب حديثة وسريعة باستخدام أحدث التقنيات",
    instructor: {
      name: "أحمد محمد",
      title: "مطور ويب خبير",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
      students: 15000,
      courses: 12,
      bio: "مطور ويب خبير مع أكثر من 8 سنوات من الخبرة في تطوير التطبيقات الحديثة. عمل مع شركات تقنية رائدة وساعد آلاف الطلاب في تعلم البرمجة.",
    },
    rating: 4.8,
    reviewsCount: 1250,
    studentsCount: 8500,
    price: 89,
    originalPrice: 149,
    discount: 40,
    language: "العربية",
    level: "متوسط",
    duration: "12 ساعة",
    lectures: 45,
    lastUpdated: "ديسمبر 2024",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: `
      في هذه الدورة الشاملة، ستتعلم كيفية بناء تطبيقات ويب حديثة وسريعة باستخدام React و Next.js. 
      ستبدأ من الأساسيات وتتقدم تدريجياً لتصبح قادراً على بناء تطبيقات معقدة ومتقدمة.
      
      ستتعلم أفضل الممارسات في التطوير، وكيفية التعامل مع البيانات، وإنشاء واجهات مستخدم تفاعلية وجذابة.
    `,
    whatYouWillLearn: [
      "أساسيات React وكيفية عمل المكونات",
      "إدارة الحالة باستخدام useState و useEffect",
      "التوجيه والملاحة في Next.js",
      "التعامل مع APIs وجلب البيانات",
      "تصميم واجهات مستخدم متجاوبة",
      "نشر التطبيقات على الإنترنت",
      "أفضل الممارسات في الأمان والأداء",
      "استخدام TypeScript مع React",
    ],
    requirements: [
      "معرفة أساسية بـ HTML و CSS",
      "فهم أساسيات JavaScript",
      "جهاز كمبيوتر مع إمكانية تثبيت البرامج",
      "اتصال بالإنترنت لتحميل الأدوات المطلوبة",
    ],
    curriculum: [
      {
        title: "مقدمة عن React",
        lectures: 8,
        duration: "2 ساعة",
        lessons: [
          { title: "ما هو React؟", duration: "15 دقيقة", type: "video", free: true },
          { title: "إعداد بيئة التطوير", duration: "20 دقيقة", type: "video", free: true },
          { title: "أول مكون React", duration: "18 دقيقة", type: "video", free: false },
          { title: "فهم JSX", duration: "22 دقيقة", type: "video", free: false },
          { title: "Props والمعاملات", duration: "25 دقيقة", type: "video", free: false },
          { title: "إدارة الحالة", duration: "30 دقيقة", type: "video", free: false },
          { title: "التعامل مع الأحداث", duration: "20 دقيقة", type: "video", free: false },
          { title: "تمرين عملي", duration: "30 دقيقة", type: "assignment", free: false },
        ],
      },
      {
        title: "Next.js الأساسيات",
        lectures: 12,
        duration: "3 ساعات",
        lessons: [
          { title: "مقدمة عن Next.js", duration: "18 دقيقة", type: "video", free: false },
          { title: "إنشاء مشروع جديد", duration: "15 دقيقة", type: "video", free: false },
          { title: "نظام التوجيه", duration: "25 دقيقة", type: "video", free: false },
          { title: "الصفحات والمكونات", duration: "22 دقيقة", type: "video", free: false },
        ],
      },
      {
        title: "إدارة البيانات والـ APIs",
        lectures: 10,
        duration: "2.5 ساعة",
        lessons: [
          { title: "جلب البيانات من APIs", duration: "20 دقيقة", type: "video", free: false },
          { title: "استخدام useEffect", duration: "25 دقيقة", type: "video", free: false },
          { title: "إدارة الحالة المتقدمة", duration: "30 دقيقة", type: "video", free: false },
        ],
      },
      {
        title: "المشروع النهائي",
        lectures: 15,
        duration: "4.5 ساعة",
        lessons: [
          { title: "تخطيط المشروع", duration: "20 دقيقة", type: "video", free: false },
          { title: "بناء الواجهة الأساسية", duration: "45 دقيقة", type: "video", free: false },
          { title: "إضافة الوظائف", duration: "60 دقيقة", type: "video", free: false },
        ],
      },
    ],
  },
}

const reviews = [
  {
    id: 1,
    name: "محمد العلي",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "منذ أسبوعين",
    comment: "دورة ممتازة جداً! الشرح واضح والأمثلة عملية. تعلمت الكثير وأصبحت قادراً على بناء مواقع احترافية.",
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "منذ شهر",
    comment: "المدرب محترف جداً والمحتوى منظم بشكل ممتاز. أنصح بها بشدة لكل من يريد تعلم React.",
  },
  {
    id: 3,
    name: "خالد محمود",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    date: "منذ شهرين",
    comment: "دورة جيدة جداً، لكن كنت أتمنى المزيد من التمارين العملية. بشكل عام راضي عن المحتوى.",
  },
]

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({})
  const [isWishlisted, setIsWishlisted] = useState(false)

  const course = courseData[id as keyof typeof courseData]

  if (!course) {
    return <div>Course not found</div>
  }

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <div className="gradient-hero text-white particles relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/10 rounded-full morph-1 floating" />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2 fade-in">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                    {course.level}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                    الأكثر مبيعاً
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{course.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center glass-dark rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="mr-2 font-semibold">{course.rating}</span>
                  <span className="text-gray-300 mr-2">({course.reviewsCount.toLocaleString()} تقييم)</span>
                </div>
                <div className="flex items-center glass-dark rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-gray-300 ml-2" />
                  <span>{course.studentsCount.toLocaleString()} طالب</span>
                </div>
                <div className="flex items-center glass-dark rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-gray-300 ml-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center glass-dark rounded-full px-4 py-2">
                  <Globe className="w-5 h-5 text-gray-300 ml-2" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-dark rounded-2xl p-4">
                <Avatar className="w-16 h-16 ring-4 ring-green-500/30">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl">
                    {course.instructor.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">بواسطة {course.instructor.name}</p>
                  <p className="text-gray-300">{course.instructor.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{course.instructor.rating}</span>
                    <span className="text-gray-400 text-sm">• {course.instructor.students.toLocaleString()} طالب</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1 slide-in-right">
              <Card className="sticky top-24 shadow-intense hover-scale bg-white/95 backdrop-blur-md border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative group">
                    <video
                      className="w-full h-56 object-cover"
                      poster={course.image || "/placeholder.svg"}
                      controls
                      preload="metadata"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      <source src="/placeholder-video.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                      <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full shadow-md">
                        {course.discount}% خصم
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <Button className="w-full gradient-primary text-white text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
                        أضف إلى العربة
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-300 hover:border-green-500 rounded-2xl py-4 font-semibold transition-all duration-300 hover:shadow-md bg-transparent"
                      >
                        اشتري الآن
                      </Button>
                    </div>

                    <div className="flex justify-center gap-6 mb-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className={`${isWishlisted ? "text-red-500" : "text-gray-500"} hover:scale-110 transition-all duration-300`}
                      >
                        <Heart className={`w-5 h-5 ml-2 ${isWishlisted ? "fill-current" : ""}`} />
                        قائمة الأمنيات
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:scale-110 transition-all duration-300"
                      >
                        <Share2 className="w-5 h-5 ml-2" />
                        مشاركة
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:scale-110 transition-all duration-300"
                      >
                        <Bookmark className="w-5 h-5 ml-2" />
                        حفظ
                      </Button>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">ضمان استرداد الأموال لمدة 30 يوماً</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                        <Infinity className="w-4 h-4" />
                        <span className="text-sm">وصول مدى الحياة</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100 rounded-2xl p-1 shadow-inner">
                <TabsTrigger value="overview" className="rounded-xl font-semibold transition-all duration-300">
                  نظرة عامة
                </TabsTrigger>
                <TabsTrigger value="curriculum" className="rounded-xl font-semibold transition-all duration-300">
                  المنهج
                </TabsTrigger>
                <TabsTrigger value="instructor" className="rounded-xl font-semibold transition-all duration-300">
                  المدرب
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-xl font-semibold transition-all duration-300">
                  التقييمات
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8 fade-in">
                <Card className="shadow-elegant hover-scale border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                    <CardTitle className="text-2xl text-gradient">وصف الدورة</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{course.description}</p>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-6 text-gradient">ما ستتعلمه</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 hover:shadow-md transition-all duration-300 group"
                          >
                            <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-800 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-6 text-gradient">المتطلبات</h3>
                      <div className="space-y-3">
                        {course.requirements.map((req, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md transition-all duration-300"
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-8 fade-in">
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="text-2xl text-gradient">محتوى الدورة</CardTitle>
                    <p className="text-gray-600 text-lg">
                      {course.curriculum.length} أقسام • {course.lectures} محاضرة • {course.duration} من المحتوى
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {course.curriculum.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="border-2 border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {/* Section Header */}
                          <button
                            onClick={() => toggleSection(sectionIndex)}
                            className="w-full p-6 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                  {section.title}
                                </h4>
                                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full">
                                  القسم {sectionIndex + 1}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-right font-medium">
                                {section.lectures} محاضرة • {section.duration} •{" "}
                                <span className="text-green-600">
                                  {section.lessons.filter((lesson) => lesson.free).length} محاضرة مجانية
                                </span>
                              </p>
                            </div>
                            <div className="mr-6">
                              {expandedSections[sectionIndex] ? (
                                <ChevronUp className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors duration-300" />
                              )}
                            </div>
                          </button>

                          {/* Lessons List */}
                          {expandedSections[sectionIndex] && (
                            <div className="border-t-2 border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
                              <div className="divide-y divide-gray-200">
                                {section.lessons.map((lesson, lessonIndex) => (
                                  <div
                                    key={lessonIndex}
                                    className="p-6 flex items-center justify-between hover:bg-white transition-all duration-300 group cursor-pointer"
                                  >
                                    <div className="flex items-center gap-4 flex-1">
                                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-green-100 to-blue-100 group-hover:from-green-200 group-hover:to-blue-200 transition-all duration-300 shadow-md">
                                        {lesson.type === "video" ? (
                                          <PlayCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                                        ) : (
                                          <FileText className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                        )}
                                      </div>

                                      <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                          <span className="text-gray-900 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300">
                                            {lessonIndex + 1}. {lesson.title}
                                          </span>
                                          {lesson.free && (
                                            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full shadow-md">
                                              معاينة مجانية
                                            </Badge>
                                          )}
                                        </div>
                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                          <span className="flex items-center gap-2 font-medium">
                                            <Clock className="w-4 h-4" />
                                            {lesson.duration}
                                          </span>
                                          <span className="capitalize font-medium">
                                            {lesson.type === "video" ? "فيديو" : "مهمة"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                      {lesson.free ? (
                                        <Button
                                          size="sm"
                                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                        >
                                          معاينة
                                        </Button>
                                      ) : (
                                        <div className="w-6 h-6 rounded-full border-3 border-gray-300 group-hover:border-green-500 transition-colors duration-300" />
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Section Summary */}
                              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-t-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-gray-700">إجمالي هذا القسم:</span>
                                  <div className="flex items-center gap-6 font-semibold text-gray-700">
                                    <span>{section.lessons.length} محاضرة</span>
                                    <span>{section.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Course Summary */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl border-2 border-green-200 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-xl text-green-800 mb-2">إجمالي محتوى الدورة</h4>
                          <p className="text-green-700 font-semibold text-lg">
                            {course.curriculum.length} أقسام • {course.lectures} محاضرة • {course.duration}
                          </p>
                        </div>
                        <div className="text-green-600">
                          <Award className="w-12 h-12 floating" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-8 fade-in">
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 rounded-t-2xl">
                    <CardTitle className="text-2xl text-gradient">عن المدرب</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-8 mb-8">
                      <Avatar className="w-32 h-32 ring-4 ring-green-500/30 shadow-lg">
                        <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-green-600 text-white text-4xl">
                          {course.instructor.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 text-gradient">{course.instructor.name}</h3>
                        <p className="text-gray-600 mb-6 text-lg font-medium">{course.instructor.title}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md">
                            <Star className="w-6 h-6 text-yellow-500" />
                            <div>
                              <div className="font-bold text-lg">{course.instructor.rating}</div>
                              <div className="text-sm text-gray-600">تقييم المدرب</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md">
                            <Users className="w-6 h-6 text-blue-500" />
                            <div>
                              <div className="font-bold text-lg">{course.instructor.students.toLocaleString()}</div>
                              <div className="text-sm text-gray-600">طالب</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 shadow-md">
                            <Award className="w-6 h-6 text-purple-500" />
                            <div>
                              <div className="font-bold text-lg">{course.instructor.courses}</div>
                              <div className="text-sm text-gray-600">دورة</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-inner">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">{course.instructor.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8 fade-in">
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-2xl">
                    <CardTitle className="text-2xl text-gradient">تقييمات الطلاب</CardTitle>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-3">
                        <Star className="w-8 h-8 text-yellow-400 fill-current" />
                        <span className="text-3xl font-bold">{course.rating}</span>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold text-lg">
                          {course.reviewsCount.toLocaleString()} تقييم
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <Progress value={85} className="w-32 h-3 progress-animated" />
                          <span className="text-sm text-gray-500 font-medium">85% إيجابي</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b-2 border-gray-100 pb-8 last:border-b-0">
                          <div className="flex items-start gap-6">
                            <Avatar className="w-16 h-16 ring-2 ring-gray-200 shadow-md">
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                                {review.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-3">
                                <h4 className="font-bold text-lg">{review.name}</h4>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-5 h-5 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-gray-500 font-medium">{review.date}</span>
                              </div>
                              <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-inner">
                                <p className="text-gray-700 leading-relaxed font-medium">{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 slide-in-right">
              {/* Course Features */}
              <Card className="shadow-elegant hover-scale border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                  <CardTitle className="text-xl text-gradient">ما تحصل عليه</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { icon: Clock, text: `${course.duration} من المحتوى`, color: "text-blue-500" },
                      { icon: PlayCircle, text: `${course.lectures} محاضرة فيديو`, color: "text-green-500" },
                      { icon: Download, text: "موارد قابلة للتحميل", color: "text-purple-500" },
                      { icon: Award, text: "شهادة إتمام", color: "text-yellow-500" },
                      { icon: Infinity, text: "وصول مدى الحياة", color: "text-indigo-500" },
                      { icon: Shield, text: "ضمان الجودة", color: "text-red-500" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-all duration-300 group"
                      >
                        <item.icon
                          className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Courses */}
              <Card className="shadow-elegant hover-scale border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl">
                  <CardTitle className="text-xl text-gradient">دورات ذات صلة</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      >
                        <Image
                          src="/placeholder.svg?height=60&width=80"
                          alt="Course"
                          width={80}
                          height={60}
                          className="rounded-lg object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1 group-hover:text-green-600 transition-colors duration-300">
                            دورة تصميم المواقع
                          </h4>
                          <p className="text-gray-600 text-xs mb-2">أحمد محمد</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium">4.5</span>
                            <span className="text-xs text-gray-500 font-medium">($49)</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
