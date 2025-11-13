import { Metadata } from "next";
import { generateStaticPageMetadata } from "@/utilities/metadata";
import AllBlogs from "@/components/Blog/AllBlogs";
import BlogsHeader from "@/components/Blog/BlogsHeader";

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Blog - CLAPIT SOLUTIONS",
  description:
    "Read our latest articles on development, technology, AI, and digital marketing. Stay updated with industry insights and best practices from CLAPIT SOLUTIONS.",
  keywords: [
    "development blog",
    "technology articles",
    "AI insights",
    "web development blog",
    "digital marketing tips",
    "CLAPIT SOLUTIONS blog"
  ],
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <div>
      <BlogsHeader />
      <AllBlogs />
    </div>
  );
}
