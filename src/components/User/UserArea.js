import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UserArea = () => {
  const { handleGoogleSignIn, loginUser, passwordResetEmail } = useAuth();
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
      <section className="contact__area pt-50 pb-145">
        <div className="Namecontact__shape">
          <div className="container">
            <div className="row mb-30">
              <div className="col-xxl-12">
                <div className="page__title-wrapper mb-55">
                  <h2 className="page__title-2">Member area.</h2>
                  <p>Kamu dapat melihat tema, saldo &amp; juga tagihan kamu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserArea;
