import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import UsersArea from "../../components/User/UserArea";
import SEO from "../../components/seo";



const User = () => {
  return (
    <>
      <SEO pageTitle={"Dasboard"} />
      <Header />
      <BgShape />
      <UsersArea />
    </>
  );
};

export default User;
