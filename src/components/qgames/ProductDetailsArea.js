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
                    src="assets/img/product/qgames.png"
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
                              Login Member
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Login Admin
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Transaksi Tanpa Login (Guest Transaction)
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Transaksi Sebagai Member
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Top Up
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Cara Membeli
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Status Pesanan
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Syarat &amp; Ketentuan
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Pertanyaan Umum
                            </li>
                            <li>
                              <i className="fad fa-check-circle text-primary me-2"></i>
                              Bantuan
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
                                Konfigurasi Umum (Nama Web, Icon Web, Logo Web,
                                Author, Keywords, Deskripsi, Pembayaran Saldo,
                                Lisensi Validasi Games, Chat Id Telegram)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi Konten
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi SMTP
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi Tripay
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Konfigurasi DigiFlazz
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Halaman (Cara Membeli, FAQ, Syarat &amp;
                                Ketentuan, Bantuan)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Games (Data, Tambah, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Produk (Data, Tambah, Detail, Edit,
                                Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Kategori Produk (Data, Tambah, Edit,
                                Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Topup (Data, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Metode Pembayaran (Data, Tambah, Edit,
                                Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Pengguna (Data, Edit, Hapus)
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Kelola Pembelian (Data, Edit, Hapus)
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
                                Top Up
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Cek Validasi ID
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Cek Status Pesanan
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
                                Edit Profile
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Isi Saldo
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Cek Riwayat Pesanan
                              </li>
                              <li>
                                <i className="fad fa-check-circle text-primary me-2"></i>
                                Ganti/Reset&nbsp;Password
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
                          1.250.000
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
                      href="https://demo.kiosweb.id/qgames/"
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
                                  <td>Web TopUp Games - QGames</td>
                                  <td>Rp. 1.250.000</td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="col-12">
                              Silahkan melakukan pembayaran melalui metode yang
                              tersedia dibawah ini sebelum 1x24 jam.
                            </div>
                          </div>
                          <div className="text-center pt-10">
                            <img
                              src="assets/img/method/bri.png"
                              className="img-fluid"
                              width={"70%"}
                              alt="..."
                            ></img>
                            <h5>587201023266532</h5>
                            <p>A/n. Renaldi Adriansah</p>
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
