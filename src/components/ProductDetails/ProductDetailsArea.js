import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../redux/features/productSlice";

const ProductDetailsArea = () => {
  // all products
  const product = useSelector((state) => state.products.specificProduct);
  // dispatch
  const dispatch = useDispatch();
  // handleCartProduct
  const handleCartProduct = () => {
    dispatch(addToProduct(product));
  };
  return (
    <>
      <section className="product__area pb-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="product__wrapper">
                <div className="product__details-thumb w-img mb-30">
                  <img src={product?.img_big} alt="product-details" />
                </div>
                <div className="product__details-sidebar">
                  <div className="product__proprietor white-bg mb-30">
                    <div className="product__proprietor-head mb-25">
                      <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                        <div className="product__proprietor-avater d-flex align-items-center">
                          <div className="product__proprietor-name">
                            <h5>
                              <a href="#">Harga</a>
                            </h5>
                          </div>
                        </div>
                        <div className="product__proprietor-price">
                          <span className="d-flex align-items-start">
                            <span>Rp </span>
                            {product?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product__proprietor-body fix">
                      <span>
                        <a
                          style={{ cursor: "pointer" }}
                          href="https://wa.me/6285293026542"
                          className="m-btn m-btn-2 w-100 mb-20"
                        >
                          {" "}
                          <span></span> Buat Sekarang
                        </a>
                      </span>
                      <a
                        href="https://demokiosweb.blogspot.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="m-btn m-btn-border w-100"
                      >
                        {" "}
                        <span></span> Lihat Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product__details-content">
                  <div className="product__tab mb-40">
                    <ul className="nav nav-tabs" id="proTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="overview-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#overview"
                          type="button"
                          role="tab"
                          aria-controls="overview"
                          aria-selected="true"
                        >
                          Deskripsi
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product__tab-content">
                    <div className="tab-content" id="proTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview-tab"
                      >
                        <div className="product__overview">
                          <h3 className="product__overview-title">
                            Detail Deskripsi
                          </h3>
                          <p>{`Untuk mengetahui info lengkap tentang fitur dan demo dari website ini,
                          silahkan hubungi tim kami dengan klik tombol dibawah ini.`}</p>

                          <div className="d-flex">
                            <ul>
                              <li>
                                <a
                                  href="https://t.me/cs_kiosweb"
                                  className="m-btn m-btn-2"
                                >
                                  Telegram
                                </a>
                                <a
                                  href="https://wa.me/6285293026542"
                                  className="m-btn m-btn-2 ms-2"
                                >
                                  WhatsApp
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsArea;
