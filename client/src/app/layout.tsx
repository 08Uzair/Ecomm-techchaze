"use client";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers"; // Make sure to import your rootReducer here
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";

// Create Redux store directly in the layout file
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)) // Apply middleware directly
);
const poppins = Poppins({
  subsets: ["latin"], // Specify the subset for the font
  weight: ["400", "500", "700"], // Add the font weights you want to use
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <ThemeProvider>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
