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
import Head from "next/head";
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
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your website description for SEO" />
        <meta name="author" content="Your Name or Organization" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags for social media */}
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Description of your website for social sharing"
        />
        <meta property="og:image" content="URL_of_image_for_og" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="Description of your website for Twitter"
        />
        <meta name="twitter:image" content="URL_of_image_for_twitter_card" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Other Links */}
        <link rel="canonical" href="https://yourwebsite.com" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
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
