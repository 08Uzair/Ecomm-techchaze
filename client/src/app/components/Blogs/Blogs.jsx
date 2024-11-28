"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/actions/blogs";
import Link from "next/link";

const Blogs = () => {
  const BlogData = useSelector((state) => state.blogs.data);
  // console.log(BlogData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Blogs</h2>
          <p className="text-gray-500 mt-2">Explore Our Latest Blogs</p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {BlogData?.map((data) => {
            // Correctly fetch the image URL
            const imageUrl = data.image?.url;

            return (
              <div
                key={data.id} // Add the unique key prop here
                className="border rounded-lg shadow-md p-4 flex flex-col items-end"
              >
                {/* Render the image */}
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={data.title || "Blog Image"}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}

                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {data.title}
                </h3>
                <Link href={`/blogs/${data.documentId}`}>
                  <button className="bg-[#303030] text-white px-4 py-2 rounded-md ">
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
