import { List } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../../public/assets/images/images'

const Sidebar = () => {
  return (
   <>
  {/* sidebar section start*/}
  <div className="sidebar-wrapper">
    <div className="side-menubar d-flex gap-4 gap-md-6 align-items-center n2-bg-color">
      <div className="d-none d-xl-flex flex-column h-100 justify-content-between align-items-center py-4 py-md-8">
        <Link  to={'/'}className="nav-brand d-grid gap-12">
          <span className="d-center">
            <img src={images.logo} alt="fav" style={{width:'80px',margin:'10px'}} />
          </span>
          <span className="d-center">
            {/* <img
              src="assets/images/logo-text-2.png"
              className="logo"
              alt="logo"
            /> */}
          </span>
        </Link>
        <div className="newsletter-wrapper sidebar-items mt-12">
          <div className="single-item target-item">
            <div className="cmn-head d-center">
              {/* <button
                className="newsletter-activator box-style box-second rounded-circle d-center box-area box-one"
                type="button"
              >
                <span className="d-center fs-four n1-color">
              
                  <List  weight="fill" color="white" />
                </span>
              </button> */}
            </div>
            <div className="nav-items-wrapper d-flex flex-column p-4 p-sm-7 justify-content-center position-fixed top-0 end-0 bottom-0 w-100 n2-bg-color">
              <button className="position-absolute close-btn d-center gap-1">
                <span>CLOSE</span>
                <span className="d-center fs-five n1-color">
                  <i className="ph ph-x" />
                </span>
              </button>
              <div className="nav-items text-center d-grid gap-8 gap-md-15">
                <Link  to={'/'} className="nav-brand-area d-center gap-2">
                  <span className="d-center">
                    <img src="assets/images/fav.png" alt="fav" />
                  </span>
                  <span className="d-center">
                    <img
                    style={{width:'80px',margin:'10px'}}
                      src={images.logo}
                      className="logo"
                      alt="logo"
                    />
                  </span>
                </Link>
                <div className="instagram-area px-0 px-md-16">
                  <h5 className="mb-2 n1-color">//INSTAGRAM</h5>
                  <div className="d-inline-flex flex-column gap-2">
                    <div className="row g-2 d-inline-flex justify-content-center">
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-1.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-3.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-2.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row g-2 d-inline-flex justify-content-center">
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-4.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-5.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="image-box d-center">
                          <img
                            src="assets/images/team-img-4.webp"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0 px-md-20">
                  <div className="single-box address">
                    <ul className="d-grid gap-3 gap-md-4">
                      <li className="d-flex align-items-center gap-3">
                        <span className="box-area d-center rounded-circle n1-2nd-bg-color n1-color fs-six box-area box-three">
                          <i className="ph ph-envelope-open" />
                        </span>
                        <span className="n1-color text-start">
                          <a
                            href="https://pixner.net/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="056073606b616a45607d64687569602b666a68"
                          >
                            [email&nbsp;protected]
                          </a>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-3">
                        <span className="box-area d-center rounded-circle n1-2nd-bg-color n1-color fs-six box-area box-three">
                          <i className="ph ph-map-pin" />
                        </span>
                        <span className="n1-color text-start">
                          1750 Ranchero Rd, Kerrville, Texas 78028
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-3">
                        <span className="box-area d-center rounded-circle n1-2nd-bg-color n1-color fs-six box-area box-three">
                          <i className="ph ph-map-pin" />
                        </span>
                        <a
                          href="tel:+1-212-9876543"
                          className="n1-color text-start"
                        >
                          +1-212-9876543
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="social-area">
                  <h5 className="mb-2 n1-color">//FOLLOW US</h5>
                  <ul className="d-center gap-2 gap-md-3 social-area second">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        aria-label="Facebook"
                        className="d-center n1-2nd-bg-color transition"
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
                        className="d-center n1-2nd-bg-color transition"
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
                        className="d-center n1-2nd-bg-color transition"
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
                        className="d-center n1-2nd-bg-color transition"
                      >
                        <span className="d-center fs-seven n1-color">
                          <i className="fa-brands fa-dribbble" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        aria-label="youtube"
                        className="d-center n1-2nd-bg-color transition"
                      >
                        <span className="d-center fs-seven n1-color">
                          <i className="fa-brands fa-youtube" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-area">
          <div className="active-item">
            <ul className="d-center d-grid justify-content-start gap-2 gap-md-3 social-area second">
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
          <div className="inactive-item">
            <div className="slider-pagination mb-10 d-center flex-column gap-2 fs-five d-center bg-transparent n1-color" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* sidebar section end */}
</>

  )
}

export default Sidebar