import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  originalPrice?: number;
  image: string;
  level: string;
}

export default function CourseCard({
  id,
  title,
  instructor,
  rating,
  students,
  price,
  originalPrice,
  image,
  level,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale hover:shadow-lg transition-all duration-300">
      <Link href={`/courses/${id}`}>
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-contain"
          />
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            {level}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/courses/${id}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-green-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-2">بواسطة {instructor}</p>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 mr-1">
              {rating}
            </span>
          </div>
          <div className="flex items-center mr-4">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 mr-1">
              {students.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            أضف للعربة
          </Button>
        </div>
      </div>
    </div>
  );
}
