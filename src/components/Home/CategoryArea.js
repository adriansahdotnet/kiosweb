import Link from "next/link";

const categoryData = [
  {
    id: 1,
    img: "https://panel.vocagame.com/illustrations/Vector.svg",
    title: "Sudah Teroptimisasi",
    decs: "Website yang kami buat untukmu sudah dioptimisasi dengan baik!",
  },
  {
    id: 2,
    img: "https://panel.vocagame.com/illustrations/videotime.svg",
    title: "Hemat Waktu",
    decs: "Proses cepat dan tidak memakan waktu, segera luncurkan layananmu sendiri!",
  },
  {
    id: 3,
    img: "https://panel.vocagame.com/illustrations/moneytick.svg",
    title: "Hemat Anggaran",
    decs: "Membuat layanan topup dari nol akan memakan anggaran yang banyak, bersama kami menjadi hemat!",
  },
  {
    id: 4,
    img: "https://panel.vocagame.com/illustrations/caption.svg",
    title: "Profesional Website",
    decs: "Website yang profesional membuat customer anda nyaman dan senang!",
  },
];

const CategoryArea = () => {
  return (
    <>
      <section className="category__area pt-105 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h4 className="mb-20 fw-bold text-center">
                Alasan membangun website bersama kami
              </h4>
              <h2 className="mb-50 fw-bold text-center">
                Website Hemat, Professional & Tepat
              </h2>
            </div>
          </div>
          <div className="row">
            {categoryData.map((category, index) => {
              return (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-md-6 col-sm-6"
                >
                  <div
                    className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="category__icon mb-25">
                      <a href="#">
                        <img src={category.img} alt="" />
                      </a>
                    </div>
                    <div className="category__content">
                      <h3 className="category__title">
                        <Link href="/product">
                          <a>{category.title}</a>
                        </Link>
                      </h3>
                      <Link href="#">
                        <a className="link-btn">
                          <a>{category.decs}</a>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
