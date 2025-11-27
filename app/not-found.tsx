"use client";

import { Button } from "@/components/ui/button";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Home, RotateCw, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div
      className={cn(
        "mx-auto flex h-[90dvh] max-w-480 flex-col items-center justify-center text-center",
        padding,
      )}
    >
      <XCircle className="mb-4 h-12 w-12 text-gray-400" />
      <h2 className="mb-2 text-2xl font-semibold">Page not found</h2>
      <p className="max-w-md opacity-60">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. You can try refreshing or return home to continue browsing.
      </p>
      <div className="mt-6 space-x-2">
        <Button size="lg" onClick={() => router.refresh()} variant="outline">
          <RotateCw /> <span>Reload</span>
        </Button>
        <Link href="/">
          <Button size="lg">
            <Home /> <span>Go Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
