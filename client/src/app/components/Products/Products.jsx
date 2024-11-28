"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "../Shared/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { createCartProducts } from "../../redux/actions/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Products = () => {
  const router = useRouter();
  const ProductsData = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"))?.user;
    setUserData(profile);
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = async (productId) => {
    if (!userData) {
      router.push("/auth");
      return;
    }

    const newProduct = {
      data: {
        productId: productId,
        userId: userData.documentId,
      },
    };

    try {
      dispatch(createCartProducts(newProduct));
      toast.success("Added to Cart Successfully");
      console.log("Added product to cart:", newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const baseUrl = "http://localhost:1337"; // Backend base URL

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Heading title="Our Products" subtitle="Explore Our Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {ProductsData?.map((product) => {
            const imageUrl = product?.image?.[0]?.url
              ? `${baseUrl}${product.image[0].url.startsWith('/') ? product.image[0].url : `/${product.image[0].url}`}`
              : null;

            return (
              <div
                className="border rounded-lg shadow-md p-4 flex flex-col items-center"
                key={product.id}
              >
                <Link href={`/products/${product.documentId}`}>
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={product.name || "Product Image"}
                      width={200}
                      height={200}
                      className="w-[200px] h-48 object-cover rounded-md mb-4"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mb-4">₹ {product.price}</p>
                </Link>
                <button
                  onClick={() => handleAddToCart(product.documentId)}
                  className="bg-[#303030] text-white px-4 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
