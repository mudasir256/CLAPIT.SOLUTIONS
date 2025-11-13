import React from "react";
import Image from "next/image";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
};

export default function BlogPostDetail({ blogPost }: { blogPost: BlogPost }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-secondary">
        {blogPost.title}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 border rounded-lg shadow-md">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            height={500}
            width={500}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-dark mb-2">{blogPost.description}</p>
          <span className="text-sm text-medium">{blogPost.date}</span>
        </div>
      </div>
    </div>
  );
}
