import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/cgames-manual/ProductDetailsArea";
import ProductTitle from "../../components/cgames-manual/ProductTitle";
import SEO from "../../components/seo";

const cgames_manual = () => {
  return (
    <>
      <SEO pageTitle={"C Games Manual"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default cgames_manual;
