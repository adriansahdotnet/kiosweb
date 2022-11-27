import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const ProductsPopuler = [
  {
    id: "1",
    img: "assets/img/product/qgames.png",
    title: "Web Topup Games - QGames",
    title_pop: "Web Topup Games - QGames",
    category: "Web Topup Games",
    price: "1.250.000",
  },
  {
    id: "2",
    img: "assets/img/product/cgames.png",
    title: "Web Topup Games - CGames",
    title_pop: "Web Topup Games - CGames",
    category: "Web Topup Games",
    price: "1.485.000",
  },
  {
    id: "3",
    img: "assets/img/product/oura.png",
    title: "Web TopUp Games - Oura Store",
    category: "Web Topup Games",
    price: "2.000.000",
  },
];

// slick setting
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <section className="product__area pt-105 pb-110 grey-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  Tampilan Website Terbaik <br />
                  Untuk Bisnis Anda
                </h2>
                <p>Beberapa produk terbaik kami</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* QGames */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/qgames">
                      <a>
                        <img src="assets/img/product/qgames.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/qgames"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/qgames"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 1.250.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/qgames">
                      <a>Web TopUp Games - QGames</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>
            {/* CGames */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/cgames">
                      <a>
                        <img src="assets/img/product/cgames.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/cgames"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/cgames"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 1.485.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/cgames">
                      <a>Web TopUp Games - CGames</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Oura Store */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/ourastore">
                      <a>
                        <img src="assets/img/product/oura.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/ourastore"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/ourastore"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 2.000.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/ourastore">
                      <a>Web TopUp Games - Oura Store</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* CGames Manual*/}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/cgames-manual">
                      <a>
                        <img
                          src="assets/img/product/cgames-manual.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/cgames-manual"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/cgames-manual"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 550.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/cgames-manual">
                      <a>Web TopUp Games - CGames Manual</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* CGames V2 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/cgames-v2">
                      <a>
                        <img src="assets/img/product/cgames-v2.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/cgames-v2"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/cgames"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 1.750.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/cgames-v2">
                      <a>Web TopUp Games - CGames-v2</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* RGames */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/rgames">
                      <a>
                        <img src="assets/img/product/rgames.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/product-details"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/rgames"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web TopUp Games</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 550.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/product-details">
                      <a>Web TopUp Games - RGames (Manual)</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* SMM Panel */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/smm">
                      <a>
                        <img src="assets/img/product/smm.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://wa.me/6285293026542"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://wa.me/6285293026542"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web SMM Panel</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 950.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/product-details">
                      <a>Web SMM Panel - Purple Panel</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Flash Media */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="product__item white-bg mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">
                    <Link href="/flash-media">
                      <a>
                        <img src="assets/img/product/flash-media.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="product__thumb-btn transition-3">
                    <a
                      href="https://kiosweb.id/flash-media"
                      className="m-btn m-btn-6"
                      style={{ cursor: "pointer" }}
                    >
                      Detail Fitur
                    </a>
                    <a
                      href="https://demo.kiosweb.id/flash-media"
                      className="m-btn m-btn-7 mt-2"
                    >
                      Lihat Preview
                    </a>
                  </div>
                  <div className="product__thumb-btn transition-3"></div>
                </div>
                <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                    <div className="product__tag">
                      <a href="#">Web Berita</a>
                    </div>
                    <div className="product__price">
                      <span>Rp 550.000</span>
                    </div>
                  </div>
                  <h3 className="product__title">
                    <Link href="/flash-media">
                      <a>Web Berita - Flash Media</a>
                    </Link>
                  </h3>
                  <p className="product__author">
                    by <a href="#">Kiosweb</a> in <a href="#">Jasa Website</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="product__more text-center mt-30">
                <Link href="/product">
                  <a className="m-btn m-btn-2">
                    {" "}
                    <span></span> Lihat Lebih Banyak
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
