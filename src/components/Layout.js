import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-black bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
