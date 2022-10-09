import React from "react";
import BlogDetailsArea from "../../components/Terms/TermsArea";
import BgShape from "../../components/common/BgShape";
import Header from "../../components/Home/Header";
import SEO from "../../components/seo";
import Footer from "../../components/Home/Footer";

const Terms = () => {
  return (
    <>
      <SEO pageTitle={"Syarat & Ketentuan"} />
      <Header />
      <BgShape />
      <BlogDetailsArea />
      <Footer />
    </>
  );
};

export default Terms;
