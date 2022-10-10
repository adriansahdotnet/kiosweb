import Link from "next/link";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const { handleGoogleSignIn, handleRegister } = useAuth();

  // handleSubmit
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.re_password) {
      return Swal.fire({
        icon: "error",
        title: "Does Not Match Password",
        text: "Please provide a currect value",
      });
    }
    if (data.password.length < 6) {
      return Swal.fire({
        icon: "error",
        // title: 'Does Not Password',
        text: "Password Must be at least 6 character",
      });
    }
    handleRegister(data.name, data.email, data.password, reset);
  };
  return (
    <>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="" />
          <img
            className="man-2 man-22"
            src="assets/img/icon/sign/man-2.png"
            alt=""
          />
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
          <img
            className="flower"
            src="assets/img/icon/sign/flower.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="page__title-wrapper text-center mb-55">
                <h2 className="page__title-2">Buat akun</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="sign__wrapper white-bg">
                <div className="sign__header mb-35">
                  <div
                    onClick={handleGoogleSignIn}
                    className="sign__in text-center"
                  >
                    <a
                      href="#"
                      className="sign__social g-plus text-start mb-15"
                    >
                      <i className="fab fa-google-plus-g"></i>Masuk dengan
                      Google
                    </a>
                  </div>
                </div>
                <div className="sign__form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="sign__input-wrapper mb-25">
                      <h5>Nama Lengkap</h5>
                      <div className="sign__input">
                        <input
                          {...register("name")}
                          required
                          type="text"
                          placeholder="Nama Lengkap"
                        />
                        <i className="fal fa-user"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-25">
                      <h5>Email</h5>
                      <div className="sign__input">
                        <input
                          {...register("email")}
                          required
                          type="email"
                          placeholder="Email"
                        />
                        <i className="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-25">
                      <h5>Password</h5>
                      <div className="sign__input">
                        <input
                          {...register("password")}
                          required
                          type="password"
                          placeholder="Password"
                        />
                        <i className="fal fa-lock"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-10">
                      <h5>Ulangi Password</h5>
                      <div className="sign__input">
                        <input
                          {...register("re_password")}
                          required
                          type="password"
                          placeholder="Ulangi Password"
                        />
                        <i className="fal fa-lock"></i>
                      </div>
                    </div>
                    <div className="sign__action d-flex justify-content-between mb-30">
                      <div className="sign__agree d-flex align-items-center">
                        <input
                          required
                          className="m-check-input"
                          type="checkbox"
                          id="m-agree"
                        />
                        <label className="m-check-label" htmlFor="m-agree">
                          Saya setuju dengan
                          <a href="blog-details"> Syarat & Ketentuan</a>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="m-btn m-btn-4 w-100">
                      {" "}
                      <span></span> Daftar
                    </button>
                    <div className="sign__new text-center mt-20">
                      <p>
                        Sudah punya akun?{" "}
                        <Link href="login">
                          <a> Masuk</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
