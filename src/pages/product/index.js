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
      (product) => product.category === category
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

      <section className="product__area po-rel-z1 pb-115">
        <div className="container">
          <div className="row">
            <h3 className="mb-20 fw-bold text-start">Semua Produk</h3>

            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-start col-12">
                  <div className="col-12 d-flex">
                    <div className="row">
                      {currentProducts.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                          >
                            <div
                              className="product__item white-bg mb-30 wow fadeInUp"
                              data-wow-delay=".3s"
                            >
                              <div className="product__thumb">
                                <div className="product__thumb-inner fix w-img">
                                  <Link href={item?.link}>
                                    <a>
                                      <img src={item?.img} alt="" />
                                    </a>
                                  </Link>
                                </div>
                                <div className="product__thumb-btn transition-3">
                                  <a
                                    style={{ cursor: "pointer" }}
                                    href={item?.link}
                                    className="m-btn m-btn-6 mb-15"
                                  >
                                    Detail Fitur
                                  </a>

                                  <a
                                    rel="noreferrer"
                                    href={item?.demo}
                                    target="_blank"
                                    className="m-btn m-btn-7"
                                  >
                                    Lihat Preview
                                  </a>
                                </div>
                              </div>
                              <div className="product__content">
                                <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                  <div className="product__tag">
                                    <a href="#">{item?.category}</a>
                                  </div>
                                  <div className="product__price">
                                    <span>Rp {item?.price}</span>
                                  </div>
                                </div>
                                <h3
                                  onClick={() => handleProducDetails(item.id)}
                                  className="product__title"
                                >
                                  <Link href={item?.link}>
                                    <a>{item?.title}</a>
                                  </Link>
                                </h3>
                                <p className="product__author">
                                  by <a href="#">kiosweb</a> in{" "}
                                  <a href="#">Jasa Web</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
