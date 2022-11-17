import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { specificItem } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const UserArea = () => {
  // all products
  const product = useSelector((state) => state.products.specificProduct);
  // dispatch
  const dispatch = useDispatch();
  // handleCartProduct
  const handleCartProduct = () => {
    dispatch(addToProduct(product));
  };
  // user
  const { user, loading } = useAuth();
  const route = useRouter();
  if (!user) route.push("/terms");
  if (user)
    return (
      <>
        <section className="contact__area pt-50 pb-145">
          <div className="Namecontact__shape">
            <div className="container">
              <div className="row mb-30">
                <div className="col-xxl-12">
                  <div className="page__title-wrapper mb-55">
                    <h2 className="page__title-2">Member area.</h2>
                    <p>
                      Halo, <b>{user.displayName}</b> Kamu dapat melihat tema,
                      saldo &amp; juga tagihan kamu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8">
                <div class="card mb-3" style={{ maxWidth: "700px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={product?.img_big}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">{product.title}</h3>
                        <h4 class="card-text pb-3">Harga {product.price}</h4>
                        <button type="button" className="m-btn m-btn-2">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: "700px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={product?.img_big}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">{product.title}</h3>
                        <h4 class="card-text pb-3">Harga {product.price}</h4>
                        <button type="button" className="m-btn m-btn-2">
                          Download
                        </button>
                      </div>
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

export default UserArea;
