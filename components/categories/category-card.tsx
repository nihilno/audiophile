import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({
  category,
}: {
  category: { label: string; href: string; image: string };
}) {
  return (
    <Link
      href={category.href}
      className="relative h-[185px] w-full max-w-[350px] cursor-pointer rounded-md bg-gray-100 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl md:h-50 lg:h-[220px] lg:max-w-[430px]"
    >
      <div className="flex h-full flex-col items-center justify-end py-4 lg:py-6">
        <h3 className="font-bold tracking-[1.07px] text-black uppercase">
          {category.label}
        </h3>

        <Button variant="ghost" className="flex items-center">
          <span className="text-[13px] font-bold tracking-[1px] text-black/50 uppercase">
            SHOP
          </span>
          <ChevronRight color="#dc143c" className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.label}
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, 350px"
          className="mx-auto max-w-50 -translate-y-15 transition-transform duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
}

export default CategoryCard;
