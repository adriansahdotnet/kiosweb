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
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="product__wrapper">
                <div className="product__details-thumb w-img mb-30">
                  <img
                    src="assets/img/product/cgames.png"
                    alt="product-details"
                  />
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
                              Login Admin
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Login Member
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Transaksi Tanpa Login (Guest Transaction)
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Transaksi Member
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Home/Dashboard
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Cek Pesanan
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
                              Validasi ID Games
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Sistem Transaksi Otomatis
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Sistem Pembayaran Otomatis
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Auto Update Status
                            </li>
                          </ul>
                          <div>
                            <br></br>
                            <p>{`Fitur Adrministrator :`}</p>
                            <ul>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Login Admin
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi (Nama Web, Judul, Edit Logo,
                                Keywords, &amp; Deskripsi)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi Banner (Data, Tambah, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi DigiFlazz
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi ApiGames
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi Tripay
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi Sosial Media
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Syarat &amp; Ketentuan
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Admin (Data, Tambah, Edit, Hapus, Reset
                                Password)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Games (Data, Tambah, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Kategori (Data, Tambah, Edit Urutan,
                                Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Produk (Data, Tambah, Kostum
                                Harga,&nbsp;Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Pesanan (Data, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Topup (Data, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Metode (Data, Tambah, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Pengguna (Data, Tambah, Edit, Hapus,
                                Reset Password)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Ganti Password Admin
                              </li>
                            </ul>
                            <br></br>
                            <p>{`Fitur Member :`}</p>
                            <ul>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Login Member
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Top Up Game
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Cek Validasi ID
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Sistem Transaksi Otomatis
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Sistem Pembayaran Otomatis
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Cek Riwayat Pesanan
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Daftar Harga
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                List Metode Pembayaran
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Topup Saldo Otomatis
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Edit Data Akun
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Reset Password
                              </li>
                            </ul>
                          </div>
                          <div>
                            <br></br>
                            <p>{`Hubungi Admin :`}</p>
                            <ul>
                              <li>
                                <a
                                  href="https://t.me/cs_kiosweb"
                                  className="m-btn m-btn-2"
                                >
                                  Telegram
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
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="product__details-sidebar ml-30">
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
                          1.450.000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product__proprietor-body fix">
                    <span>
                      <a
                        style={{ cursor: "pointer" }}
                        href="https://invoice.xendit.co/od/kiosweb"
                        className="m-btn m-btn-2 w-100 mb-20"
                      >
                        {" "}
                        <span></span> Buat Sekarang
                      </a>
                    </span>
                    <a
                      href="https://demo.kiosweb.id/cgames/"
                      rel="noreferrer"
                      target="_blank"
                      className="m-btn m-btn-border w-100"
                    >
                      {" "}
                      <span></span> Lihat Preview
                    </a>
                  </div>
                </div>
                <div
                  className="sidebar__banner"
                  style={{
                    background: `url(assets/img/banner/sidebar-banner.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h4 className="sidebar__banner-title">
                    Check Out <br />
                    Our free Templates
                  </h4>
                  <Link href="/product">
                    <a className="m-btn m-btn-white">
                      {" "}
                      <span></span> free template
                    </a>
                  </Link>
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