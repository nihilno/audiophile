import CategoryCard from "@/components/categories/category-card";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = [
  {
    label: "Headphones",
    href: "/headphones",
    image: "/images/categories/image-category-thumbnail-headphones.png",
  },
  {
    label: "Speakers",
    href: "/speakers",
    image: "/images/categories/image-category-thumbnail-speakers.png",
  },
  {
    label: "Earphones",
    href: "/earphones",
    image: "/images/categories/image-category-thumbnail-earphones.png",
  },
];

function Categories() {
  return (
    <div
      className={cn(
        "mt-48 flex flex-col items-center gap-20 md:flex-row md:justify-between md:gap-10",
        padding,
      )}
    >
      {categories.map((category) => (
        <CategoryCard key={category.label} category={category} />
      ))}
    </div>
  );
}

export default Categories;
