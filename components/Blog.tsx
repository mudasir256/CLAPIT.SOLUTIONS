import React from "react";
import { blogPosts } from "@/data/blogsData";
import BlogCard from "./Blog/BlogCard";
import Link from "next/link";

interface BlogsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Blogs({ limit, showViewAll = true }: BlogsProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-secondary">Latest Blogs</h1>
        {showViewAll && limit && (
          <Link
            href="/blogs"
            className="px-6 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
          >
            View All
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <BlogCard
            key={post.slug}
            id={post.slug}
            title={post.title}
            description={post.description}
            image={post.coverImage}
          />
        ))}
      </div>
    </div>
  );
}
