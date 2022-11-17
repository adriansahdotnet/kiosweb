import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/Flash/ProductDetailsArea";
import ProductTitle from "../../components/Flash/ProductTitle";
import SEO from "../../components/seo";

const Flash = () => {
  return (
    <>
      <SEO pageTitle={"Flash Media"} />
      <Header />
      <BgShape />
      <ProductTitle />
      <ProductDetailsArea />
      <Footer />
    </>
  );
};

export default Flash;
