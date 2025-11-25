import Yx1Earphones from "@/components/featured/yx1-earphones";
import Zx7Speaker from "@/components/featured/zx7-speaker";
import Zx9Speaker from "@/components/featured/zx9-speaker";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Featured() {
  return (
    <div className={cn("relative mt-24 space-y-6", padding)}>
      <Zx9Speaker />
      <Zx7Speaker />
      <Yx1Earphones />
    </div>
  );
}

export default Featured;
