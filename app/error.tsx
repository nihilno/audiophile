"use client";

import { Button } from "@/components/ui/button";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AlertCircle, Home, RotateCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex h-[90dvh] max-w-480 flex-col items-center justify-center text-center",
        padding,
      )}
    >
      <AlertCircle className="mb-4 h-12 w-12 text-gray-400" />
      <h2 className="mb-2 text-2xl font-semibold">Something went wrong.</h2>
      <p className="max-w-md opacity-60">
        {error.message ||
          "An error occured, but don't worry — we'll get you back."}
      </p>
      <div className="mt-6 space-x-2">
        <Button size="lg" onClick={reset} variant="outline">
          <RotateCw /> <span>Reload</span>
        </Button>
        <Link href="/">
          <Button size="lg">
            <Home /> <span>Go Home</span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xs opacity-75">
        Error ID: {error.digest || "local"}
      </p>
    </div>
  );
}
