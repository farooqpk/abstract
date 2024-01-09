import Link from "next/link";
import React from "react";
import { FaXbox } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full min-h-96 bg-black mt-12 text-white flex flex-col md:flex-row justify-between gap-10  p-10 ">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-20 mx-auto md:mx-10 ">
        <div className="flex flex-col gap-3 items-start">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">Abstract</h1>
          </div>
          <div className="font-light">
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">Resources</h1>
          </div>
          <div className="font-light">
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">Community</h1>
          </div>
          <div className="font-light">
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">Company</h1>
          </div>
          <div className="font-light">
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 items-center md:items-start md:justify-end md:mb-6">
        <FaXbox color={"white"} size={25} />
        <h3 className="font-sans md:text-xl">{`© Copyright ${new Date().getFullYear()}`}</h3>
        <h3 className="font-sans md:text-xl">Abstract Studio Design, Inc.</h3>
        <h3 className="font-sans md:text-xl">All rights reserved</h3>
      </section>
    </footer>
  );
};

export default Footer;
