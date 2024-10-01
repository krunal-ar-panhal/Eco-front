import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import Policy from "../Components/Policy";
import NewsLetterBox from "../Components/NewsLetterBox";
import Motion from "../Components/Motion";

const Home = () => {
  return (
    <div>
      <Motion>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsLetterBox />
      </Motion>
    </div>
  );
};

export default Home;
