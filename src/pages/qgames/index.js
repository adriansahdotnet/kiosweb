import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/qgames/ProductDetailsArea";
import ProductTitle from "../../components/qgames/ProductTitle";
import SEO from "../../components/seo";

const qgames = () => {
  return (
    <>
      <SEO pageTitle={"Q Games"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default qgames;
