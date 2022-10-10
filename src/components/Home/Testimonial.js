import Slider from "react-slick";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: "assets/img/testimonial/ilman.jpg",
      name: "Ilman Aly",
      title: "Pembisnis Online",
      desc: "Saya memiiki lebih dari 1 website yang dikelola oleh Kiosweb dan hasilnya selalu memuaskan jika dibandingkan dengan website builder yang lainnya. Sukses selalu Kiosweb!",
    },
    {
      id: 2,
      img: "assets/img/testimonial/ima.png",
      name: "Risma",
      title: "Pengusaha Muda",
      desc: "Ada banyak web builder yang ada di indonesia, namun menurut pengalaman saya pribadi saya tetap memilih Kiosweb! Harga sesuai dengan kualitas yang diberikan. Thanks a lot Kiosweb",
    },
    {
      id: 3,
      img: "assets/img/testimonial/testi-3.jpg",
      name: "Thoriq Ibrahim",
      title: "Papa Muda",
      desc: "Udah beli web disini berkai-kali dan nggak pernah sekalipun dibuat kecewa. bahkan cs nya selalu ramah dan enak banget kalau di komplain. Terbest banget deh Kiosweb.",
    },
    {
      id: 4,
      img: "assets/img/testimonial/testi-4.jpg",
      name: "Olind",
      title: "Pembisnis Online",
      desc: "Mantap, cepet banget pembuatannya, seller juga ramah dan fast respons. Mohon dibantu terus ya gan thanks",
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
          <div className="testimonial__inner p-relative pb-110">
            <div className="testimonial__bg p-absolute">
              <img src="assets/img/bg/testimonial-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <Slider
                  {...settings}
                  className="testimonial__slider wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {testimonialData.map((testimonial, index) => {
                    return (
                      <div key={index} className="testimonial__item white-bg">
                        <div className="testimonial__person d-flex mb-20">
                          <div className="testimonial__avater">
                            <img src={testimonial.img} alt="" />
                          </div>
                          <div className="testimonial__info ml-15">
                            <h5>{testimonial.name}</h5>
                            <span>{testimonial.title}</span>
                          </div>
                        </div>
                        <div className="testimonial__text">
                          <p>{testimonial.desc}</p>
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

export default Testimonial;
