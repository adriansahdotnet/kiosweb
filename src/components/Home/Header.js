import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import useAuth from '../../hooks/useAuth';
import useSticky from '../../hooks/useSticky';
import SidebarMenu from '../Sidebar/SidebarMenu';

const Header = () => {
   // handle cartQuantity
   const {quantity} = useCartInfo();
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
            <div className={sticky ? "sticky header__area white-bg" : "header__area white-bg"} id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="logo">
                           <Link href="/">
                              <a >
                                 <img src="assets/img/logo/logo.png" alt="logo" />
                              </a>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block">
                        <div className="main-menu">
                           <nav id="mobile-menu">
                              <ul>
                                    <li><Link href="/home"><a >Home</a></Link></li>
                              <li className="has-dropdown">
                                    <Link href="/product">
                                       <a >Jasa Website</a>
                                    </Link>
                                    <ul className="submenu">
                                       <li><Link href="/product"><a>Topup Games</a></Link></li>
                                       <li><Link href="/product-details"><a>Landing Page</a></Link></li>
                                       <li><Link href="/product-details"><a>Toko Online</a></Link></li>

                                    </ul>
                                 </li>
                                 <li><Link href="/support"><a>Support</a></Link></li>

                                 <li><Link href="/contact"><a >Contact</a></Link></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-6">
                        <div className="header__action d-flex align-items-center justify-content-end">
                           <div className="header__login d-none d-sm-block">
                              {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Log Out</a> :
                                 <Link href="/login">
                                    < a> <i className="far fa-unlock"></i> Log In</a>
                                 </Link>}
                           </div>
                           <div className="header__cart d-none d-sm-block">
                              <Link href="/cart">
                                 <a className="cart-toggle-btn">
                                    <i className="far fa-shopping-cart"></i>
                                    <span>{quantity}</span>
                                 </a>
                              </Link>
                           </div>
                           <div className="sidebar__menu d-lg-none" onClick={handleShow}>
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