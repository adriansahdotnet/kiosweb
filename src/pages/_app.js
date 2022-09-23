import React from 'react';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getApp, getApps, initializeApp } from "firebase/app";
import SEO from '../components/seo';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = { 
  apiKey : "AIzaSyBczQbHSoGMv3xDQfhSWopUGpXmd2113QE" , 
  authDomain : "kiosweb-id.firebaseapp.com" , 
  projectId : "kiosweb-id" , 
  storageBucket : "kiosweb-id.appspot.com" , 
  messagingSenderId : "543799252" , 
  appId : "1:543799252:web:91c3c6d06e396c0be50841" , 
  pengukuranId : "G-6RP5YRYM4E" 
};
initializeApp(firebaseConfig);

const app = getApps().length === 0 ? initializeApp(firebaseconfig) : getApp();



function MyApp({ Component, pageProps }) {

  return (
    <>
      <SEO font={'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400;500;600;700;800&display=swap'} />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}


export default MyApp
