import Categories from "@/components/categories/categories";
import GoBackButton from "@/components/global/go-back-button";
import Info from "@/components/info/info";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-480">
        <div className={cn("mt-4 lg:mt-16", padding)}>
          <GoBackButton />
        </div>
        {children}
        <Categories />
        <Info />
      </div>
    </section>
  );
}
