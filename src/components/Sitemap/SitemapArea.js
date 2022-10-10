import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificBlog } from "../../redux/features/blogSlice";
import BlogSideBar from "../Blog/BlogSideBar";

const SitemapArea = () => {
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
                    <a href="#">Sitemap</a>
                  </div>
                  <div className="postbox__time">
                    <span>10 min read</span>
                  </div>
                </div>
                <h2 className="page__title">Sitemap Kiosweb.id</h2>
                <div className="postbox__author-2 mt-20">
                  <ul className="d-flex align-items-center">
                    <li>
                      <h6>
                        <a href="home">Kiosweb.id</a>
                      </h6>
                      <span>
                        <a href="sitemap">Sitemap</a>
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
                      {" "}
                      <span className="highlight">
                        <Link href="/">
                          <a>Beranda</a>
                        </Link>
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="highlight">
                        <Link href="/about">
                          <a>Tentang Kami</a>
                        </Link>
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="highlight">
                        <Link href="/contact">
                          <a>Kontak Kami</a>
                        </Link>
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="highlight">
                        <Link href="/sign-in">
                          <a>Masuk</a>
                        </Link>
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="highlight">
                        <Link href="/sign-up">
                          <a>Daftar</a>
                        </Link>
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="highlight">
                        <Link href="/terms">
                          <a>Syarat & Ketentuan</a>
                        </Link>
                      </span>{" "}
                    </p>
                  </div>
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

export default SitemapArea;
