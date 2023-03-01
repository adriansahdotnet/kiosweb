import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/gamesk/ProductDetailsArea";
import ProductTitle from "../../components/gamesk/ProductTitle";
import SEO from "../../components/seo";

const gamesk = () => {
  return (
    <>
      <SEO pageTitle={"Games K"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default gamesk;
