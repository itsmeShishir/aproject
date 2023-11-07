import React from "react";

const BlogComp = () => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="wow fadeInUp group mb-10"
          data-wow-delay=".2s"
          style={{ visibility: "visible", animationDelay: "0.2s" }}
        >
          <div className="mb-8 overflow-hidden rounded-[5px]">
            <a href="blog-details.html" className="block">
              <img
                src="https://images.unsplash.com/photo-1505222823021-69b49cd2014f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWVsYW5jaW5nJTIwZ3JvaXVwfGVufDB8fDB8fHww"
                alt="image"
                className="w-full transition group-hover:rotate-6 group-hover:scale-125"
              />
            </a>
          </div>
          <div>
            <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center  rounded-[5px] bg-primary">
              Jan 05, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                The no-fuss guide to upselling and cross selling
              </a>
            </h3>
            <p className="max-w-[370px] text-base text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
