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
      <section class="contact__area pt-50 pb-145">
        <div class="contact__shape">
          <div class="container">
            <div class="row mb-30">
              <div class="col-xxl-12">
                <div class="page__title-wrapper mb-55">
                  <h2 class="page__title-2">Member area.</h2>
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
