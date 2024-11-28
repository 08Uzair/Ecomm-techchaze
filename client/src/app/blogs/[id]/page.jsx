"use client";
import { getBlogByID } from "@/app/redux/actions/blogs";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state?.blogs?.[0]?.data);
  console.log(blog);

  useEffect(() => {
    dispatch(getBlogByID(id));
  }, [dispatch, id]);

  // Define the base URL
  const BASE_URL = "https://localhost:1337"; // Replace with your Strapi server URL

  // Handling images
  const imageUrl = blog?.image?.formats?.thumbnail?.url // Use the thumbnail format if it exists
    ? `${BASE_URL}${blog.image.formats.thumbnail.url}`
    : blog?.image?.url
    ? `${BASE_URL}${blog.image.url}`
    : "/placeholder.jpg"; // Fallback placeholder image

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Blog Image */}
      <div className="w-full h-80 flex justify-center items-center mb-4">
        <img
          src={imageUrl}
          alt={blog.image?.alternativeText || "Blog Banner"}
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
