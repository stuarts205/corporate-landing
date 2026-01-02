import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  icon: string;
}

const ServiceCard = ({ image, icon }: ServiceCardProps) => {
  return (
    <div className="rounded-lg group overflow-hidden bg-white">
      <Image src={image} alt="Service Image" width={300} height={179} />
      <div className="p-4">
        <div
          className="w-22 h-22 -mt-14 relative group-hover:bg-black transition-all duration-200 z-10 
            ml-auto rounded-lg flex items-center justify-center flex-col bg-[#b69974]"
        >
          <Image src={icon} alt="Service Icon" width={60} height={60} />
        </div>
        <div className="w-16 mt-6 h-px bg-gray-700"></div>
        <h1 className="text-gray-700 mt-2 text-sm">Our Services</h1>
        <p className='text-gray-800 mg-4 mt-3 font-semibold'>Work From Home</p>
      </div>
    </div>
  );
};

export default ServiceCard;
