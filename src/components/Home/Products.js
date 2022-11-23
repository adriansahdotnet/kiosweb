import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <section className="product__area pt-105 pb-110 grey-bg-2">
        <div className="container">
          <div className="row">
            <h3 className="mb-3 fw-bold">Produk Populer</h3>
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  Tampilan Website Terbaik <br />
                  Untuk Bisnis Anda
                </h2>
                <p>Beberapa produk terbaik kami</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.slice(0, 7).map((product, index) => {
              return <SingleProduct key={index} product={product} />;
            })}
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="product__more text-center mt-30">
                <Link href="/product">
                  <a className="m-btn m-btn-2">
                    {" "}
                    <span></span> Lihat Lebih Banyak
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
