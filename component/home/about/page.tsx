import React from "react";
import Image from "next/image";
import AboutProgress from "./about-progess";

const AboutPage = () => {
  return (
    <div className="pt-16 p-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="relative flex justify-center items-center"
        >
          <Image
            src={"/images/a3.png"}
            alt="About Image"
            width={600}
            height={600}
            className="animate-spin [animation-duration:20s] w-[320px] md:w-[420px] lg:w-[520px]"
          />
          <Image
            src={"/images/a4.png"}
            alt="About Image"
            width={350}
            height={350}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              rounded-lg
              w-[65%] md:w-[70%] lg:w-[55%]
              h-auto"
          />
        </div>
        <div className="">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
            className="text-blue-700 text-lg font-medium tracking-widest"
          >
            About Us
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="text-3xl md:text-5xl font-bold mt-4"
          >
            Innovative solutions for digital success
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="450"
            className="ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose"
          >
            Payment solutions enable businesses to accept payments from
            customers conveniently securely from customers conveniently and
            securely.
          </p>
          <AboutProgress />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
