"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();
  function handleGoBack() {
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  return (
    <Button
      onClick={handleGoBack}
      variant="ghost"
      className="p-0 text-[15px] leading-[25px] text-black/50 capitalize"
    >
      Go back
    </Button>
  );
}

export default GoBackButton;
