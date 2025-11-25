import { Button } from "@/components/ui/button";
import FeaturedSpeakerImage from "@/public/images/featured/image-speaker-zx7.jpg";
import Image from "next/image";

function Zx7Speaker() {
  return (
    <div className="bg-featured relative flex h-80 items-center overflow-hidden rounded-md pl-6 shadow-md md:pl-12 lg:pl-20">
      <div className="absolute inset-0 z-20 mx-auto opacity-70">
        <Image
          src={FeaturedSpeakerImage}
          alt="ZX7 Speaker"
          fill
          className="scale-x-[-1] object-cover"
          placeholder="blur"
          sizes="100vw"
        />
      </div>

      <article className="relative z-50">
        <div className="space-y-5">
          <h2 className="text-[28px] leading-10 font-bold tracking-[2px] uppercase md:text-[56px] md:leading-[58px]">
            ZX7 Speaker
          </h2>

          <Button className="hover:bg-accent-st bg-0 mt-4 h-12 rounded-none border border-black px-8 text-[13px] font-bold tracking-[1px] text-black uppercase transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
            See Product
          </Button>
        </div>
      </article>
    </div>
  );
}

export default Zx7Speaker;
