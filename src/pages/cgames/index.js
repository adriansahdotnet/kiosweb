import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/cgames/ProductDetailsArea";
import ProductTitle from "../../components/cgames/ProductTitle";
import SEO from "../../components/seo";

const cgames = () => {
  return (
    <>
      <SEO pageTitle={"C Games"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default cgames;
