import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import package1 from '../assets/images/package1.jpg';
import package2 from '../assets/images/package2.jpg';
import package3 from '../assets/images/package3.jpg';
import { faMapMarkerAlt, faCalendarAlt, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHotel, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';


function Packages(){
   

    return(
        <>
        <Navbar/>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">Packages</h1>
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
    {/* Packages Section Start  */}
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

    {/* Online Booking Section Start  */}
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
                      <label style={{ backgroundColor: "var(--custom-bg, initial)" }} htmlFor="select1">Destination</label>
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
    <Footer/>
        </>
    )
}

export default Packages;