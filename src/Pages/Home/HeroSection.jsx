import React from 'react';


import  CustomBtn from "./../../Components/Button/CustomBtn"


const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold capitalize text-gray-900">Hello there
            <br className="hidden lg:inline-block" /> <span className='text-purple-500'>my name is munna</span><br></br>i'm Website Designer</h1>
          <p className=" leading-relaxed font-normal capitalize text-black">
          Web designers plan, create, and code websites and web pages.<br></br> They may also meet with clients to review
           templates or refine<br></br> designs, and run tests to preview layouts.
          </p>
          <div className="flex justify-center">
            <CustomBtn link="/errorpage">red more</CustomBtn>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-lg" alt="Hero illustration"
            src="https://ik.imagekit.io/appsRhino2/new-website-2022/assets/newImage/hire-react-banner.svg"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
