import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const CategoryList = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D")', // Replace with your desired Unsplash image URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="" style={containerStyle}>
      <div className="flex flex-wrap">
        <div className="w-full text-center px-4 mb-8">
          <span class="block  text-lg font-semibold text-red-500">
            See More Category
          </span>
          <h2 className="text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Category Title
          </h2>
        </div>
        <div className="container mx-auto m-8">
          <div className="flex justify-between flex-wrap mr-2 mb-4">
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">
                  Restaurant
                </span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">
                  Real State
                </span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">School</span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">
                  Colleges
                </span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">Cafes</span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">
                  It Companies
                </span>
              </span>
            </Link>
            <Link className="w-1/7 mb-2 mr-2">
              <span className="inline-flex flex-col items-center">
                <i className="fas fa-utensils text-3xl text-blue-500"></i>
                <span className="px-4 py-2 bg-blue-500 text-white">
                  See more
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
