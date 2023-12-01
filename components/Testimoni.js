import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Anuj Bhuyar",
      image: "/assets/anuj-bhuyar.jpeg",
      city: "Mumbai",
      country: "Maharashtra",
      rating: "4.5",
      testimoni:
        "AI Resume Ranker is a career secret weapon! With instant assessments and AI-powered scoring, it pinpointed areas for improvement in my resume. A ₹100 boost turned my application into a standout success!",
    },
    {
      name: "Ashlesha Shivgan",
      image: "/assets/ashlesha-shivgan.jpeg",
      city: "Beed",
      country: "Maharashtra",
      rating: "3.7",
      testimoni:
        "Expert Resume Review elevated my resume game! Personalized feedback and tailored advice turned my career documents into a powerhouse. Well worth the ₹250 investment",
    },
    {
      name: "Abhishek Pawar",
      image: "/assets/abhishek-pawar.jpeg",
      city: "Pune",
      country: "Maharashtra",
      rating: "4.1",
      testimoni:
        "@ HireSync is the way to create fast and great resumes. I had to send my resume now, but my latest was not ready. Headed over to them, Then it was bliss",
    },
    {
      name: "Neeraj Belsare",
      image: "/assets/neeraj-belsare.jpeg",
      city: "Bhopal",
      country: "Madhya Pradesh",
      rating: "3.5",
      testimoni:
        "HireSync is one of those products which can't stop suggesting to everyone to use. Really Really handy to use and have a good sense of design as well. You are doing great work. Love to see the team growing :D",
    },
    {
      name: "Prasad Lokhande",
      image: "/assets/prasad-lokhande.jpeg",
      city: "Amravati",
      country: "Maharashtra",
      rating: "4.8",
      testimoni:
        "Hardwork is appreciated. I did checkout v1 and now v2 is definitely an improvement. The Ul is very impressive. I want you and the team to deliver highest level of sophistication. Cheers",
    },
    {
      name: "Yash Bhuyar",
      image: "/assets/mrinal-gupta.jpeg",
      city: "Jalgaon",
      country: "Maharashtra",
      rating: "4.1",
      testimoni:
        "Opting for Expert Resume Review was a game-changer. The expert feedback and optimization for tech careers set me on a path for success. Best ₹250 spent for a standout professional journey!",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
  {...settings}
  arrows={false}
  ref={setSliderRef}
  className="flex items-stretch justify-items-stretch"
>
  {listTestimoni.map((listTestimonis, index) => (
    <div className="px-3 flex items-stretch" key={index}>
      <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
          <div className="flex order-2 xl:order-1">
            <Image
              src={listTestimonis.image}
              height={50}
              width={50}
              alt="Icon People"
              className="rounded-full" // Add this line
            />
            <div className="flex flex-col ml-5 text-left">
              <p className="text-lg text-black-600 capitalize">
                {listTestimonis.name}
              </p>
              <p className="text-sm text-black-500 capitalize">
                {listTestimonis.city}, {listTestimonis.country}
              </p>
            </div>
          </div>
          <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
            <p className="text-sm">{listTestimonis.rating}</p>
            <span className="flex ml-4">
              <Stars className="h-4 w-4" />
            </span>
          </div>
        </div>
        <p className="mt-5 text-left">{listTestimonis.testimoni}</p>
      </div>
    </div>
  ))}
</Slider>

      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
