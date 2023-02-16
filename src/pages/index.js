import Head from "next/head";
import BannerArea from "../components/Home/BannerArea";
import BrandArea from "../components/Home/BrandArea";
import CategoryArea from "../components/Home/CategoryArea";
import Cta from "../components/Home/Cta";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import HeroArea from "../components/Home/HeroArea";
import Products from "../components/Home/Products";
import Subscribe from "../components/Home/Subscribe";
import Testimonial from "../components/Home/Testimonial";
import SEO from "../components/seo";
import Keuntungan from "../components/Home/Keuntungan";

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Jasa Pembuatan Website TopUp Games N0. #1 Indonesia."} />
      <Header />
      <HeroArea />
      <CategoryArea />
      <Subscribe />
      <Keuntungan />
      <Footer />
      <script
        src="//code.tidio.co/wjukaw0fpccxkwgsmadrbzcrartqkal4.js"
        async
      ></script>
    </>
  );
}
