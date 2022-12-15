import Link from "next/link";
import React from "react";

const HeroArea = () => {
  return (
    <>
      <section className="hero__area hero__height grey-bg-3 d-flex align-items-center">
        <div className="hero__shape">
          <img
            className="circle"
            src="assets/img/icon/hero/hero-circle.png"
            alt="circle"
          />
          <img
            className="circle-2"
            src="assets/img/icon/hero/hero-circle-2.png"
            alt="circle"
          />
          <img
            className="square"
            src="assets/img/icon/hero/hero-square.png"
            alt="circle"
          />
          <img
            className="square-2"
            src="assets/img/icon/hero/hero-square-2.png"
            alt="circle"
          />
          <img
            className="dot"
            src="assets/img/icon/hero/hero-dot.png"
            alt="circle"
          />
          <img
            className="triangle"
            src="assets/img/icon/hero/hero-triangle.png"
            alt="circle"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8 d-flex">
              <div className="hero__content">
                <h2 className="hero__title">
                  Kiosweb.id <br />
                  <span>Jasa pembuatan website No #1.</span>
                </h2>
                <p>{`Tingkatkan peluang bisnismu dengan Kiosweb.id`}</p>
                <Link href={"/product"}>
                  <a className="m-btn m-btn-2 ml-5 mb-3">Lihat Tampilan</a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__thumb-wrapper scene ml-70 p-relative">
                <div className="hero__thumb one d-none d-lg-block">
                  <img
                    className="layer"
                    data-depth="0.2"
                    src="assets/img/hero/hero-4.png"
                    alt=""
                  />
                </div>
                <div className="hero__thumb two d-none d-md-block">
                  <img
                    className="layer"
                    data-depth="0.3"
                    src="assets/img/hero/hero-5.jpg"
                    alt=""
                  />
                </div>
                <div className="hero__thumb three d-none d-md-block">
                  <img
                    className="layer"
                    data-depth="0.4"
                    src="assets/img/hero/hero-6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
