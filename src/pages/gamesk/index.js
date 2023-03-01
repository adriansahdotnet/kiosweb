import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/cgames-v2/ProductDetailsArea";
import ProductTitle from "../../components/cgames-v2/ProductTitle";
import SEO from "../../components/seo";

const gamesk = () => {
  return (
    <>
      <SEO pageTitle={"Games K'"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default gamesk;
