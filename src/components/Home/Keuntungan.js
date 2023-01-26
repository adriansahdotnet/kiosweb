import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Keuntungan = () => {
  return (
    <>
      <section className="trending__area pt-110 pb-110 grey-bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-12 col-xl-12 col-lg col-md-12">
              <h2 className="section__title text-center mb-20">
                Alur Pembuatan website
              </h2>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Tahap 1</Accordion.Header>
                  <Accordion.Body>
                    Kamu akan berdikusi dengan CS kami mengenai produk yang akan
                    dibeli. dan CS akan merekomendasikan Produk yang sesuai
                    dengan bisnis kamu
                  </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Tahap 2</Accordion.Header>
                  <Accordion.Body>
                    Jika sudah Deal, kamu akan di arahkan untuk melakukan
                    transaksi.
                  </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Tahap 3</Accordion.Header>
                  <Accordion.Body>
                    Jika sudah mengirimkan bukti transaksi, CS akan mengirimkan
                    Formulir yang harus kamu isi.
                  </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Tahap 4</Accordion.Header>
                  <Accordion.Body>
                    Kami akan membuat Grup Whatapp yang berisikan kamu, CS, dan
                    teknisi. di grup ini kamu akan diberitahu progres pembuatan
                    website, diskusi soal firur dll.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Keuntungan;
