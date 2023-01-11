import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { addToProduct } from "../../redux/features/productSlice";
import Accordion from "react-bootstrap/Accordion";

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
                    src="assets/img/product/cgames.png"
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
                          2.000.000
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
                      href="https://cgames.kiosweb.id/"
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
                                  <td>Web TopUp Games - CGames V2</td>
                                  <td>Rp. 2.000.000</td>
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

                {/* Table Sewa */}
                <div className="row justify-content-center">
                  <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <h3 className="mb-20 fw-bold text-start">Paket Sewa :</h3>
                    <Table striped>
                      <tbody>
                        <tr>
                          <td>6 Bulan</td>
                          <td className="text-center">Rp 850.000</td>
                          <td className="text-end">
                            <a
                              href="https://wa.wizard.id/44faf9"
                              className="m-btn m-btn-5 h-10"
                            >
                              Order
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>12 Bulan</td>
                          <td className="text-center">Rp 1.500.000</td>
                          <td className="text-end">
                            <a
                              href="https://wa.wizard.id/349dd1"
                              className="m-btn m-btn-5 h-10"
                            >
                              Order
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>

                {/* Deskripsi */}
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
                          Detail Fitur
                        </button>
                      </li>
                    </ul>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Fitur Utama</Accordion.Header>
                      <Accordion.Body>
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
                            Daftar Otomatis
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Level Admin (Super Admin dan Admin)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Level User (Member, VIP, dan Reseller)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Tersedia Joki Panel
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Menggunakan 2 Payment Gateway
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
                            Validasi ID Games (Support 19 Games)
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Terintegrasi Ke</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            DigiFlazz
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Apigames
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Payment Gateway</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Tripay
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Ipaymu
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Cekmutasi Otomatis (BRI, BCA, BNI, Mandiri, Paypal)
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Fitur Administrator</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Login Admin
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi (Nama Web, Judul, Edit Logo, Keywords,
                            &amp; Deskripsi)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Banner (Data, Tambah, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Pop Up (Data, Tambah, Hapus)
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
                            Konfigurasi Ipaymu
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Cekmutasi.co.id
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola WhatsApp Gateway (Fonnte)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Sosial Media
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Button CS
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
                            Kelola Kategori (Data, Tambah, Edit Urutan, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Produk (Data, Tambah, Import, Kostum
                            Harga,&nbsp;Edit, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Import Produk Menggunakan Format Excel (xmls)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Pesanan (Data, Edit, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Pesanan (Ekspor Data pesanan pelanggan)
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
                            Kelola Pengguna (Data, Tambah, Edit, Hapus, Reset
                            Password)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Ganti Password Admin
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Fitur Member</Accordion.Header>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                  </Accordion>
                  <div className="text-center">
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
      </section>
    </>
  );
};

export default ProductDetailsArea;
