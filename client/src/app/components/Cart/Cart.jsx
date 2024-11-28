"use client";
import { deleteCartProduct, getCartProducts } from "@/app/redux/actions/cart";
import { allProducts } from "@/app/redux/actions/products";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Cart = () => {
  const [productData, setProductData] = useState([]); // State to hold product data
  const dispatch = useDispatch();

  // Fetch products and update state
  const fetchProducts = async () => {
    try {
      const cartProducts = await allProducts();
      setProductData(
        cartProducts.map((product) => ({
          ...product,
          quantity: 1, // Initialize quantity to 1
        }))
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    dispatch(getCartProducts());
    window.scroll(0, 0);
  }, [dispatch]);

  // Function to increase product quantity
  const increaseQuantity = (id) => {
    setProductData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrease product quantity
  const decreaseQuantity = (id) => {
    setProductData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove a product from the cart
  const removeProduct = (id) => {
    dispatch(deleteCartProduct(id));
    alert("Remove from Cart Successfully")
    dispatch(fetchProducts());
  };

  // Calculate totals
  const calculateTotals = () => {
    const totalQuantity = productData.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const subTotal = productData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const gst = subTotal * 0.18; // 18% GST
    const total = subTotal + gst;

    return { totalQuantity, subTotal, gst, total };
  };

  const { totalQuantity, subTotal, gst, total } = calculateTotals();

  return (
    <>
    <Navbar/>
  <div className="text-white p-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product List */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {productData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-[#fff]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg m-4"
                />
                <div>
                  <h3 className="font-semibold text-lg line-clamp-1 pr-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-400">₹{item.price} each</p>
                  <p className="text-gray-400">Stock: {item.stock}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold ml-4">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-600 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 border-2 border-[#fff]">
            <div className="flex justify-between">
              <p>Total Quantity:</p>
              <p>{totalQuantity}</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>₹{subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>GST (18%):</p>
              <p>₹{gst.toFixed(2)}</p>
            </div>
            <hr className="border-gray-700" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-white px-3 py-1 rounded-lg bg-slate-800 mt-4 text-center cursor-pointer hover:bg-green-500">
            CheckOut
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default Cart;
