import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';

function TravelGuide(){
    const teamMembers = [
        { imgSrc: team1, name: 'Muhammad Abdullah', designation: 'Designation' },
        { imgSrc: team2, name: 'Muhammad Abdullah', designation: 'Designation' },
        { imgSrc: team3, name: 'Muhammad Abdullah', designation: 'Designation' },
        { imgSrc: team4, name: 'Muhammad Abdullah', designation: 'Designation' },
      ];
    return(
        <>
<Navbar/>
<div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">Travel Guide</h1>
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
    
    {/* Travel Team Section Start  */}
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
    <Footer/>
        </>

    )
}

export default TravelGuide;