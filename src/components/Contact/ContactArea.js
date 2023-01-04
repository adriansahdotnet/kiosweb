import React from "react";

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pt-105 pb-145">
        <div className="contact__shape">
          <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
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
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mb-55">
                <h2 className="page__title-2">Tinggalkan kami pesan.</h2>
                <p>
                  Punya pertanyaan, kritik atau saran bisa disampaikan pada form
                  dibawah.
                </p>
                <div className="alert alert-warning" role="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Warning:"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  Pastikan No CS hanya{" "}
                  <a href="https://wa.me/6285641249270">
                    <b>0856 4124 9270</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-7 col-xl-7">
              <div className="contact__wrapper  white-bg">
                <div className="contact__form">
                  <form>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="contact__input-wrapper mb-25">
                          <h5>Nama Lengkap</h5>
                          <div className="contact__input">
                            <input
                              required
                              type="text"
                              placeholder="Nama Lengkap"
                              name="name"
                            />
                            <i className="fal fa-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="contact__input-wrapper mb-25">
                          <h5>WhatsApp</h5>
                          <div className="contact__input">
                            <input
                              required
                              type="number"
                              placeholder="WhatsApp"
                              name="email"
                            />
                            <i className="fab fa-whatsapp"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="contact__input-wrapper mb-25">
                          <h5>Pesan</h5>
                          <div className="contact__input textarea">
                            <textarea
                              required
                              placeholder="Apa yang bisa kami bantu?"
                              name="message"
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
            <div className="col-xxl-5 col-xl-5">
              <div className="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63379.39355300873!2d108.97218138147316!3d-6.865167816916582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb07a026ad8e5%3A0x3bbf7998f0ec2ea!2sBrebes%2C%20Kec.%20Brebes%2C%20Kabupaten%20Brebes%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1663950949283!5m2!1sid!2sid"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
