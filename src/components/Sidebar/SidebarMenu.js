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
                  <img src="assets/img/logo/logo-white.png" alt="logo" />
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
                              <a>Docs</a>
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

                  <div className="sidebar__action d-flex align-items-center">
                    <div className="sidebar__login mt-15">
                      {user?.email ? (
                        <a
                          onClick={logout}
                          style={{ cursor: "pointer" }}
                          className="d-flex align-items-center"
                        >
                          {" "}
                          <i className="fal fa-sign-out-alt"></i> Log Out
                        </a>
                      ) : (
                        <Link href="/login">
                          <a>
                            {" "}
                            <i className="far fa-unlock"></i> Log In
                          </a>
                        </Link>
                      )}
                    </div>
                    <div className="sidebar__cart mt-20">
                      <Link href="/cart">
                        <a className="cart-toggle-btn">
                          <i className="far fa-shopping-cart"></i>
                          <span>{totalCartQuantity}</span>
                        </a>
                      </Link>
                    </div>
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
