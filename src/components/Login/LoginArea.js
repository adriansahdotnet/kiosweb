import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../hooks/useAuth";
import { Router, useRouter } from "next/router";

const LoginArea = () => {
  const { handleGoogleSignIn, LoginUser, passwordResetEmail } = useAuth();
  {
    const route = useRouter();
  }
  const [email, setEmail] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password, reset);
  };
  // handleForgotPassword
  const handleForgotPassword = () => {
    passwordResetEmail(email);
  };
  return (
    <>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
          <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="" />
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
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="page__title-wrapper text-center mb-55">
                <h2 className="page__title-2">Masuk</h2>
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
                    <a className="sign__social g-plus text-start mb-15">
                      <i className="fab fa-google-plus-g"></i>Masuk dengan
                      Google
                    </a>
                  </div>
                </div>
                <div className="sign__form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="sign__input-wrapper mb-25">
                      <h5>Email</h5>
                      <div className="sign__input">
                        <input
                          required
                          {...register("email")}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="E-mail"
                        />
                        <i className="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-10">
                      <h5>Password</h5>
                      <div className="sign__input">
                        <input
                          required
                          {...register("password")}
                          type="password"
                          placeholder="Password"
                        />
                        <i className="fal fa-lock"></i>
                      </div>
                    </div>
                    <div className="sign__action d-sm-flex justify-content-between mb-30">
                      <div className="sign__agree d-flex align-items-center">
                        <input
                          required
                          className="m-check-input"
                          type="checkbox"
                          id="m-agree"
                        />
                        <label className="m-check-label" htmlFor="m-agree">
                          Ingat saya
                        </label>
                      </div>
                      <div className="sign__forgot">
                        <button
                          style={{
                            cursor: "pointer",
                            background: "transparent",
                          }}
                          onClick={handleForgotPassword}
                        >
                          Lupa password?
                        </button>
                      </div>
                    </div>
                    <button type="submit" className="m-btn m-btn-4 w-100">
                      {" "}
                      <span></span> Masuk
                    </button>
                    <div className="sign__new text-center mt-20">
                      <p>
                        Baru di Kiosweb.id?{" "}
                        <Link href="/sign-up">
                          <a>Daftar sekarang</a>
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

export default LoginArea;
