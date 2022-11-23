import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ProductTitle = () => {
  const product = useSelector((state) => state.products.specificProduct);
  return (
    <section className="page__title-area  pt-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="page__title-content mb-50">
              <h2 className="page__title">Web Topup Games - CGames V2</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/product">
                      <a>Product</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Jasa Web
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTitle;
