import type { NextPage } from "next";
import Food from "../components/Food";
import HeadlineCards from "../components/HeadlineCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </>
  );
};

export default Home;
