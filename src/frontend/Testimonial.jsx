import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import image1 from '../assets/images/testimonial1.jpg';
import image2 from '../assets/images/testimonial2.jpg';
import image3 from '../assets/images/testimonial3.jpg';
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
            <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
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

    {/* Testimonial Section Start  */}
    <div className="container-xxl py-5 fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={image1}
                alt="Client 1"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={image2}
                alt="Client 2"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">Jane Doe</h5>
              <p>Los Angeles, USA</p>
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={image3}
                alt="Client 3"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">Michael Smith</h5>
              <p>Chicago, USA</p>
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <Footer/>
        
        </>

    )
}

export default Testimonial;