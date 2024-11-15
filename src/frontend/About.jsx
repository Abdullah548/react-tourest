import React from 'react';
import Navbar from '../Components/Navbar';
import aboutImage from '../assets/images/about.jpg';
import destination1 from '../assets/images/destination1.jpg';
import destination2 from '../assets/images/destination2.jpg';
import destination3 from '../assets/images/destination3.jpg';
import destination4 from '../assets/images/destination4.jpg';
import package1 from '../assets/images/package1.jpg';
import package2 from '../assets/images/package2.jpg';
import package3 from '../assets/images/package3.jpg';
import { faMapMarkerAlt, faCalendarAlt, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faHotel, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/Style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import Footer from '../Components/Footer';



function About()
 {
  const teamMembers = [
    { imgSrc: team1, name: 'Muhammad Abdullah', designation: 'Designation' },
    { imgSrc: team2, name: 'Muhammad Abdullah', designation: 'Designation' },
    { imgSrc: team3, name: 'Muhammad Abdullah', designation: 'Designation' },
    { imgSrc: team4, name: 'Muhammad Abdullah', designation: 'Designation' },
  ];
  
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item "><a href="#" className='text-decoration-none'>Home</a></li>
                <li className="breadcrumb-item "><a href="" className='text-decoration-none'>Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>

      </div>
    </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100" src={aboutImage} alt=""  />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First className Flights</p>
                </div>
                {/* Add other services similarly */}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
       

   



   

  

    {/* Team Section start  */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                  <a className="btn btn-square mx-1" href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="btn btn-square mx-1" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="btn btn-square mx-1" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.designation}</small>
                </div>
              </div>
            </div> ))}
        </div>
      </div>
    </div>
    {/* Team Section End */}

    {/* Testimonial Section Start  */}
    
  
    {/* Testimonial Section End */}
<Footer>
  <Footer/>
</Footer>

    </>
  );
}

export default About;
