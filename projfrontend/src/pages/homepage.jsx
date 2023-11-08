import React from "react";
import HomePageBlogContainer from "../components/Homepage/blogComponent/blog";
import HomePageMainContainer from "../components/Homepage/maincomponent/main";
import StepComponents from "../components/Homepage/stepscomponent/stepComp";

const Homepage = () => {
  return (
    <>
      <HomePageMainContainer />
      <StepComponents />
      <HomePageBlogContainer />
    </>
  );
};

export default Homepage;
