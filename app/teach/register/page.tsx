"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Upload,
  CheckCircle,
  Eye,
  EyeOff,
  Calendar,
  Globe,
  Award,
  BookOpen,
  Star,
  Shield,
  Clock,
  Users,
} from "lucide-react"

const steps = [
  { id: 1, title: "المعلومات الشخصية", icon: User },
  { id: 2, title: "الخبرة والمؤهلات", icon: GraduationCap },
  { id: 3, title: "معلومات التدريس", icon: BookOpen },
  { id: 4, title: "التحقق والموافقة", icon: Shield },
]

const benefits = [
  { icon: Star, text: "انضم لأكثر من 500 مدرب ناجح" },
  { icon: Globe, text: "وصول لأكثر من 50,000 طالب" },
  { icon: Award, text: "شهادات معتمدة دولياً" },
  { icon: Clock, text: "دعم فني 24/7" },
]

export default function TeacherRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",

    // Experience & Qualifications
    education: "",
    university: "",
    graduationYear: "",
    currentJob: "",
    company: "",
    experience: "",
    expertise: "",
    skills: "",
    certifications: "",

    // Teaching Information
    teachingExperience: "",
    preferredSubjects: "",
    courseIdea: "",
    targetAudience: "",
    teachingStyle: "",
    availability: "",
    expectedEarnings: "",

    // Verification
    profilePhoto: null,
    idDocument: null,
    certificate: null,
    agreeTerms: false,
    agreeMarketing: false,
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Teacher registration:", formData)
    // Handle form submission
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الاسم الأول *
                </Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-12 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="أدخل اسمك الأول"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <Label htmlFor="lastName" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الاسم الأخير *
                </Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="h-12 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="أدخل اسمك الأخير"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2 block">
                البريد الإلكتروني *
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold text-gray-700 mb-2 block">
                  رقم الهاتف *
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="+966 50 123 4567"
                  />
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <Label htmlFor="dateOfBirth" className="text-lg font-semibold text-gray-700 mb-2 block">
                  تاريخ الميلاد *
                </Label>
                <div className="relative">
                  <Input
                    id="dateOfBirth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="h-12 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  />
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="country" className="text-lg font-semibold text-gray-700 mb-2 block">
                  البلد *
                </Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                    <SelectValue placeholder="اختر بلدك" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sa">السعودية</SelectItem>
                    <SelectItem value="ae">الإمارات</SelectItem>
                    <SelectItem value="eg">مصر</SelectItem>
                    <SelectItem value="jo">الأردن</SelectItem>
                    <SelectItem value="lb">لبنان</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="gender" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الجنس *
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                    <SelectValue placeholder="اختر الجنس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">ذكر</SelectItem>
                    <SelectItem value="female">أنثى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="password" className="text-lg font-semibold text-gray-700 mb-2 block">
                  كلمة المرور *
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="أدخل كلمة مرور قوية"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-700 mb-2 block">
                  تأكيد كلمة المرور *
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="h-12 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="أعد إدخال كلمة المرور"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="education" className="text-lg font-semibold text-gray-700 mb-2 block">
                المستوى التعليمي *
              </Label>
              <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="اختر مستواك التعليمي" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">الثانوية العامة</SelectItem>
                  <SelectItem value="diploma">دبلوم</SelectItem>
                  <SelectItem value="bachelor">بكالوريوس</SelectItem>
                  <SelectItem value="master">ماجستير</SelectItem>
                  <SelectItem value="phd">دكتوراه</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="university" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الجامعة/المؤسسة التعليمية
                </Label>
                <Input
                  id="university"
                  type="text"
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="اسم الجامعة"
                />
              </div>

              <div>
                <Label htmlFor="graduationYear" className="text-lg font-semibold text-gray-700 mb-2 block">
                  سنة التخرج
                </Label>
                <Input
                  id="graduationYear"
                  type="number"
                  value={formData.graduationYear}
                  onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="2020"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentJob" className="text-lg font-semibold text-gray-700 mb-2 block">
                  المسمى الوظيفي الحالي
                </Label>
                <Input
                  id="currentJob"
                  type="text"
                  value={formData.currentJob}
                  onChange={(e) => handleInputChange("currentJob", e.target.value)}
                  className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="مطور ويب، مصمم، إلخ"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الشركة/المؤسسة
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="h-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="اسم الشركة"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="experience" className="text-lg font-semibold text-gray-700 mb-2 block">
                سنوات الخبرة *
              </Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="اختر سنوات خبرتك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">أقل من سنة</SelectItem>
                  <SelectItem value="1-2">1-2 سنة</SelectItem>
                  <SelectItem value="3-5">3-5 سنوات</SelectItem>
                  <SelectItem value="6-10">6-10 سنوات</SelectItem>
                  <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="expertise" className="text-lg font-semibold text-gray-700 mb-2 block">
                مجال الخبرة *
              </Label>
              <Select value={formData.expertise} onValueChange={(value) => handleInputChange("expertise", value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="اختر مجال خبرتك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programming">البرمجة والتطوير</SelectItem>
                  <SelectItem value="design">التصميم والجرافيك</SelectItem>
                  <SelectItem value="marketing">التسويق الرقمي</SelectItem>
                  <SelectItem value="business">إدارة الأعمال</SelectItem>
                  <SelectItem value="languages">اللغات</SelectItem>
                  <SelectItem value="finance">المالية والمحاسبة</SelectItem>
                  <SelectItem value="health">الصحة والطب</SelectItem>
                  <SelectItem value="other">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="skills" className="text-lg font-semibold text-gray-700 mb-2 block">
                المهارات الرئيسية *
              </Label>
              <Textarea
                id="skills"
                required
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                className="min-h-[120px] border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                placeholder="اذكر أهم مهاراتك (مثل: React, Node.js, Photoshop, إلخ)"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="teachingExperience" className="text-lg font-semibold text-gray-700 mb-2 block">
                خبرة التدريس
              </Label>
              <Select
                value={formData.teachingExperience}
                onValueChange={(value) => handleInputChange("teachingExperience", value)}
              >
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="اختر خبرتك في التدريس" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">لا توجد خبرة</SelectItem>
                  <SelectItem value="informal">تدريس غير رسمي</SelectItem>
                  <SelectItem value="1-2">1-2 سنة</SelectItem>
                  <SelectItem value="3-5">3-5 سنوات</SelectItem>
                  <SelectItem value="5+">أكثر من 5 سنوات</SelectItem>
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
                onChange={(e) => handleInputChange("courseIdea", e.target.value)}
                className="min-h-[120px] border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                placeholder="اكتب وصفاً مفصلاً عن الدورة التي تريد إنشاءها..."
              />
            </div>

            <div>
              <Label htmlFor="targetAudience" className="text-lg font-semibold text-gray-700 mb-2 block">
                الجمهور المستهدف *
              </Label>
              <Select
                value={formData.targetAudience}
                onValueChange={(value) => handleInputChange("targetAudience", value)}
              >
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="من هو جمهورك المستهدف؟" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginners">المبتدئين</SelectItem>
                  <SelectItem value="intermediate">المستوى المتوسط</SelectItem>
                  <SelectItem value="advanced">المستوى المتقدم</SelectItem>
                  <SelectItem value="professionals">المحترفين</SelectItem>
                  <SelectItem value="students">الطلاب</SelectItem>
                  <SelectItem value="all">جميع المستويات</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="teachingStyle" className="text-lg font-semibold text-gray-700 mb-2 block">
                أسلوب التدريس المفضل
              </Label>
              <Select
                value={formData.teachingStyle}
                onValueChange={(value) => handleInputChange("teachingStyle", value)}
              >
                <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="اختر أسلوب التدريس" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theoretical">نظري</SelectItem>
                  <SelectItem value="practical">عملي</SelectItem>
                  <SelectItem value="mixed">مختلط (نظري وعملي)</SelectItem>
                  <SelectItem value="interactive">تفاعلي</SelectItem>
                  <SelectItem value="project-based">قائم على المشاريع</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="availability" className="text-lg font-semibold text-gray-700 mb-2 block">
                  التفرغ للتدريس
                </Label>
                <Select
                  value={formData.availability}
                  onValueChange={(value) => handleInputChange("availability", value)}
                >
                  <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                    <SelectValue placeholder="كم ساعة أسبوعياً؟" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="part-time">جزئي (أقل من 10 ساعات)</SelectItem>
                    <SelectItem value="moderate">متوسط (10-20 ساعة)</SelectItem>
                    <SelectItem value="full-time">كامل (أكثر من 20 ساعة)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="expectedEarnings" className="text-lg font-semibold text-gray-700 mb-2 block">
                  الدخل المتوقع شهرياً
                </Label>
                <Select
                  value={formData.expectedEarnings}
                  onValueChange={(value) => handleInputChange("expectedEarnings", value)}
                >
                  <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl">
                    <SelectValue placeholder="كم تتوقع أن تكسب؟" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                    <SelectItem value="5000+">أكثر من $5,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">التحقق من الهوية</h3>
              <p className="text-gray-600">نحتاج للتحقق من هويتك لضمان جودة المنصة</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-green-500 transition-colors duration-300 cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-1">صورة شخصية</p>
                  <p className="text-xs text-gray-500">JPG, PNG (حد أقصى 5MB)</p>
                </div>
              </div>

              <div className="text-center">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-green-500 transition-colors duration-300 cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-1">وثيقة الهوية</p>
                  <p className="text-xs text-gray-500">هوية، جواز سفر</p>
                </div>
              </div>

              <div className="text-center">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-green-500 transition-colors duration-300 cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-1">الشهادات</p>
                  <p className="text-xs text-gray-500">شهادات الخبرة (اختياري)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                  className="mt-1"
                />
                <Label htmlFor="agreeTerms" className="text-sm text-gray-700 leading-relaxed">
                  أوافق على{" "}
                  <Link href="/terms" className="text-green-600 hover:text-green-500 font-medium">
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link href="/privacy" className="text-green-600 hover:text-green-500 font-medium">
                    سياسة الخصوصية
                  </Link>{" "}
                  الخاصة بالمنصة *
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked)}
                  className="mt-1"
                />
                <Label htmlFor="agreeMarketing" className="text-sm text-gray-700 leading-relaxed">
                  أوافق على تلقي رسائل تسويقية ونصائح حول التدريس (اختياري)
                </Label>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mt-8">
              <h4 className="font-bold text-lg text-gray-900 mb-3">ما يحدث بعد التسجيل:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">مراجعة طلبك خلال 24-48 ساعة</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">إرسال رسالة ترحيب مع دليل البداية</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">الوصول لوحة تحكم المدرب</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">بدء إنشاء دورتك الأولى</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo.jpg" alt="Sadiq E-Learning" width={50} height={50} className="rounded-xl shadow-md" />
            <h1 className="text-4xl font-bold text-gradient">انضم كمدرب</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ابدأ رحلتك التعليمية وشارك خبرتك مع آلاف الطلاب حول العالم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-6">خطوات التسجيل</h3>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        currentStep === step.id
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                          : currentStep > step.id
                            ? "bg-gradient-to-r from-green-50 to-green-100 text-green-700"
                            : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          currentStep === step.id
                            ? "bg-white/20"
                            : currentStep > step.id
                              ? "bg-green-500 text-white"
                              : "bg-gray-200"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-4 h-4" />
                        )}
                      </div>
                      <span className="font-medium text-sm">{step.title}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <h4 className="font-semibold text-gray-900">مميزات الانضمام:</h4>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <benefit.icon className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-2xl">
                <CardTitle className="text-2xl font-bold text-center">
                  الخطوة {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      className="px-6 py-3 rounded-xl font-semibold bg-transparent"
                    >
                      السابق
                    </Button>

                    {currentStep < steps.length ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        التالي
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!formData.agreeTerms}
                        className="gradient-primary text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                      >
                        <Users className="w-5 h-5 ml-2" />
                        إرسال طلب الانضمام
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
