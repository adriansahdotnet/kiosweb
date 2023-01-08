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
                  <img
                    src="assets/img/product/cgames-manual.png"
                    alt="product-details"
                  />
                </div>
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
                          750.000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product__proprietor-body fix">
                    <span>
                      <a
                        style={{ cursor: "pointer" }}
                        className="m-btn m-btn-2 w-100 mb-20"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {" "}
                        <span></span> Buat Sekarang
                      </a>
                    </span>
                    <a
                      href="https://demo.kiosweb.id/cgames-manual/"
                      rel="noreferrer"
                      target="_blank"
                      className="m-btn m-btn-border w-100"
                    >
                      {" "}
                      <span></span> Lihat Preview
                    </a>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Pembayaran
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row justify-content-between">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">Qty</th>
                                  <th scope="col">Item</th>
                                  <th scope="col">Harga</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Web TopUp & Joki - CGames Manual</td>
                                  <td>Rp. 750.000</td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="col-12">
                              Silahkan melakukan pembayaran melalui metode yang
                              tersedia dibawah ini sebelum 1x24 jam.
                              <hr />
                              semua metode pembayaran atas nama:
                              <br />
                              <b>Renaldi Adriansah</b>
                            </div>
                          </div>
                          <hr></hr>
                          <br></br>
                          <div className="table-responsive">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="text-center tb-metode"
                                    width="30%"
                                  >
                                    <img
                                      src="https://app.enivay.com/assets/img/method/bri.png"
                                      alt=""
                                      className="w-100"
                                    ></img>
                                    <h6 className="mb-0">587201023266532</h6>
                                  </td>
                                  <td
                                    className="text-center tb-metode"
                                    width="30%"
                                  >
                                    <img
                                      src="https://app.enivay.com/assets/img/method/dana.png"
                                      alt=""
                                      className="w-100"
                                    ></img>
                                    <h6 className="mb-0">0858 0067 0494</h6>
                                  </td>
                                  <td
                                    className="text-center tb-metode"
                                    width="30%"
                                  >
                                    <img
                                      src="assets/img/method/jago.png"
                                      alt=""
                                      className="w-100"
                                    ></img>
                                    <h6 className="mb-0">5010 1221 9882</h6>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="text-center pt-10">
                              <p>A/n. Renaldi Adriansah</p>
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="m-btn m-btn-2 w-100 fix"
                          >
                            <a href="https://wa.me/6285293026542">Konfirmasi</a>
                          </button>
                        </div>
                      </div>
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
                          <p>{`Fitur Utama :`}</p>
                          <ul>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Transaksi Tanpa Login
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Direct Ke WhatsApp
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Hitung Otomatis Nomial Pembayaran
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Daftar Harga
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Metode Pembayaran
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Sistem Transaksi Manual
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Sistem Pembayaran Manual
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Kalkulator Win Rate
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Button CS
                            </li>
                          </ul>
                          <div>
                            <br></br>
                            <p>{`Hubungi Admin :`}</p>
                            <ul>
                              <li>
                                <a
                                  href="https://wa.me/6285641249270"
                                  className="m-btn m-btn-2"
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
