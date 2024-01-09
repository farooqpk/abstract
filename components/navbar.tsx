"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaXbox } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isClickHumbergur, setIsClickHumbergur] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);

  return (
    <div
      className={` top-0 w-full ${
        isClickSearch ? "bg-white" : "bg-black"
      } md:bg-black shadow-md`}
    >
      {!isClickSearch ? (
        <div className="flex item-center justify-between transition p-5">
          <div className="flex justify-center gap-2 items-center md:ml-10">
            <div className="cursor-pointer hover:opacity-75 flex items-center gap-2">
              <FaXbox color={"white"} size={25} />
              <h3 className="text-white font-medium text-xl ">Abstract</h3>
            </div>
            <div className="w-0.5 h-6 bg-white font-semibold"></div>
            <h3 className="text-white font-medium text-xl hover:underline ">
              Help Center
            </h3>
          </div>

          <div className="flex justify-center items-center gap-3 md:hidden">
            <span
              className="cursor-pointer"
              onClick={() => setIsClickSearch(true)}
            >
              <FaSearch color={"white"} size={22} />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsClickHumbergur((prev) => !prev)}
            >
              {isClickHumbergur ? (
                <IoClose color={"white"} size={33} />
              ) : (
                <IoIosMenu color={"white"} size={33} />
              )}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 mr-10 ">
            <Button
              className=" text-white text-lg"
              variant={"outline"}
              size={"lg"}
            >
              Submit a request
            </Button>
            <Button
              className=" text-white bg-bluish hover:bg-white hover:text-black text-lg"
              size={"lg"}
            >
              Sign In
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 w-full h-full transition p-5">
          <div className="w-[90%]">
            <Input placeholder="Search" type="search" className="py-2" />
          </div>
          <div
            onClick={() => setIsClickSearch(false)}
            className="w-[10%] cursor-pointer hover:scale-90 transition text-xl"
          >
            <IoClose size={25} />
          </div>
        </div>
      )}

      {isClickHumbergur && (
        <div className="bg-black w-full h-40 border-t-[1px] border-white border-opacity-35 flex flex-col items-center justify-center gap-3 md:hidden">
          <h1 className="text-white text-xl font-semibold cursor-pointer transition hover:opacity-35">
            Submit a request
          </h1>
          <div className="w-[50%] h-[0.8px] opacity-35 bg-white font-semibold"></div>
          <h1 className="text-white text-xl font-semibold cursor-pointer transition hover:opacity-35">
            Sign in
          </h1>
        </div>
      )}
    </div>
  );
}

export default Navbar;
