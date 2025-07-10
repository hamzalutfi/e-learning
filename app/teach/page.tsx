"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Users,
  DollarSign,
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  Upload,
  Video,
  Globe,
  Star,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  MessageCircle,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { icon: Users, value: "50,000+", label: "طلاب نشطين", color: "text-blue-500" },
  { icon: DollarSign, value: "$2M+", label: "أرباح المدربين", color: "text-green-500" },
  { icon: BookOpen, value: "3,000+", label: "دورة منشورة", color: "text-purple-500" },
  { icon: Award, value: "95%", label: "معدل الرضا", color: "text-yellow-500" },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "دخل إضافي مستمر",
    description: "احصل على دخل شهري ثابت من دوراتك المنشورة",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Globe,
    title: "وصول عالمي",
    description: "شارك معرفتك مع طلاب من جميع أنحاء العالم العربي",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "بناء مجتمع",
    description: "كوّن مجتمعاً من المتعلمين المهتمين بمجالك",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Award,
    title: "تطوير المهارات",
    description: "طور مهاراتك في التدريس والتواصل",
    color: "from-orange-500 to-orange-600",
  },
]

const steps = [
  {
    number: "01",
    title: "خطط لدورتك",
    description: "حدد موضوع دورتك والجمهور المستهدف",
    icon: Target,
  },
  {
    number: "02",
    title: "أنشئ المحتوى",
    description: "سجل الفيديوهات وأعد المواد التعليمية",
    icon: Video,
  },
  {
    number: "03",
    title: "انشر واربح",
    description: "انشر دورتك وابدأ في كسب الأرباح",
    icon: Rocket,
  },
]

const testimonials = [
  {
    name: "د. سارة أحمد",
    role: "مدربة تسويق رقمي",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "منصة رائعة ساعدتني في الوصول لآلاف الطلاب وتحقيق دخل ممتاز من خبرتي في التسويق.",
    earnings: "$15,000",
    students: "2,500",
  },
  {
    name: "أحمد محمود",
    role: "مطور ويب",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "أفضل قرار اتخذته هو التدريس هنا. الدعم ممتاز والأدوات سهلة الاستخدام.",
    earnings: "$22,000",
    students: "3,200",
  },
  {
    name: "فاطمة العلي",
    role: "مصممة جرافيك",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "تجربة مذهلة! تمكنت من تحويل شغفي بالتصميم إلى مصدر دخل مستمر.",
    earnings: "$8,500",
    students: "1,800",
  },
]

export default function TeachPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    courseIdea: "",
    motivation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Instructor application:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero text-white particles relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-500/10 rounded-full morph-1 floating" />
        <div
          className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full floating"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                  انضم كمدرب
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                  فرصة ذهبية
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">علّم</span> واكسب من
                <br />
                <span className="text-gradient">خبرتك</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                شارك معرفتك مع آلاف الطلاب حول العالم واحصل على دخل إضافي مستمر من خلال إنشاء دورات تعليمية عالية الجودة
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Rocket className="w-5 h-5 ml-2" />
                  ابدأ التدريس الآن
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 ml-2" />
                  شاهد كيف يعمل
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">$2,500</div>
                  <div className="text-gray-300 text-sm">متوسط الدخل الشهري</div>
                </div>
                <div className="glass-dark rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-300 text-sm">دعم فني مستمر</div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
                <Card className="relative shadow-intense bg-white/95 backdrop-blur-md border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">انضم لنخبة المدربين</h3>
                      <p className="text-gray-600">ابدأ رحلتك التعليمية اليوم</p>
                    </div>

                    <div className="space-y-4">
                      {["إنشاء دورات بلا حدود", "أدوات تحليل متقدمة", "دعم تسويقي مجاني", "مجتمع مدربين حصري"].map(
                        (feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ),
                      )}
                    </div>

                    <Link href="/teach/register">
                      <Button className="w-full mt-6 gradient-primary text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                        سجل كمدرب مجاناً
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">أرقام تتحدث عن نفسها</h2>
            <p className="text-xl text-gray-600">انضم لمجتمع المدربين الناجحين</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center shadow-elegant hover-scale border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-md">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">لماذا تختار التدريس معنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر لك كل ما تحتاجه لتحويل خبرتك إلى مصدر دخل مستمر ومؤثر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="shadow-elegant hover-scale border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">كيف تبدأ؟</h2>
            <p className="text-xl text-gray-600">ثلاث خطوات بسيطة لتصبح مدرباً ناجحاً</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 opacity-30 z-0" />
                )}

                <Card className="relative shadow-elegant hover-scale border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden z-10">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Lightbulb className="w-5 h-5 ml-2" />
              احصل على دليل المدرب المجاني
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">قصص نجاح ملهمة</h2>
            <p className="text-xl text-gray-600">اكتشف كيف غيّر المدربون حياتهم معنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-elegant hover-scale border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 mb-6">
                    <p className="text-gray-700 leading-relaxed font-medium">"{testimonial.comment}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100">
                      <div className="text-lg font-bold text-green-600">{testimonial.earnings}</div>
                      <div className="text-xs text-gray-600">إجمالي الأرباح</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100">
                      <div className="text-lg font-bold text-blue-600">{testimonial.students}</div>
                      <div className="text-xs text-gray-600">عدد الطلاب</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">ابدأ رحلتك التعليمية</h2>
            <p className="text-xl text-gray-600">املأ النموذج وسنتواصل معك خلال 24 ساعة</p>
          </div>

          <Card className="shadow-intense border-0 bg-white/95 backdrop-blur-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">طلب انضمام كمدرب</CardTitle>
              <p className="text-green-100 mt-2">انضم لأكثر من 500 مدرب ناجح</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2 block">
                      الاسم الكامل *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2 block">
                      البريد الإلكتروني *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="expertise" className="text-lg font-semibold text-gray-700 mb-2 block">
                    مجال الخبرة *
                  </Label>
                  <Select
                    value={formData.expertise}
                    onValueChange={(value) => setFormData({ ...formData, expertise: value })}
                  >
                    <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                      <SelectValue placeholder="اختر مجال خبرتك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">البرمجة والتطوير</SelectItem>
                      <SelectItem value="design">التصميم</SelectItem>
                      <SelectItem value="marketing">التسويق الرقمي</SelectItem>
                      <SelectItem value="business">إدارة الأعمال</SelectItem>
                      <SelectItem value="languages">اللغات</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-lg font-semibold text-gray-700 mb-2 block">
                    سنوات الخبرة *
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                      <SelectValue placeholder="اختر سنوات خبرتك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 سنة</SelectItem>
                      <SelectItem value="3-5">3-5 سنوات</SelectItem>
                      <SelectItem value="6-10">6-10 سنوات</SelectItem>
                      <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="courseIdea" className="text-lg font-semibold text-gray-700 mb-2 block">
                    فكرة الدورة المقترحة *
                  </Label>
                  <Textarea
                    id="courseIdea"
                    required
                    value={formData.courseIdea}
                    onChange={(e) => setFormData({ ...formData, courseIdea: e.target.value })}
                    className="min-h-[120px] border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                    placeholder="اكتب وصفاً مختصراً عن الدورة التي تريد إنشاءها..."
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-lg font-semibold text-gray-700 mb-2 block">
                    لماذا تريد التدريس معنا؟
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="min-h-[100px] border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                    placeholder="شاركنا دوافعك للتدريس..."
                  />
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    بإرسال هذا النموذج، أوافق على{" "}
                    <Link href="/terms" className="text-green-600 hover:text-green-500 font-medium">
                      الشروط والأحكام
                    </Link>{" "}
                    و{" "}
                    <Link href="/privacy" className="text-green-600 hover:text-green-500 font-medium">
                      سياسة الخصوصية
                    </Link>
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Upload className="w-5 h-5 ml-2" />
                  إرسال طلب الانضمام
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">مستعد لتغيير حياتك؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم لآلاف المدربين الذين حولوا خبرتهم إلى مصدر دخل مستمر ومؤثر
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 ml-2" />
              ابدأ رحلتك اليوم
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              تحدث مع مستشار
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-dark rounded-2xl p-6 text-center">
              <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-semibold">تحليلات متقدمة</div>
              <div className="text-gray-300 text-sm">تتبع أداء دوراتك</div>
            </div>
            <div className="glass-dark rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-semibold">مجتمع داعم</div>
              <div className="text-gray-300 text-sm">شبكة من المدربين</div>
            </div>
            <div className="glass-dark rounded-2xl p-6 text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-lg font-semibold">شهادات معتمدة</div>
              <div className="text-gray-300 text-sm">اعتماد دولي</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
