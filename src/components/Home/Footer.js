import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area footer-bg">
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-inner">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-md-6">
                  <div
                    className="footer__copyright wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <p>
                      Copyright © 2022 All Rights Reserved.{" "}
                      <a href="#">Kiosweb.Id</a>
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-md-6">
                  <div
                    className="footer__bottom-link wow fadeInUp text-md-end"
                    data-wow-delay=".8s"
                  >
                    <ul>
                      <li>
                        <a href="#">Tentang Kami</a>
                      </li>
                      <li>
                        <a href="terms">Syarat & Ketentuan</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
