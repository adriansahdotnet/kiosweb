import Link from "next/link";
import React from "react";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <>
      <section className="services__area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 mt-60">
              <div className="section__title-wrapper mb-50 text-center">
                <h4>Alasan membangun website bersama kami</h4>
                <h2 className="section__title">
                  Website Hemat, Professional & Tepat
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <SingleService
              color="pink-bg"
              img="1"
              title={
                <h3 className="services__title">
                  <a href="#">Sudah Teroptimisasi</a>
                </h3>
              }
              desc={
                <p>
                  Website yang kami buat untukmu sudah dioptimisasi dengan baik!
                </p>
              }
            />

            <SingleService
              color="orange-bg"
              img="2"
              title={
                <h3 className="services__title">
                  <Link href="">
                    <a>Hemat Waktu</a>
                  </Link>
                </h3>
              }
              desc={
                <p>
                  Proses cepat dan tidak memakan waktu, segera luncurkan
                  layananmu sendiri!
                </p>
              }
            />

            <SingleService
              color="blue-bg"
              img="3"
              title={
                <h3 className="services__title">
                  <Link href="">
                    <a>Hemat Anggaran</a>
                  </Link>
                </h3>
              }
              desc={
                <p>
                  Membuat layanan topup dari nol akan memakan anggaran yang
                  banyak, bersama kami menjadi hemat!
                </p>
              }
            />

            <SingleService
              color="blue-bg"
              img="4"
              title={
                <h3 className="services__title">
                  <Link href="">
                    <a>Profesional Website</a>
                  </Link>
                </h3>
              }
              desc={
                <p>
                  Website yang profesional membuat customer anda nyaman dan
                  senang!
                </p>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
