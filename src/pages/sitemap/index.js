import React from "react";
import BlogDetailsArea from "../../components/Sitemap/SitemapArea";
import BgShape from "../../components/common/BgShape";
import Header from "../../components/Home/Header";
import SEO from "../../components/seo";
import Footer from "../../components/Home/Footer";

const Sitemap = () => {
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

export default Sitemap;
