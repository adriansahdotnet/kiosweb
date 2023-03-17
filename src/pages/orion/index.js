import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/orion/ProductDetailsArea";
import ProductTitle from "../../components/orion/ProductTitle";
import SEO from "../../components/seo";

const orion = () => {
  return (
    <>
      <SEO pageTitle={"Orion Games"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default orion;
