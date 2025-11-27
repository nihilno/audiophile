import { Button } from "@/components/ui/button";
import FeaturedEarphoneImage from "@/public/images/featured/image-earphone-yx1.jpg";
import Image from "next/image";
import Link from "next/link";

function Yx1Earphones() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="relative h-50 overflow-hidden rounded-md shadow-md sm:h-80">
        <Image
          src={FeaturedEarphoneImage}
          alt="YX1 Earphones"
          fill
          className="object-cover"
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>

      <article className="relative z-50 h-50 rounded-md bg-gray-200 px-6 py-2 shadow-md sm:h-80 sm:px-16">
        <div className="flex h-full flex-col items-start justify-center lg:gap-4">
          <h2 className="text-[28px] leading-10 font-bold tracking-[2px] uppercase lg:text-[56px] lg:leading-[58px]">
            YX1 Earphones
          </h2>

          <Link href="/products/yx1-earphones">
            <Button className="hover:bg-accent-st bg-0 mt-4 h-12 rounded-none border border-black px-8 text-[13px] font-bold tracking-[1px] text-black uppercase transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
              See Product
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Yx1Earphones;
