import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BgShape from "../../components/common/BgShape";
import Pagination from "../../components/common/Pagination";
import BannerArea from "../../components/Home/BannerArea";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Subscribe from "../../components/Home/Subscribe";
import Products from "../../components/Product/ProductTrending";
import SEO from "../../components/seo";
import ProductPopuler from "../../components/Home/ProductPopuler";
import { addToProduct, specificItem } from "../../redux/features/productSlice";

const Product = () => {
  // all products
  // let products = useSelector(state => state.products.products);
  const [products, setProducts] = useState(
    useSelector((state) => state.products.products)
  );
  const [filterProducts, setFilterProducts] = useState(
    useSelector((state) => state.products.products)
  );
  const [uniqueTag, setUniqueTag] = useState(
    useSelector((state) => state.products.allUniqueTag)
  );
  const [checkbox, setCheckBox] = useState("");
  const [categoryTag, setCategoryTag] = useState("");
  // unique category
  const productsCategory = useSelector(
    (state) => state.products.allUniqueCategory
  );
  // dispaych
  const dispatch = useDispatch();
  // currentpage
  const [currentPage, setCurrentPage] = useState(1);
  // product per page
  const [productPerPage, setProductPerPage] = useState(10);
  // index of last product
  const indexOfLastProduct = currentPage * productPerPage;
  // index of first product
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  // current products
  let currentProducts = filterProducts.slice(
    checkbox ? 0 : indexOfFirstProduct,
    checkbox ? filterProducts.length : indexOfLastProduct
  );
  // paginate
  const paginate = (number) => {
    setCurrentPage(number);
  };
  // handleClick
  const handleClick = (product) => {
    dispatch(addToProduct(product));
  };
  // handleProducDetails
  const handleProducDetails = (id) => {
    dispatch(specificItem(id));
  };
  // handleCategory
  const handleCategory = (category) => {
    setCheckBox(category);
    const newProduct = products.filter(
      (product) => product.category_pop === category
    );
    setFilterProducts(newProduct);
  };
  // handleTag
  const handleTag = (tag) => {
    setCheckBox(tag);
    const newProduct = products.filter((product) => product.tag_pop === tag);
    setFilterProducts(newProduct);
  };

  return (
    <>
      <SEO pageTitle={"Jasa Website"} />
      {/*  Header start  */}
      <Header />
      {/* Header end */}

      {/*  bg shape area start  */}
      <BgShape />
      {/* bg shape area end */}

      {/* Produk Populer */}
      <ProductPopuler />

      <section className="product__area po-rel-z1 pt-40 pb-115 grey-bg">
        <div className="container">
          <div className="row">
            <h3 className="mb-20 fw-bold text-start">TopUp Games</h3>

            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-start col-12">
                  <div className="col-12 d-flex">
                    <div className="row">
                      {/* Mungkin suka 1 */}
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/qgames">
                                <a>
                                  <img
                                    src="assets/img/product/qgames.png"
                                    alt=""
                                  />
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Mungkin suka 2 */}
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/cgames">
                                <a>
                                  <img
                                    src="assets/img/product/cgames.png"
                                    alt=""
                                  />
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mungkin suka 3 */}
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/ourastore">
                                <a>
                                  <img
                                    src="assets/img/product/oura.png"
                                    alt=""
                                  />
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CGames Manual */}
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CGames v2 */}
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/cgames-v2">
                                <a>
                                  <img
                                    src="assets/img/product/cgames-v2.png"
                                    alt=""
                                  />
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mungkin suka 5 */}
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/rgames">
                                <a>
                                  <img
                                    src="assets/img/product/rgames.png"
                                    alt=""
                                  />
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
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row Web Lainnya */}

          <div className="row">
            <h3 className="mb-20 fw-bold text-start mt-40">Website Lainnya</h3>
            <div className="d-flex justify-content-start col-12">
              <div className="col-12 d-flex">
                <div className="row">
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
                          by <a href="#">Kiosweb</a> in{" "}
                          <a href="#">Jasa Website</a>
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
                              <img
                                src="assets/img/product/flash-media.png"
                                alt=""
                              />
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
                          by <a href="#">Kiosweb</a> in{" "}
                          <a href="#">Jasa Website</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta area start */}
      <Subscribe />
      {/* cta area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Product;
