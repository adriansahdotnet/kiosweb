import Slider from "react-slick";
import Link from "next/link";

const ProductPopuler = () => {
  const productPopulerData = [
    {
      id: "1",
      img: "assets/img/product/oura.png",
      demo: "https://demo.kiosweb.id/ourastore",
      link: "/ourastore",
      title: "Web TopUp Games - Oura Store",
      category: "Web Topup",
      price: "2.000.000",
    },
    {
      id: "2",
      img: "assets/img/product/cgames.png",
      link: "/cgames",
      demo: "https://demo.kiosweb.id/cgames",
      title: "Web Topup Games - CGames",
      title_pop: "Web Topup Games - CGames",
      category: "Web Topup",
      price: "1.485.000",
    },
    {
      id: "3",
      img: "assets/img/product/qgames.png",
      link: "/qgames",
      demo: "https://demo.kiosweb.id/qgames",
      title: "Web Topup Games - QGames",
      title_pop: "Web Topup Games - QGames",
      category: "Web Topup",
      price: "1.250.000",
    },
  ];

  // slick setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial__area pt-50 pb-115 fix">
        <div className="container">
          <div className="testimonial__inner p-relative">
            <div className="row">
              <h3 className="mb-20 fw-bold text-start">Produk Populer</h3>
              <div className="col-xxl-12">
                <Slider
                  {...settings}
                  className="testimonial__slider wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {productPopulerData.map((ProductPopuler, index) => {
                    return (
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex">
                        <div
                          className="product__item white-bg mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="product__thumb">
                            <div className="product__thumb-inner fix w-img">
                              <Link href="/qgames">
                                <a>
                                  <img src={ProductPopuler.img} alt="" />
                                </a>
                              </Link>
                            </div>
                            <div className="product__thumb-btn transition-3">
                              <a
                                href="/product"
                                className="m-btn m-btn-6"
                                style={{ cursor: "pointer" }}
                              >
                                Detail Fitur
                              </a>
                              <a
                                href="https://demo.kiosweb.id/qgames"
                                className="m-btn m-btn-7 mt-2"
                              >
                                Lihat Preview
                              </a>
                            </div>
                            <div className="product__thumb-btn transition-3"></div>
                          </div>
                          <div className="product__content">
                            <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                              <div className="product__tag">
                                <a href="#">{ProductPopuler.category}</a>
                              </div>
                              <div className="product__price">
                                <span>Rp {ProductPopuler.price}</span>
                              </div>
                            </div>
                            <h3 className="product__title">
                              <Link href="/qgames">
                                <a>{ProductPopuler.title}</a>
                              </Link>
                            </h3>
                            <p className="product__author">
                              by <a href="#">Kiosweb</a> in{" "}
                              <a href="#">Jasa Website</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPopuler;
