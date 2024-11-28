"use client";
import React, { useEffect } from "react";
import Button from "../Shared/Button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/category";

const Category = () => {
  const categoryData = useSelector((state) => state.category.data);
  // console.log(categoryData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {/* First column for each category */}
          {categoryData?.map((item) => {
            return (
              <div
                key={item.id} // Add a unique key to avoid React warnings
                className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end m-4"
              >
                <div>
                  <div className="mb-4">
                    <p className="mb-[2px] text-gray-400">Enjoy</p>
                    <p className="text-2xl font-semibold mb-[2px]">With</p>
                    <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">
                      {item.categoryName}
                    </p>
                    <Button
                      text="Browse"
                      bgColor='bg-[#0a0a0a]'
                      textColor={"text-white"}
                    />
                  </div>
                </div>
                {/* Image component */}
                {item.image?.url && (
                  <Image
                    src={item.image.url} // Use the URL from the API response
                    alt={item.image.alternativeText || "Category Image"}
                    width={100}
                    height={100}
                    className="absolute right-4 lg:top-[40px]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
