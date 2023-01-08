import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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
                    src="assets/img/product/oura.png"
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
                      href="https://demo.kiosweb.id/ourastore/"
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
                                  <td>Web TopUp Games - Oura Store</td>
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

                {/* Table Sewa */}
                <div className="row justify-content-center">
                  <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <h3 className="mb-20 fw-bold text-start">Paket Sewa :</h3>
                    <Table striped>
                      <tbody>
                        <tr>
                          <td>1 Bulan</td>
                          <td className="text-center">Rp 600.000</td>
                          <td className="text-end">
                            <a
                              href="https://wa.wizard.id/3ec9b6"
                              className="m-btn m-btn-5"
                            >
                              Order
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3 Bulan</td>
                          <td className="text-center">Rp 800.000</td>
                          <td className="text-end">
                            <a
                              href="https://wa.wizard.id/3ec9b6"
                              className="m-btn m-btn-5 h-10"
                            >
                              Order
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>6 Bulan</td>
                          <td className="text-center">Rp 1.000.000</td>
                          <td className="text-end">
                            <a
                              href="https://wa.wizard.id/3ec9b6"
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
                              href="https://wa.wizard.id/3ec9b6"
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
                            Check Validasi ID (Support 19 games)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Daftar harga
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Cari Produk
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Status Pesanan
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Dark / Light Mode
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Pop Up Content
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Petunjuk
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Deposite Saldo (acc manual via tf bank/e-wallet)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Pembayaran via saldo
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Voucher diskon
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Atur keuntungan berdasarkan %
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Seting harga, Harga asli dan harga member ( jadi
                            bisa buat harga member lebih murah)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Notifikasi WhatsApp
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
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            VIP Reseller
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Smile One (PHP Section)
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
                            IPaymu (tersedia)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Xendit (request)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Tripay (request)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Mutasi OVO (otomatis)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Mutasi Gopay (otomatis)
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
                            Konfigurasi Umum (Nama Web, Icon Web, Logo Web,
                            Keywords, Deskripsi, Pembayaran Saldo, Lisensi
                            Validasi Games, Notifikasi WhatsApp)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Konten (Banner, PopUp)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Apigames
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi VIP Reseller
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi DigiFlazz
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Konfigurasi Smile One
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Games (Data, Tambah, Edit, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Produk (Data, Tambah, Detail, Edit, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Voucher Promo
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Topup (Data, Edit, Hapus)
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Kelola Metode Pembayaran (Data, Tambah, Edit, Hapus)
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Fitur Member</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Dashboard Member
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            History Transaksi
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Cek Pesanan
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Cek Validasi Games
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Edit Nama, Username dan Password
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Deposite
                          </li>
                          <li>
                            <i className="fad fa-check-circle text-primary me-2"></i>
                            Pembayaran via saldo
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                  </Accordion>

                  <div className="text-center">
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
