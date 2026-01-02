import Logo from "@/component/helper/logo";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";

const FooterPage = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid itmes-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours feturesin Services ew Guests LisitThe
            Team List Guests Lisit The Team List
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
                cursor-pointer hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
                cursor-pointer hover:bg-red-600 transition-all duration-300"
            >
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
                cursor-pointer hover:bg-pink-600 transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8">
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                Old City Street, USA <br /> 1212 New York, 3500
              </p>
            </div>            
            <div className="flex mb-5 mt-5 items-center space-x-5">
              <FaPhone className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                555-555-5555
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <IoMailOpen className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                contact@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mx-auto">
            <h1 className="text-lg font-bold text-white">More Services</h1>
            <div className="mt-8">
                <div className="flex items-center mb-3">
                    <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white"/>
                    <p className="font-medium text-sm text-white">UI Design</p>
                </div>
                <div className="flex items-center mb-3">
                    <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white"/>
                    <p className="font-medium text-sm text-white">UX Design</p>
                </div>
                <div className="flex items-center mb-3">
                    <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white"/>
                    <p className="font-medium text-sm text-white">Web Apps</p>
                </div>
                <div className="flex items-center mb-3">
                    <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white"/>
                    <p className="font-medium text-sm text-white">Digital Marketing</p>
                </div>
                <div className="flex items-center mb-3">
                    <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white"/>
                    <p className="font-medium text-sm text-white">Video Editing</p>
                </div>
            </div>
        </div>
        <div className="mx-auto">
            <h1 className="text-lg font-bold text-white">Newsletter</h1>
            <div className="mt-8">
                <p className="font-medium text-sm text-white">It is a long established fact that a reader will be distracted</p>
                <div className="mt-5 flex items-cneter space-x-4">
                    <Image
                        src='/images/f.jpg'
                        alt="footer image"
                        width={80}
                        height={25}
                    />
                    <div className="flex-1">
                        <div className="flex items-center">
                            <BiCalendar className="w-6 h-6 text-amber-300 mr-2"/>
                            <p className="text-white font-semibold text-sm">
                                October 25, 2025
                            </p>
                        </div>
                        <p className="mt-2 text-white font-bold">
                            The standard chunk of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>            
        </div>
      </div>
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">© Webdev Warriors 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterPage;
