import React from "react";
import package1 from '../assets/images/package1.jpg';
import package2 from '../assets/images/package2.jpg';
import package3 from '../assets/images/package3.jpg';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';






function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Company Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Company</h4>

                        <a className="btn btn-link btn-icon" href="#about">About Us</a>
                        <a className="btn btn-link" href="#contact">Contact Us</a>
                        <a className="btn btn-link" href="#privacy">Privacy Policy</a>
                        <a className="btn btn-link" href="#terms">Terms & Conditions</a>
                        <a className="btn btn-link" href="#faq">FAQs & Help</a>
                    </div>

                    {/* Contact Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#twitter"><FontAwesomeIcon icon={faTwitter} size="1x" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="#facebook"><FontAwesomeIcon icon={faFacebookF} size="1x" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="#youtube"><FontAwesomeIcon icon={faYoutube} size="1x" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="#linkedin"><FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                            </a>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package1} alt="Gallery 1" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package2} alt="Gallery 2" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package3} alt="Gallery 3" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package2} alt="Gallery 4" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package3} alt="Gallery 5" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={package1} alt="Gallery 6" />
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="#your-site">Your Site Name</a>, All Right Reserved.
                            
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#home">Home</a>
                                <a href="#cookies">Cookies</a>
                                <a href="#help">Help</a>
                                <a href="#faq">FAQs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
