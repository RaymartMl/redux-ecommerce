import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <AiOutlineLoading className="animate-spin text-primary " size="3rem" />
      <p className="text-xl mt-5">Loading Data Please Wait ...</p>
    </div>
  );
}
