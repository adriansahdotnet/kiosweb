import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificBlog } from "../../redux/features/blogSlice";
import BlogSideBar from "../Blog/BlogSideBar";

const TermsArea = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogItem = useSelector((state) => state.blogs.specificItem);
  //  dispatch
  const dispatch = useDispatch();
  return (
    <>
      <section className="page__title-area  pt-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-content mb-50">
                <div className="postbox__meta d-flex">
                  <div className="postbox__tag-2">
                    {/* <a href="#">Digital,</a>
                              <a href="#">Marketing. </a> */}
                    <a href="#">Terms</a>
                  </div>
                  <div className="postbox__time">
                    <span>10 min read</span>
                  </div>
                </div>
                <h2 className="page__title">Syarat & Ketentuan</h2>
                <div className="postbox__author-2 mt-20">
                  <ul className="d-flex align-items-center">
                    <li>
                      <h6>
                        <a href="home">Kiosweb.id</a>
                      </h6>
                      <span>
                        <a href="product">Lihat Produk</a>
                      </span>
                    </li>
                    <li>
                      <h6>{blogItem.date}</h6>
                      <span>Dirilis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact__area">
        <div className="contact__shape">
          <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="" />
          <img
            className="circle"
            src="assets/img/icon/sign/circle.png"
            alt=""
          />
          <img
            className="zigzag"
            src="assets/img/icon/sign/zigzag.png"
            alt=""
          />
          <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
          <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
        </div>
      </section>
      {/*postbox__area  */}
      <section className="postbox__area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__wrapper mb-50">
                <div className="postbox__details mb-30">
                  <div className="comment__wrapper p-relative white-bg">
                    <p>
                      Calon Customer Kiosweb.id wajib membaca dan memahami
                      Syarat & Ketentuan (Perjanjian) berikut ini sebelum
                      memutuskan untuk menggunakan layanan Kiosweb.id.
                    </p>
                    <p>
                      Perjanjian ini dibuat{" "}
                      <span className="highlight">
                        <Link href="/about">
                          <a>sedemikian rupa</a>
                        </Link>
                      </span>{" "}
                      demi kepentingan antar pihak, juga demi keamanan dan
                      kenyamanan Customer dalam menggunakan produk/layanan
                      Kiosweb.id. Perjanjian ini juga telah dilampirkan pada
                      Form Pemesanan Kios Web dan harus disetujui oleh Customer.
                      Dokumen ini dapat berubah sewaktu-waktu jika ada situasi
                      atau keadaan yang mengharusakan pihak Kios Web untuk
                      memperbarui isi dokumen ini.
                    </p>
                    <p>
                      Perjanjian ini berlaku antara pihak Kiosweb.id dan
                      Customer Kiosweb.id.
                    </p>

                    <br></br>
                    <div className="postbox__details mb-30">
                      <h4>Kewajiban Customers</h4>
                      <p>
                        Mentaati peraturan dan ketentuan yang telah berlaku dan
                        akan berlaku di Kiosweb.id.
                      </p>
                      <p>Menggunakan Identitas Asli dan masih berlaku.</p>
                      <p>
                        Mendaftarkan alamat e-mail yang masih berfungsi karenan
                        nantinya alamat email tersebut akan digunakan untuk
                        mengirimkan informasi account Anda, penagihan,
                        pengumuman dan pemberitahuan lainnya. Apabila Customer
                        ingin mengganti alamat emailnya, Customer diwajibkan
                        untuk meng-update alamat emailnya sendiri di menu
                        Profile.
                      </p>
                      <p>
                        Membayar tagihan tepat waktu atas service atau layanan
                        yang Customer pesan selambat-lambatnya pada jatuh tempo
                        atau due-date yang tertera pada invoice.
                      </p>
                      <p>
                        Membayar sesuai dengan harga yang telah ditetapkan oleh
                        pihak Kiosweb.id seperti yang tertera didalam Bukti
                        Invoice, dsb. Jika kemudian ditemukan Customer
                        Kiosweb.id tidak melakukan pembayaran sesuai invoice dan
                        tidak melakukan konfirmasi pembayaran namun pembayaran
                        tersebut terbaca oleh Tim Support Kiosweb.id sebagai
                        pembayaran invoice Customer lain, maka pihak Kiosweb.id
                        BERHAK UNTUK TIDAK MEMBERIKAN ganti rugi dalam bentuk
                        apapun.
                      </p>
                      <p>
                        Mematuhi semua peraturan atau instruksi yang diberikan
                        oleh Kiosweb.id setiap waktu yang berhubungan dengan
                        penggunaan layanan, agar website Customer tetap dapat
                        diakses dengan baik.
                      </p>
                      <p>
                        Pada saat melakukan transfer Customer diharapkan mengisi
                        nomor invoice di berita acara atau keterangan transfer.
                      </p>
                      <p>
                        Mengirimkan konfirmasi setelah melakukan pembayaran
                        kepada pihak Kiosweb.id melalui SMS, WhatsApp atau
                        E-mail.
                      </p>
                      <p>
                        Mengirimkan konfirmasi apablia dalam selang waktu 1 s/d
                        3 hari pembayaran yang telah Anda lakukan belum kami
                        proses. Pembayaran yang tidak di isi nomor invoice pada
                        keterangan transfer dan tidak melakukan konfirmasi
                        pembayaran maka akan kami proses setelah kami
                        mendapatkan konfirmasi pembayaran.
                      </p>
                      <p>
                        Apabila pembayaran tidak dilakukan konfirmasi sampai
                        periode akuntansi 1 bulan selesai, maka pembayaran
                        tersebut akan kami anggap sebagai pendapatan dan akan
                        kami laporkan untuk keperluan perpajakan (Pajak
                        Pertambahan Nilai (PPN)). Customer tetap bisa
                        menggunakan dana tersebut apabila, Customer melakukan
                        konfirmasi pembayaran disertai dengan data yang valid.
                      </p>
                      <p>
                        Bertanggung jawab untuk memperoleh dengan biaya sendiri,
                        semua lisensi, ijin-ijin, persetujuan, dan hak milik
                        intelektual atau hak-hak lainnya yang mungkin diperlukan
                        untuk menggunakan Layanan tersebut.
                      </p>
                      <p>
                        Support tidak berlaku jika Meminta untuk memodifikasi /
                        custom template seperti mengubah tampilan atau menambah
                        fitur pada website. Template sudah dimodifikasi sendiri
                        dengan mengubah kode pada template.
                      </p>
                      <p>
                        Semua item / layanan yang sudah dibayar tidak bisa
                        dikembalikan untuk alasan apapun, silahkan pelajari
                        setiap fitur yang ditawarkan terlebih dahulu sebelum
                        membeli. Terima kasih
                      </p>
                      <p>
                        Mengerti bahwasannya layanan maupun website yang sudah
                        dibeli tidak dapat dibatalkan dan dana tidak dapat di
                        refund atau dikembalikan.
                      </p>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="postbox__quote-2 mb-50">
                  <blockquote>
                    <h4>
                      Peraturan Umum beserta Syarat dan Ketentuan ini dapat
                      berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                      Keputusan yang diambil berdasarkan peraturan ini bersifat
                      mutlak dan tidak dapat diganggu gugat.{" "}
                    </h4>
                    <span>Tim Kiosweb.id</span>
                  </blockquote>
                </div>
                <div className="comment__wrapper p-relative white-bg">
                  <div className="comment__shape">
                    <img
                      className="circle"
                      src="assets/img/icon/sign/circle.png"
                      alt=""
                    />
                    <img
                      className="zigzag"
                      src="assets/img/icon/sign/zigzag.png"
                      alt=""
                    />
                    <img
                      className="dot"
                      src="assets/img/icon/sign/dot.png"
                      alt=""
                    />
                  </div>
                  <h3>Post a comment</h3>
                  <p>
                    {
                      "Jolly good bevvy butty it's all gone to pot that quaint so I said cheers."
                    }
                  </p>
                  <div className="comment__form mt-35">
                    <form action="#">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Nama Lengkap</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="Nama Lengkap"
                              />
                              <i className="fal fa-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="comment__input-wrapper mb-25">
                            <h5>WhatsApp</h5>
                            <div className="comment__input">
                              <input
                                required
                                type="text"
                                placeholder="No. WhatsApp"
                              />
                              <i className="fab fa-whatsapp"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="comment__input-wrapper mb-25">
                            <h5>Pesan</h5>
                            <div className="comment__input textarea">
                              <textarea
                                required
                                placeholder="Apa yang bisa kami bantu?"
                              ></textarea>
                              <i className="fal fa-comment"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <button type="submit" className="m-btn m-btn-4">
                            {" "}
                            <span></span> submit{" "}
                          </button>
                        </div>
                      </div>
                    </form>
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

export default TermsArea;
