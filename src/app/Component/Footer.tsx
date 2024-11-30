import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="h-[684] bg-[#FFFFFF]  ">
      <div className="pt-48  gap-16  p-8">
        <h1 >Subscribe to our newsletter</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
        <div className="flex gap-auto lg:pr-10   justify-end sm:gap-2 lg:gap-2 p-2  bg-white flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 pr-24 ">
          <button className="border-2 border-black p-3">Enter Your name</button>
          
          <button className="border-2 border-black p-3">Subscribe</button>
          
        </div>
      </div>
      {/* <div className="flex justify-between sm:flex-row lg:flex-row flex-col m-auto sm:m-0 lg:m-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "} */}
        <div className="flex justify-end">
          <p className="text-xs pr-32 sm:pr-8 lg:pr-8 pl-8">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      
      <div className="pt-14 flex justify-between gap-6 sm:flex-row lg:flex-row flex-col m-auto sm:m-0 lg:m-0 lg:pl-0 sm:pl-0 pl-36">
        <Image
          src={"/Ddsgnr Library.png"}
          alt="#"
          width={130}
          height={100}
        ></Image>
        <ul className="gap-4">
          <li className="font-bold">courses</li>
          <li>business</li>
          <li>Development</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Programming</li>
        </ul>

        <ul>
          <li className="font-bold">Resources</li>
          <li>career</li>
          <li>Resume</li>
          <li>Learning</li>
          <li>Interview preparation</li>
          <li>jobs</li>
        </ul>

        <ul>
          <li className="font-bold">About us</li>
          <li>Contact</li>
          <li>Help/support</li>
          <li>FAQ</li>
          <li>Terms and Conditions</li>
          <li>Partner</li>
        </ul>
      </div>
        
      <div className="flex justify-between gap-7 pt-28 sm:flex-row lg:flex-row flex-col  m-auto sm:m-0 lg:m-0 pl-8 sm:pl-0 lg:pl-0 ">
        <p>2023 Ddsgnr. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
        <div className=" flex gap-4 justify-end items-end pt-3 ">
        <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
        </div>
      </div>

    </div>
  );
}

export default Footer;
