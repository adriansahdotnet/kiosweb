import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/ourastore/ProductDetailsArea";
import ProductTitle from "../../components/ourastore/ProductTitle";
import SEO from "../../components/seo";

const ourastore = () => {
  return (
    <>
      <SEO pageTitle={"Oura Store"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default ourastore;
