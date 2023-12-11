import React from "react";
import HomePageBlogContainer from "../components/Homepage/blogComponent/blog";
import HomePageMainContainer from "../components/Homepage/maincomponent/main";
import StepComponents from "../components/Homepage/stepscomponent/stepComp";
import CategoryList from "../components/Homepage/catcomponent/categorycomp";

const Homepage = () => {
  return (
    <>
      <HomePageMainContainer />
      <CategoryList />
      <StepComponents />
      <HomePageBlogContainer />
    </>
  );
};

export default Homepage;
