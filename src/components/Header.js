import React from "react";

export default function Header() {
  return (
    <header className="px-20 py-10">
      <div className="container flex justify-between mx-auto">
        <a href="#example" className="font-bold text-primary">
          Logo
        </a>
        <div className="space-x-5">
          <a
            href="#example"
            className="transition border-b-2 border-primary text-black"
          >
            Home
          </a>
          <a
            href="#example"
            className="transition border-b-2 border-transparent hover:border-primary"
          >
            Store
          </a>
          <a href="#example">Cart</a>
        </div>
      </div>
    </header>
  );
}
