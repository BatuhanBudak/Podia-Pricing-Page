import type { NextPage } from "next";
import Header from "../components/Header";
import Intro from "../components/Intro";
import PricingTable from "../components/PricingTable";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <PricingTable />
    </>
  );
};

export default Home;
