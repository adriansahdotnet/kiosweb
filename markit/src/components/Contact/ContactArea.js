import React from 'react';

const ContactArea = () => {
   return (
      <>
      <section className="contact__area pt-105 pb-145">
            <div className="contact__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
               <img className="circle" src="assets/img/icon/sign/circle.png" alt=""/>
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt=""/>
               <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Tinggalkan kami pesan.</h2>
                        <p>Punya pertanyaan, kritik atau saran bisa disampaikan pada form dibawah.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-7 col-xl-7">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form >
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Nama Lengkap</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Nama Lengkap" name="name"/>
                                          <i className="fal fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>WhatsApp</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="WhatsApp" name="email"/>
                                          <i className="fab fa-whatsapp"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Pesan</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="Apa yang bisa kami bantu?" name="message"></textarea>
                                          <i className="fal fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5">
                     <div className="contact__map">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.109262015088!2d108.812216!3d-7.151727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd75e3df6a48b32d!2sRenaldi%20Adriansah!5e0!3m2!1sid!2sid!4v1663838589228!5m2!1sid!2sid"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;