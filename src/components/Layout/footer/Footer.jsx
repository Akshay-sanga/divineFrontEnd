import { ArrowArcRight, ArrowRight, Envelope, MapPin, Phone } from 'phosphor-react'
import React from 'react'
import { images, shape } from '../../../../public/assets/images/images'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* Footer Area Start */}
      <footer className="footer-section n2-bg-color position-relative">
        <div className="abs-area footer-illus pe-none">
          <div className="item item-one position-absolute start-0 top-0">
            <img src={shape.footerShape1} alt="Image" />
          </div>
          <div className="item position-absolute start-0 top-0">
            <img src={shape.packagesShape1} alt="icon" />
          </div>
          <div className="item position-absolute end-0 bottom-0">
            <img src={shape.packagesShape2} alt="icon" />
          </div>
        </div>
        <div className="cus-border border-bottom b-third">
          <div className="container">
            <div className="row align-items-center py-14 py-md-0">
              <div className="col-md-2">
                <Link to={'/'}
                  className="nav-brand d-flex justify-content-center justify-content-md-end gap-2"
                >
                  <span className="d-center">
                    <img src={images.logo} alt="fav" style={{ width: '150px' }} />
                  </span>

                </Link>
              </div>
              <div className="col-md-6 cus-border border-start border-end b-third py-8 py-md-20">
                <div className="title-area">
                  <h2 className="display-five n1-color fw-bold text-center">
                    " The Future of Talent is Here – India’s First Digital Reality Show "
                  </h2>
                </div>
              </div>
              <div className="col-md-3">
                <ul className="d-center justify-content-center justify-content-md-end gap-2 gap-md-3 social-area second">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      aria-label="Facebook"
                      className="d-center n1-2nd-bg-color rounded-circle transition"
                    >
                      <span className="d-center fs-seven n1-color">
                        <i className="fab fa-facebook-f" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      aria-label="Twitter"
                      className="d-center n1-2nd-bg-color rounded-circle transition"
                    >
                      <span className="d-center fs-seven n1-color">
                        <i className="fab fa-twitter" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      aria-label="Instagram"
                      className="d-center n1-2nd-bg-color rounded-circle transition"
                    >
                      <span className="d-center fs-seven n1-color">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.dribbble.com/"
                      aria-label="dribbble"
                      className="d-center n1-2nd-bg-color rounded-circle transition"
                    >
                      <span className="d-center fs-seven n1-color">
                        <i className="fa-brands fa-dribbble" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row cus-row gy-9 gy-xxl-0 my-4 my-md-8 my-xxl-15">
            <div className="col-md-12 col-lg-4 order-1 order-md-0">
              <div className="single-box form-area">
                <h5 className="mb-3 mb-md-4 n1-color">About Us</h5>
                <p className="n1-color">
                  Hunar Voice of India is a unique Digital + On-Ground Singing Reality Show designed to discover and nurture raw musical talent across the nation. Unlike traditional talent shows, Hunar Voice of India blends online accessibility with offline performance exposure, giving every aspiring singer a fair chance to shine.
                </p>

              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 footer-links d-flex justify-content-start justify-content-lg-center order-1 order-md-0">
              <div className="single-box">
                <h5 className="mb-4 mb-md-6 n1-color">Pages</h5>
                <ul className="d-grid gap-3 gap-md-4 overflow-hidden">
                  <li>
                    <Link
                      to={'/'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/about-us'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/all-season'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      All Seasons
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 footer-links d-flex justify-content-start justify-content-lg-center order-1 order-md-0">
              <div className="single-box">
                <h5 className="mb-4 mb-md-6 n1-color">Resources</h5>
                <ul className="d-grid gap-3 gap-md-4 overflow-hidden">
                  <li>
                    <Link
                      to={'/gallery'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/videos'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      target='_blank'
                      to={'https://www.hunarsangeetmahavidyalaya.com/'}
                      className="d-center justify-content-start transition n1-color position-relative"
                    >
                      Sponsor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-4">
              <div className="single-box address">
                <h5 className="mb-4 mb-md-6 n1-color">Address</h5>
                <ul className="d-grid gap-3 gap-md-4">

                  <li className="d-flex align-items-center gap-3">
                    <span className="box-area d-center rounded-circle n1-2nd-bg-color n1-color fs-six box-area box-three">
                      {/* <i className="ph ph-map-pin" /> */}
                      <MapPin />
                    </span>
                    <span className="n1-color">
                      Near Chandila Chowk Sector 82 <br /> Faridabad 121002
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="box-area d-center rounded-circle n1-2nd-bg-color n1-color fs-six box-area box-three">
                      {/* <i className="ph ph-phone-call" /> */}
                      <Phone />
                    </span>
                    <a href="tel:9350065004" className="n1-color">
                      +91 72 9001 9009
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cus-border border-top b-third">
          <div className="container">
            <div className="row py-4 py-md-6">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p className="n1-color">
                    © <span className="currentYear n1-color" /> Hunar Voice of India.
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End */}
    </>

  )
}

export default Footer