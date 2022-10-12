import React from "react";
import SingleAccording from "./SingleAccording";

const FaqArea = () => {
  return (
    <>
      <section className="faq__area grey-bg-2 pt-105 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="section__title-wrapper text-center mb-65">
                <h2 className="section__title">
                  Tahap Pemesanan<br></br>Jasa Pembuatan Website
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3"></div>

            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-9">
              <div
                className="faq__tab-content wow fadeInRight"
                data-wow-delay=".7s"
              >
                <div className="tab-content" id="faqTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="sale"
                    role="tabpanel"
                    aria-labelledby="sale-tab"
                  >
                    <div className="accordion" id="sale-accordion">
                      <SingleAccording
                        number="One"
                        condition="true"
                        showClass="accordion-collapse 
                                 collapse"
                        title="Tahap 1"
                      />

                      <SingleAccording
                        number="Two"
                        showClass="accordion-collapse collapse show"
                        title="Tahap 2"
                      />

                      <SingleAccording
                        number="Three"
                        showClass="accordion-collapse collapse"
                        title="Tahap 3"
                      />

                      <SingleAccording
                        number="Four"
                        showClass="accordion-collapse collapse"
                        title="Tahap 4"
                      />

                      <SingleAccording
                        number="Five"
                        showClass="accordion-collapse collapse"
                        title="Tahap 5"
                      />
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

export default FaqArea;
