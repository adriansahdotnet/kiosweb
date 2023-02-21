import Link from "next/link";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

const SidebarMenu = ({ show, handleClose }) => {
  const totalCartQuantity = useSelector(
    (state) => state.products.cartTotalQuantity
  );
  const { user, logout } = useAuth();
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            <div className="logo">
              <Link href="/home">
                <a>
                  <img
                    src="assets/img/logo/logo-white.png"
                    alt="logo"
                    width={"150px"}
                  />
                </a>
              </Link>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="">
              <div className="">
                <div className="sidebar__content">
                  <div className="mobile-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <div className="single_link iconAdd ">
                          <li>
                            <Link href="/home">
                              <a>Home</a>
                            </Link>
                          </li>
                        </div>

                        <div className="single_link iconAdd ">
                          <Link href="/product">Jasa Website</Link>
                        </div>

                        <div className="single_link iconAdd">
                          <li>
                            <Link href="https://docs.kiosweb.id">
                              <a>Dokumentasi Penggunaan</a>
                            </Link>
                          </li>
                        </div>

                        <div className="single_link iconAdd border-0">
                          <li>
                            <Link href="/contact">
                              <a>Kontak Kami</a>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </nav>
                  </div>

                  <div className="sidebar__action d-flex align-items-center mt-20">
                    <a
                      className="m-btn m-btn-2"
                      href="https://api.whatsapp.com/send?phone=6285641249270&text=Halo%21%0ASaya%20ingin%20bertanya%20tentang%20pembuatan%20website"
                    >
                      Buat Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SidebarMenu;
