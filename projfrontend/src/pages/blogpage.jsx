import React from "react";
import BlogComp from "../components/Homepage/blogComponent/blogcomp";

const BlogPage = () => {
  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Our Recent News
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <BlogComp />
            <BlogComp />
            <BlogComp />
            <BlogComp />
            <BlogComp />
            <BlogComp />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
