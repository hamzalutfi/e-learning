"use client"

import { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Check,
  Settings,
  BookOpen,
  Star,
  Gift,
  Users,
  MessageCircle,
  Award,
  Calendar,
  CreditCard,
  Heart,
  Share2,
  Eye,
  EyeOff,
  Filter,
  Search,
  Trash2,
  Archive,
} from "lucide-react"
import Image from "next/image"

const notifications = [
  {
    id: "1",
    type: "course_update",
    title: "تحديث جديد في دورة React",
    message: "تم إضافة 3 محاضرات جديدة في دورة تطوير المواقع باستخدام React",
    time: "منذ 5 دقائق",
    isRead: false,
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    course: {
      title: "تطوير المواقع الإلكترونية باستخدام React",
      instructor: "أحمد محمد",
      image: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: "2",
    type: "achievement",
    title: "تهانينا! حصلت على شهادة",
    message: "لقد أكملت بنجاح دورة تصميم واجهات المستخدم وحصلت على شهادة معتمدة",
    time: "منذ ساعة",
    isRead: false,
    icon: Award,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    achievement: {
      title: "شهادة تصميم UX/UI",
      course: "تصميم واجهات المستخدم من الصفر",
      date: "ديسمبر 2024",
    },
  },
  {
    id: "3",
    type: "promotion",
    title: "عرض خاص - خصم 50%",
    message: "خصم حصري على جميع دورات البرمجة لفترة محدودة. لا تفوت الفرصة!",
    time: "منذ 3 ساعات",
    isRead: true,
    icon: Gift,
    color: "text-red-500",
    bgColor: "bg-red-50",
    promotion: {
      discount: "50%",
      category: "البرمجة والتطوير",
      validUntil: "31 ديسمبر 2024",
    },
  },
  {
    id: "4",
    type: "review",
    title: "تقييم جديد على دورتك",
    message: "حصلت دورة 'أساسيات التسويق الرقمي' على تقييم 5 نجوم من طالب جديد",
    time: "منذ 6 ساعات",
    isRead: true,
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    review: {
      rating: 5,
      student: "محمد العلي",
      course: "أساسيات التسويق الرقمي",
      comment: "دورة ممتازة ومفيدة جداً",
    },
  },
  {
    id: "5",
    type: "enrollment",
    title: "طالب جديد انضم لدورتك",
    message: "انضم 15 طالب جديد لدورة 'إدارة المشاريع الرقمية' خلال الأسبوع الماضي",
    time: "منذ يوم",
    isRead: true,
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-50",
    enrollment: {
      count: 15,
      course: "إدارة المشاريع الرقمية",
      period: "الأسبوع الماضي",
    },
  },
  {
    id: "6",
    type: "message",
    title: "رسالة جديدة من طالب",
    message: "سؤال جديد في قسم الأسئلة والأجوبة لدورة JavaScript المتقدم",
    time: "منذ يومين",
    isRead: true,
    icon: MessageCircle,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    message_details: {
      student: "فاطمة أحمد",
      course: "JavaScript المتقدم",
      question: "كيف يمكنني التعامل مع Async/Await؟",
    },
  },
  {
    id: "7",
    type: "payment",
    title: "تم استلام دفعة جديدة",
    message: "تم إيداع $250 في حسابك من مبيعات الدورات هذا الشهر",
    time: "منذ 3 أيام",
    isRead: true,
    icon: CreditCard,
    color: "text-green-500",
    bgColor: "bg-green-50",
    payment: {
      amount: "$250",
      period: "ديسمبر 2024",
      courses: 5,
    },
  },
  {
    id: "8",
    type: "reminder",
    title: "تذكير: جلسة مباشرة اليوم",
    message: "لديك جلسة مباشرة مع الطلاب اليوم في الساعة 8:00 مساءً",
    time: "منذ أسبوع",
    isRead: true,
    icon: Calendar,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    reminder: {
      event: "جلسة مباشرة",
      time: "8:00 مساءً",
      course: "تطوير تطبيقات الموبايل",
    },
  },
]

const notificationStats = {
  total: notifications.length,
  unread: notifications.filter((n) => !n.isRead).length,
  today: notifications.filter((n) => n.time.includes("دقائق") || n.time.includes("ساعة")).length,
  thisWeek: notifications.filter((n) => !n.time.includes("أسبوع")).length,
}

export default function NotificationsPage() {
  const [notificationList, setNotificationList] = useState(notifications)
  const [selectedTab, setSelectedTab] = useState("all")
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const markAsRead = (id: string) => {
    setNotificationList((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notification) => ({ ...notification, isRead: true })))
  }

  const deleteNotification = (id: string) => {
    setNotificationList((prev) => prev.filter((notification) => notification.id !== id))
  }

  const archiveNotification = (id: string) => {
    setNotificationList((prev) => prev.filter((notification) => notification.id !== id))
  }

  const getFilteredNotifications = () => {
    let filtered = notificationList

    // Filter by tab
    if (selectedTab !== "all") {
      filtered = filtered.filter((n) => n.type === selectedTab)
    }

    // Filter by read status
    if (showOnlyUnread) {
      filtered = filtered.filter((n) => !n.isRead)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          n.message.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }

  const getNotificationIcon = (notification) => {
    const IconComponent = notification.icon
    return (
      <div className={`w-12 h-12 rounded-2xl ${notification.bgColor} flex items-center justify-center shadow-md`}>
        <IconComponent className={`w-6 h-6 ${notification.color}`} />
      </div>
    )
  }

  const renderNotificationContent = (notification) => {
    switch (notification.type) {
      case "course_update":
        return (
          <div className="flex items-center gap-3 mt-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100">
            <Image
              src={notification.course.image || "/placeholder.svg"}
              alt={notification.course.title}
              width={40}
              height={40}
              className="rounded-lg shadow-sm"
            />
            <div>
              <p className="font-semibold text-sm text-blue-800">{notification.course.title}</p>
              <p className="text-xs text-blue-600">بواسطة {notification.course.instructor}</p>
            </div>
          </div>
        )

      case "achievement":
        return (
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">{notification.achievement.title}</span>
            </div>
            <p className="text-sm text-yellow-700">{notification.achievement.course}</p>
            <p className="text-xs text-yellow-600">{notification.achievement.date}</p>
          </div>
        )

      case "promotion":
        return (
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-red-50 to-red-100">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="bg-red-500 text-white mb-2">{notification.promotion.discount} خصم</Badge>
                <p className="text-sm font-semibold text-red-800">{notification.promotion.category}</p>
                <p className="text-xs text-red-600">صالح حتى {notification.promotion.validUntil}</p>
              </div>
              <Gift className="w-8 h-8 text-red-500" />
            </div>
          </div>
        )

      case "review":
        return (
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(notification.review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-yellow-800">{notification.review.student}</span>
            </div>
            <p className="text-sm text-yellow-700 italic">"{notification.review.comment}"</p>
            <p className="text-xs text-yellow-600 mt-1">{notification.review.course}</p>
          </div>
        )

      default:
        return null
    }
  }

  const filteredNotifications = getFilteredNotifications()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gradient">الإشعارات</h1>
              <p className="text-gray-600">تابع آخر التحديثات والأنشطة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowOnlyUnread(!showOnlyUnread)}
              className={`rounded-xl transition-all duration-300 ${
                showOnlyUnread ? "bg-blue-50 border-blue-500 text-blue-600" : ""
              }`}
            >
              {showOnlyUnread ? <Eye className="w-4 h-4 ml-2" /> : <EyeOff className="w-4 h-4 ml-2" />}
              {showOnlyUnread ? "عرض الكل" : "غير المقروءة فقط"}
            </Button>
            <Button
              onClick={markAllAsRead}
              className="gradient-primary text-white rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Check className="w-4 h-4 ml-2" />
              تحديد الكل كمقروء
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{notificationStats.total}</div>
              <div className="text-sm text-blue-700">إجمالي الإشعارات</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-red-50 to-red-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{notificationStats.unread}</div>
              <div className="text-sm text-red-700">غير مقروءة</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{notificationStats.today}</div>
              <div className="text-sm text-green-700">اليوم</div>
            </CardContent>
          </Card>
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-purple-50 to-purple-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{notificationStats.thisWeek}</div>
              <div className="text-sm text-purple-700">هذا الأسبوع</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm sticky top-24">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  تصفية الإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs value={selectedTab} onValueChange={setSelectedTab} orientation="vertical">
                  <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent">
                    <TabsTrigger value="all" className="justify-start rounded-xl">
                      <Bell className="w-4 h-4 ml-2" />
                      جميع الإشعارات
                    </TabsTrigger>
                    <TabsTrigger value="course_update" className="justify-start rounded-xl">
                      <BookOpen className="w-4 h-4 ml-2" />
                      تحديثات الدورات
                    </TabsTrigger>
                    <TabsTrigger value="achievement" className="justify-start rounded-xl">
                      <Award className="w-4 h-4 ml-2" />
                      الإنجازات
                    </TabsTrigger>
                    <TabsTrigger value="promotion" className="justify-start rounded-xl">
                      <Gift className="w-4 h-4 ml-2" />
                      العروض
                    </TabsTrigger>
                    <TabsTrigger value="review" className="justify-start rounded-xl">
                      <Star className="w-4 h-4 ml-2" />
                      التقييمات
                    </TabsTrigger>
                    <TabsTrigger value="enrollment" className="justify-start rounded-xl">
                      <Users className="w-4 h-4 ml-2" />
                      التسجيلات
                    </TabsTrigger>
                    <TabsTrigger value="message" className="justify-start rounded-xl">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      الرسائل
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="justify-start rounded-xl">
                      <CreditCard className="w-4 h-4 ml-2" />
                      المدفوعات
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="mt-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="البحث في الإشعارات..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications List */}
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-gradient">
                    {selectedTab === "all" ? "جميع الإشعارات" : "الإشعارات المفلترة"} ({filteredNotifications.length})
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد إشعارات</h3>
                    <p className="text-gray-600">لا توجد إشعارات تطابق المعايير المحددة</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-6 hover:bg-gray-50 transition-all duration-300 group ${
                          !notification.isRead ? "bg-blue-50/50" : ""
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">{getNotificationIcon(notification)}</div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <h3 className="font-bold text-lg text-gray-900">{notification.title}</h3>
                                {!notification.isRead && (
                                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                                )}
                              </div>
                              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-green-600 hover:text-green-700 hover:bg-green-50 rounded-xl"
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => archiveNotification(notification.id)}
                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl"
                                >
                                  <Archive className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deleteNotification(notification.id)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            <p className="text-gray-700 mb-3 leading-relaxed">{notification.message}</p>

                            {renderNotificationContent(notification)}

                            <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-gray-500 font-medium">{notification.time}</span>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-gray-400 hover:text-red-500 rounded-xl"
                                >
                                  <Heart className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-gray-400 hover:text-blue-500 rounded-xl"
                                >
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
