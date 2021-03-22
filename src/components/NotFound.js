import React from "react";
import { Link } from "react-router-dom";

export default function NotFound({ title }) {
  return (
    <div className="text-center py-20">
      <h1 className="text-black text-6xl mb-12">{title || "Page Not Found"}</h1>
      <p className="tracking-wider">
        Looks like you're are lost. Maybe you want to{" "}
        <Link to="/store" className="border-b-2 border-primary">
          shop?
        </Link>
      </p>
    </div>
  );
}
