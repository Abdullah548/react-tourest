import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';


function Testimonial(){

    return(

        <>
<Navbar/>
<div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">404 Page Not Found</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>

      </div>
    </div>

    {/* 404 Section Start  */}
    <div className="container-xxl py-5 fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist on our website! Maybe go to our home page or try to use a search?
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
              Go Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>

   
    <Footer/>
        
        </>

    )
}

export default Testimonial;