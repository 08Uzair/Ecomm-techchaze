"use client";
import { getBlogByID } from "@/app/redux/actions/blogs";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image"; // Import Image component

const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state?.blogs?.[0]?.data);
  console.log(blog);

  useEffect(() => {
    dispatch(getBlogByID(id));
  }, [dispatch, id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Handling image URL
  const imageUrl =
    blog?.image?.formats?.thumbnail?.url || blog?.image?.url || "/placeholder.jpg"; // Use default placeholder if no image

  return (
    <div className="container mx-auto p-4">
      {/* Blog Image */}
      <div className="w-full h-80 flex justify-center items-center mb-4">
        <Image
          src={imageUrl} // Use image URL directly, Next.js will handle external domains
          alt={blog.image?.alternativeText || "Blog Banner"}
          width={800} // Set the width for the image
          height={400} // Set the height for the image
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Blog Header */}
      <div className="flex justify-between mt-4 text-gray-200">
        <span className="text-lg font-semibold">{blog.author}</span>
        <span className="text-lg">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Blog Content */}
      <div className="mt-6 text-white leading-relaxed">
        {blog.content.map((block, index) => (
          <p key={index} className="mb-4">
            {block.children[0]?.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
