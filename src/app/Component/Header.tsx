import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#F7F7F7]">
      <div className=" h-8 p-2 flex  justify-between  pl-6 ">
        <p className="">Phone Number: 956 742 455 678|Email:info@ddsgnr.com</p>
        <h1 className="flex gap-3">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-twitter"></i>
        </h1>
      </div>
      <div className="bg-white h-4"></div>
      <div className="bg-[#F7F7F7]   sm:h-17  h-auto md:h-16 lg:h-16 p-4 flex justify-between flex-col  sm:flex-row w-full sm:w-auto  mb-4 sm:mb-0">
        <Image
          src={"/Ddsgnr Library.png"}
          alt="#"
          width={130}
          height={44}
        ></Image>

        <ul className=" flex justify-between gap-auto sm:gap-20 p-2  bg-white flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 ">
          <Link href="">Home</Link>
          <Link href="">Courses</Link>
          <Link href="">Service</Link>
          <Link href="">Acheivment</Link>
          <Link href="">About us</Link>
          <Link href="">Testimonial</Link>
          <button className="border-2 border-black  text-xs ">Login</button>
          <button className="bg-black text-white">signup</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
