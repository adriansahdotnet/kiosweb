import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useCartInfo from "../../hooks/use-cart-info";
import useAuth from "../../hooks/useAuth";
import useSticky from "../../hooks/useSticky";
import SidebarMenu from "../Sidebar/SidebarMenu";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  // handle cartQuantity
  const { quantity } = useCartInfo();
  // handle sidebar show
  const [show, setShow] = useState(false);
  // handle close
  const handleClose = () => setShow(false);
  // handle sidebar show
  const handleShow = () => setShow(true);
  // sticky nav
  const { sticky } = useSticky();
  // user
  const { user, logout } = useAuth();

  return (
    <>
      <header>
        <div
          className={
            sticky ? "sticky header__area white-bg" : "header__area white-bg"
          }
          id="header-sticky"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/img/logo/logotu.png"
                        alt="logo"
                        width={"150px"}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block text-center">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/product">
                          <a>Jasa Website</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://docs.kiosweb.id">
                          <a>Docs</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact">
                          <a>Kontak Kami</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header__action d-flex align-items-center justify-content-end">
                  <div className="header__btn d-none d-xl-block">
                    <a
                      className="m-btn m-btn-2"
                      href="https://api.whatsapp.com/send?phone=6285641249270&text=Halo%21%0ASaya%20ingin%20bertanya%20tentang%20pembuatan%20website"
                    >
                      Buat Website Sekarang
                    </a>
                  </div>
                  <div
                    className="sidebar__menu d-lg-none ms-3"
                    onClick={handleShow}
                  >
                    <div className="sidebar-toggle-btn" id="sidebar-toggle">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SidebarMenu show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
