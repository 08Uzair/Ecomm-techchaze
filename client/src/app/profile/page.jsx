"use client";

import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 space-y-8">
        {/* Account Details */}
        <section className="flex items-center bg-gray-800 p-6 rounded-lg">
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold">Account Details</h2>
            <p className="text-gray-400">Name & Details here</p>
          </div>
        </section>

        {/* Order Data */}
        <section className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Data</h2>
          <p className="text-gray-400">Order information goes here</p>
        </section>

        {/* Relative Products */}
        <section className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Relative Products</h2>
          <p className="text-gray-400">Suggestions for products go here</p>
        </section>
      </main>

    </div>
  );
};

export default ProfilePage;
