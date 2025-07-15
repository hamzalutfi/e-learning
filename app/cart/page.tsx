"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Trash2,
  Heart,
  Share2,
  ShoppingCart,
  CreditCard,
  Clock,
  Users,
  Star,
  CheckCircle,
  Shield,
  Infinity,
  Tag,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const cartItems = [
  {
    id: "1",
    title: "تطوير المواقع الإلكترونية باستخدام React و Next.js",
    instructor: "أحمد محمد",
    price: 89,
    originalPrice: 149,
    image: "Image_fx (4).jpg",
    duration: "12 ساعة",
    lectures: 45,
    level: "متوسط",
    rating: 4.8,
    students: 1250,
    lastUpdated: "ديسمبر 2024",
    isWishlisted: false,
  },
  {
    id: "2",
    title: "تصميم واجهات المستخدم UX/UI من الصفر",
    instructor: "فاطمة أحمد",
    price: 79,
    originalPrice: 129,
    image: "Image_fx (3).jpg",
    duration: "8 ساعات",
    lectures: 32,
    level: "مبتدئ",
    rating: 4.9,
    students: 890,
    lastUpdated: "نوفمبر 2024",
    isWishlisted: true,
  },
  {
    id: "3",
    title: "التسويق الرقمي ووسائل التواصل الاجتماعي",
    instructor: "خالد العلي",
    price: 69,
    originalPrice: 99,
    image: "Image_fx (5).jpg",
    duration: "10 ساعات",
    lectures: 38,
    level: "مبتدئ",
    rating: 4.7,
    students: 2100,
    lastUpdated: "ديسمبر 2024",
    isWishlisted: false,
  },
];

const recommendedCourses = [
  {
    id: "4",
    title: "أساسيات الذكاء الاصطناعي",
    instructor: "محمد الأحمد",
    price: 99,
    originalPrice: 159,
    image: "/placeholder.svg?height=80&width=120",
    rating: 4.5,
    students: 750,
  },
  {
    id: "5",
    title: "إدارة المشاريع الرقمية",
    instructor: "نور الدين",
    price: 59,
    originalPrice: 89,
    image: "/placeholder.svg?height=80&width=120",
    rating: 4.4,
    students: 650,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
      )
    );
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save20") {
      setAppliedCoupon({ code: "SAVE20", discount: 20, amount: total * 0.2 });
    } else if (couponCode.toLowerCase() === "welcome10") {
      setAppliedCoupon({
        code: "WELCOME10",
        discount: 10,
        amount: total * 0.1,
      });
    }
    setCouponCode("");
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const addToCart = (course) => {
    const newItem = {
      ...course,
      duration: "6 ساعات",
      lectures: 25,
      level: "متوسط",
      lastUpdated: "ديسمبر 2024",
      isWishlisted: false,
    };
    setItems([...items, newItem]);
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to payment or show success
    }, 2000);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const originalTotal = items.reduce(
    (sum, item) => sum + (item.originalPrice || item.price),
    0
  );
  const savings = originalTotal - subtotal;
  const couponDiscount = appliedCoupon ? appliedCoupon.amount : 0;
  const total = subtotal - couponDiscount;
  const finalSavings = savings + couponDiscount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-green-600" />
          <h1 className="text-4xl font-bold text-gradient">عربة التسوق</h1>
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full">
            {items.length} عنصر
          </Badge>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              عربة التسوق فارغة
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              لم تقم بإضافة أي دورات بعد. استكشف مكتبتنا الواسعة من الدورات
              التعليمية
            </p>
            <Link href="/courses">
              <Button className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                تصفح الدورات
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-2 space-y-6">
              <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                  <CardTitle className="text-2xl text-gradient flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6" />
                    دوراتك المختارة ({items.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="p-6 hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="flex gap-6">
                          <div className="relative flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={180}
                              height={120}
                              className="rounded-xl object-contain shadow-md group-hover:shadow-lg transition-all duration-300"
                            />
                            <Badge className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 text-xs rounded-full">
                              {item.level}
                            </Badge>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <Link href={`/courses/${item.id}`}>
                                <h3 className="font-bold text-xl text-gray-900 hover:text-green-600 transition-colors duration-300 line-clamp-2 group-hover:text-green-600">
                                  {item.title}
                                </h3>
                              </Link>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                              >
                                <Trash2 className="w-5 h-5" />
                              </Button>
                            </div>

                            <p className="text-gray-600 mb-3 font-medium">
                              بواسطة {item.instructor}
                            </p>

                            <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{item.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{item.lectures} محاضرة</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span>{item.rating}</span>
                                <span>({item.students.toLocaleString()})</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl font-bold text-gray-900">
                                    ${item.price}
                                  </span>
                                  {item.originalPrice && (
                                    <span className="text-lg text-gray-500 line-through">
                                      ${item.originalPrice}
                                    </span>
                                  )}
                                  {item.originalPrice && (
                                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs">
                                      {Math.round(
                                        ((item.originalPrice - item.price) /
                                          item.originalPrice) *
                                          100
                                      )}
                                      % خصم
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleWishlist(item.id)}
                                  className={`rounded-xl transition-all duration-300 ${
                                    item.isWishlisted
                                      ? "text-red-500 hover:text-red-600"
                                      : "text-gray-400 hover:text-red-500"
                                  }`}
                                >
                                  <Heart
                                    className={`w-5 h-5 ${
                                      item.isWishlisted ? "fill-current" : ""
                                    }`}
                                  />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-gray-400 hover:text-gray-600 rounded-xl transition-all duration-300"
                                >
                                  <Share2 className="w-5 h-5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Courses */}
              <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl">
                  <CardTitle className="text-xl text-gradient">
                    دورات قد تعجبك
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendedCourses.map((course) => (
                      <div
                        key={course.id}
                        className="flex gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-all duration-300 group"
                      >
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={120}
                          height={80}
                          className="rounded-lg object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                            {course.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {course.instructor}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">
                              {course.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({course.students})
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900">
                                ${course.price}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ${course.originalPrice}
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => addToCart(course)}
                              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                              <Plus className="w-4 h-4 ml-1" />
                              أضف
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1">
              <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-md sticky top-24">
                <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-2xl">
                  <CardTitle className="text-2xl font-bold text-center">
                    ملخص الطلب
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>المجموع الفرعي:</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>

                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>خصم الدورات:</span>
                        <span className="font-semibold">-${savings}</span>
                      </div>
                    )}

                    {appliedCoupon && (
                      <div className="flex justify-between text-blue-600">
                        <div className="flex items-center gap-2">
                          <span>كوبون ({appliedCoupon.code}):</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={removeCoupon}
                            className="text-red-500 hover:text-red-600 p-1 h-auto"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>
                        <span className="font-semibold">
                          -${appliedCoupon.amount.toFixed(2)}
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>المجموع النهائي:</span>
                      <span className="text-green-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    {finalSavings > 0 && (
                      <div className="text-center p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100">
                        <p className="text-green-700 font-semibold">
                          🎉 وفرت ${finalSavings.toFixed(2)}!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <Label className="block text-sm font-semibold text-gray-700 mb-2">
                      كود الخصم
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="أدخل كود الخصم"
                        className="flex-1 rounded-xl border-2 border-gray-200 focus:border-green-500"
                      />
                      <Button
                        onClick={applyCoupon}
                        disabled={!couponCode}
                        variant="outline"
                        className="px-4 rounded-xl border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        <Tag className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      جرب: SAVE20 أو WELCOME10
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button
                      onClick={handleCheckout}
                      disabled={isProcessing}
                      className="w-full gradient-primary text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          جاري المعالجة...
                        </div>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 ml-2" />
                          تابع إلى الدفع
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">
                        ضمان استرداد الأموال لمدة 30 يوماً
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                      <Infinity className="w-4 h-4" />
                      <span className="text-sm">وصول مدى الحياة</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">شهادة إتمام معتمدة</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="text-green-600 hover:text-green-500 font-medium text-sm"
                    >
                      متابعة التسوق
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
