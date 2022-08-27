import type { NextPage } from "next";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import PlanCard from "../components/PlanCard";
import PricingTable from "../components/PricingTable";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <PricingTable />
      <PlanCard />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
