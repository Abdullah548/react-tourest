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
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import Footer from '../Components/Footer';



function Home()
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
                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                  Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Thailand"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: '7px' }}
                  >
                    Search
                  </button>
                </div>
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
              <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
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

      {/* Services Section  */}
 
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <FontAwesomeIcon icon={faGlobe} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faHotel} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faGear} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          {/* Additional services... */}
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <FontAwesomeIcon icon={faGlobe} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faHotel} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
              <FontAwesomeIcon icon={faGear} className="fa-3x text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          {/* Additional services... */}
        </div>
      </div>
    </div>   

    {/* <!-- Destination Start --> */}
    <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={destination1} alt=""/>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={destination2} alt=""/>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={destination3} alt=""/>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s">
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src={destination4} alt="" />
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Destination Start --> */}

    {/* <!-- Package Start --> */}
    
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Package Item 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src={package1} alt="Package 1" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                  Thailand
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                  3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
                  2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$149.00</h3>
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-primary" />
                  ))}
                </div>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                <div className="d-flex justify-content-center mb-2">
                  <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                  <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Package Item 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src={package2} alt="Package 2" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                  Indonesia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                  3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
                  2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$139.00</h3>
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-primary" />
                  ))}
                </div>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                <div className="d-flex justify-content-center mb-2">
                  <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                  <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Package Item 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src={package3} alt="Package 3" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                  Malaysia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                  3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
                  2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$189.00</h3>
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-primary" />
                  ))}
                </div>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                <div className="d-flex justify-content-center mb-2">
                  <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                  <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Package End --> */}

    {/* Online Booking Section Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="/">Read More</a>
            </div>

            {/* Right Side - Booking Form */}
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  {/* Date & Time Field */}
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>

                  {/* Destination Field */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select bg-transparent" id="select1">
                        <option value="1">Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Request Field */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Online Booking Section End */}

    {/* Process Section Start  */}
    <div className="container-xxl py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>

        {/* Steps */}
        <div className="row gy-5 gx-4 justify-content-center">
          {/* Step 1 */}
          <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: '100px', height: '100px' }}
              >
                <FontAwesomeIcon icon={faGlobe} size="3x" className='text-white' />
              </div>
              <h5 className="mt-4">Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: '100px', height: '100px' }}
              >
                      <FontAwesomeIcon icon={faDollarSign} size="3x" className='text-white' />

              </div>
              <h5 className="mt-4">Pay Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: '100px', height: '100px' }}
              >
      <FontAwesomeIcon icon={faPlane} size="3x" className='text-white' />
      </div>
              <h5 className="mt-4">Fly Today</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Section End  */}

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

export default Home;
