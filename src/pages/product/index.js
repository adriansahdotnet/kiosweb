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

      <section className="product__area grey-bg-16 pt-40 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper mb-50 text-center">
                <h2 className="section__title">Pilih Tema Website</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {currentProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                >
                  <div
                    className="product__item-2 white-bg mb-30 fix wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className={`product__thumb p-relative text-center fix`}
                    >
                      <img
                        className="product-icon"
                        src={"/" + item?.img}
                        alt=""
                      />
                      <div className="product__thumb-2-shape">
                        <img
                          src="assets/img/product/icon/product-circle.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product__content-2 text-center">
                      <div className="product__icon mb-20">
                        <span>
                          <img
                            src="assets/img/logo/kiosweb.png"
                            width="50"
                            alt=""
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <h3
                        className="product__title-2"
                        onClick={() => handleDetailsProduct(item.id)}
                      >
                        <Link href={item?.link}>
                          <a>{item?.title}</a>
                        </Link>
                      </h3>
                      <p>{item?.sub}</p>

                      <div className="product__btn mt-25">
                        <a
                          style={{ cursor: "pointer" }}
                          href={item?.demo}
                          className="m-btn m-btn-5"
                        >
                          {" "}
                          <span></span> Coba Website{" "}
                        </a>

                        <Link href={item?.link}>
                          <a
                            onClick={() => handleDetailsProduct(item.id)}
                            className="m-btn m-btn-border m-btn-border-6"
                          >
                            <span></span> Deskripsi{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
