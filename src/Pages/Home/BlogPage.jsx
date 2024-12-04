import React from "react";
import CustomBtn from "../../Components/Button/CustomBtn";

const BlogPage = () => {
  return (
    <div className="container mx-auto px- py-20">
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-50 rounded w-full mb-6"
              src="/src/assets/dell.jpg"alt="Box-Image"/>
            <h3 className="text-black hover:text-purple-500 text-lg font-bold title-font capitalize mb-2">Dell Brand</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 capitalize">The best Dell laptops in 2023</h2>
            <p className="leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, harum doloremque. Quasi nisi quisquam tempore nobis veritatis! Blanditiis veritatis incidunt, culpa, commodi, explicabo fugit nemo obcaecati officia nobis impedit inventore.</p>
            <CustomBtn link="/errorpage">see more</CustomBtn>
          </div>
        </div>

        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-50 rounded w-full mb-6"
              src="/src/assets/dell.jpg"alt="Box-Image"/>
            <h3 className=" text-black hover:text-purple-500 text-lg font-bold title-font capitalize mb-2">Hp Brand</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 capitalize">The best Dell laptops in 2023</h2>
            <p className="leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, harum doloremque. Quasi nisi quisquam tempore nobis veritatis! Blanditiis veritatis incidunt, culpa, commodi, explicabo fugit nemo obcaecati officia nobis impedit inventore.</p>
            <CustomBtn link="/errorpage">see more</CustomBtn>
          </div>
        </div>

        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-50 rounded w-full mb-6"
              src="/src/assets/dell.jpg"alt="Box-Image"/>
            <h3 className="text-black hover:text-purple-500 text-lg font-bold title-font capitalize mb-2">Ausus Brand </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 capitalize">The best Dell laptops in 2023</h2>
            <p className="leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, harum doloremque. Quasi nisi quisquam tempore nobis veritatis! Blanditiis veritatis incidunt, culpa, commodi, explicabo fugit nemo obcaecati officia nobis impedit inventore.</p>
            <CustomBtn link="/errorpage">see more</CustomBtn>
          </div>
        </div>

        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-50 rounded w-full mb-6"
              src="/src/assets/dell.jpg"alt="Box-Image"/>
            <h3 className="text-black hover:text-purple-500 text-lg font-bold title-font capitalize mb-2">Lenovo Brand</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 capitalize">The best Dell laptops in 2023</h2>
            <p className="leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, harum doloremque. Quasi nisi quisquam tempore nobis veritatis! Blanditiis veritatis incidunt, culpa, commodi, explicabo fugit nemo obcaecati officia nobis impedit inventore.</p>
            <CustomBtn link="/errorpage">see more</CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
