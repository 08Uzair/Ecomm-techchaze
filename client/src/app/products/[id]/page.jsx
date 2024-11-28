"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "../../globals.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "@/app/redux/actions/products";
import { createCartProducts } from "@/app/redux/actions/cart";

const SingleProductPage = () => {
  const { id } = useParams(); // Extract the `id` from the URL
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null); // State for selected color

  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state?.products?.[0]?.data);
// console.log(singleProduct)
  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"))?.user;
    setUserData(profile);
  }, []);
  const handleAddToCart = async (productId) => {
    if (!userData) {
      // toast.error("User not found");
      router.push("/auth");
      return;
    }

    const newProduct = {
      data: {
        productId: productId,
        userId: userData.documentId,
      },
    };
    // console.log(newProduct);

    try {
      dispatch(createCartProducts(newProduct));
      toast.success("Added to Cart Sucessfully");
      console.log("Added product to cart:", newProduct); // Debugging log
    } catch (error) {
      console.log(error);
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.28 4.151a1 1 0 00.95.69h4.387a1 1 0 01.593 1.807l-3.542 2.646a1 1 0 00-.364 1.118l1.28 4.151a1 1 0 01-1.451 1.118l-3.542-2.646a1 1 0 00-1.176 0l-3.542 2.646a1 1 0 01-1.451-1.118l1.28-4.151a1 1 0 00-.364-1.118L2.05 9.575a1 1 0 01.593-1.807h4.387a1 1 0 00.95-.69l1.28-4.151z" />
          </svg>
        );
      } else if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.28 4.151a1 1 0 00.95.69h4.387a1 1 0 01.593 1.807l-3.542 2.646a1 1 0 00-.364 1.118l1.28 4.151a1 1 0 01-1.451 1.118l-3.542-2.646a1 1 0 00-1.176 0l-3.542 2.646a1 1 0 01-1.451-1.118l1.28-4.151a1 1 0 00-.364-1.118L2.05 9.575a1 1 0 01.593-1.807h4.387a1 1 0 00.95-.69l1.28-4.151z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.28 4.151a1 1 0 00.95.69h4.387a1 1 0 01.593 1.807l-3.542 2.646a1 1 0 00-.364 1.118l1.28 4.151a1 1 0 01-1.451 1.118l-3.542-2.646a1 1 0 00-1.176 0l-3.542 2.646a1 1 0 01-1.451-1.118l1.28-4.151a1 1 0 00-.364-1.118L2.05 9.575a1 1 0 01.593-1.807h4.387a1 1 0 00.95-.69l1.28-4.151z" />
          </svg>
        );
      }
    }
    return stars;
  };

  // Handling images
  const images = singleProduct?.image?.map(
    (img) => img?.url || `path/to/default.jpg`
  );

  // Handling colors
  const colors = singleProduct?.color ? [singleProduct.color] : [];

  return (
    <div className="min-h-screen w-full bg-[#333] shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image Gallery */}
      <div className="w-full  flex flex-col items-center p-4">
        <div className=" flex justify-center items-center mb-4">
          <img
            src={images?.[selectedImage]}
            alt="Selected"
            className=" object-contain rounded-lg"
          />
        </div>
        <div className="flex space-x-2">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 border-2 ${
                selectedImage === index ? "border-blue-500" : "border-gray-300"
              } rounded-lg overflow-hidden`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-2xl font-bold mb-2">{singleProduct?.name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          {renderStars(singleProduct?.rank || 0)}
          <span className="text-gray-400 text-sm">
            ({singleProduct?.rank?.toFixed(1) || "0.0"})
          </span>
        </div>
        <p className="text-lg text-[#fff] mb-4">${singleProduct?.price}</p>
        <p className="text-[#fff] mb-6">{singleProduct?.description}</p>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Select Color:</h3>
          <div className="flex space-x-4">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => handleAddToCart(singleProduct.documentId)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
