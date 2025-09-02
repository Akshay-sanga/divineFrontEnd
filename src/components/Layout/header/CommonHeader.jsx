import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List } from "phosphor-react";
import { images } from '../../../../public/assets/images/images';
const CommonHeader = () => {
    const [openclass, setOpenclass] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const openBtn = () => {
        setOpenclass(!openclass)
    }
    const Dropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <>
            {/* header-section start */}
            <header className="header-section index-two n1-bg-color py-4 px-2 px-xl-6" >
                <div className="container-fluid">
                    <div className="main-navbar px-0 px-xl-4 px-xxl-8">
                        <nav className="navbar-custom">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link
                                     to={'/'}
                                    className="nav-brand d-flex align-items-center gap-2 d-lg-none"
                                >
                                    <img src={images.logo} alt="logo"  style={{width:'80px',margin:'0px 10px'}} />
                                    {/* <img src={images.logoText} alt="logo" /> */}
                                </Link>
                                <div className="d-flex gap-6">
                                    <button
                                        onClick={openBtn}
                                        className={`navbar-toggle-btn d-block d-lg-none ${openclass ? 'open' : ''}`}
                                        type="button"
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                            </div>
                            <div className="navbar-toggle-item" style={{ display: openclass ? 'block' : 'none' }}>
                                <div className="d-flex gap-5 flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between mt-5 mt-lg-0">
                                    <div className="d-center gap-10 gap-md-15 nav-logo">
                                        <Link to={'/'}
                                            
                                            className="navbar-brand logo d-none d-lg-flex d-xl-flex d-lg-flex gap-2 align-items-center"
                                        >
                                            <img src={images.logo} alt="logo" style={{width:'60px'}} />
                                            {/* <img
                                                src={images.logoText}
                                                className="d-none d-md-none d-xl-flex"
                                                alt="logo"
                                            /> */}
                                        </Link>
                                        <ul className="custom-nav d-lg-flex d-grid gap-3 gap-lg-4 order-1 order-xxl-0">
                                            <li className="menu-item position-relative">

                                                <Link to={'/'}

                                                    className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                    data-splitting=""
                                                >
                                                    Home
                                                </Link>

                                            </li>

                                            <li className="menu-item position-relative">


                                                <Link to={'/about-us'}

                                                    className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                    data-splitting=""
                                                >
                                                    About us
                                                </Link>


                                            </li>
                                            <li className="menu-item position-relative">


                                                <Link to={'/all-season'}
                                                    className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                    data-splitting=""
                                                >
                                                    Seasons
                                                </Link>

                                            </li>

                                            <li className="menu-item position-relative">
                                                <button
                                                    onClick={Dropdown}
                                                    className={`position-relative pe-5 z-1 slide-twelfth text-uppercase slide-vertical ${dropdown ? 'Dropdown' : ''}`}
                                                    data-splitting
                                                >

                                                    Pages
                                                </button>
                                                <ul className="sub-menu n1-bg-color p-lg-5" style={{ display: dropdown ? 'block' : 'none' }}>

                                                    <li className="menu-link py-1">
                                                        <Link to={'/gallery'}
                                                            className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                            data-splitting
                                                        >

                                                          Gallery 
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="menu-link py-1">
                                                        <Link to={'/videos'}
                                                           
                                                            className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                            data-splitting=""
                                                        >
                                                            All Videos
                                                        </Link>
                                                    </li>
                                                    {/* <li className="menu-link py-1">
                                                        <Link to={'/sponsor'}
                                                            className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                            data-splitting=""
                                                        >
                                                            sponsor
                                                        </Link>
                                                    </li>
                                                    <li className="menu-link py-1">
                                                        <Link to={'/speaker'}
                                                            className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                            data-splitting=""
                                                        >
                                                            Speaker
                                                        </Link>
                                                    </li>
                                                    <li className="menu-link py-1">
                                                        <Link to={'/testimonial'}
                                                            className="n2-color slide-twelfth text-uppercase slide-horizontal"
                                                            data-splitting=""
                                                        >
                                                            Testimonial
                                                        </Link>
                                                    </li> */}
                                                </ul>
                                            </li>
                                            {/* <li className="menu-link">
                                                <Link to={'/contact'}
                                                    className="n2-color slide-second text-uppercase slide-vertical"
                                                    data-splitting=""
                                                >
                                                    Contact
                                                </Link>
                                            </li> */}

                                            <li class="menu-link">
                                                <Link to={'/contact'} class="n2-color slide-twelfth text-uppercase slide-vertical" data-splitting>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right-area sidebar-items position-relative d-flex gap-3 gap-md-5 align-items-center">
                                       
                                        <div className="single-item d-none d-lg-block">
                                            <Link to={'/audition-form'}

                                                className="box-style box-second first-alt d-center gap-2 py-2 py-md-3 px-3 px-md-6 px-xl-9"
                                            >
                                                <span className="fs-seven">Apply for Season</span>
                                            </Link>
                                        </div>
                                        <div className="single-item target-item">
                                            <div className="cmn-head d-center">
                                                <button
                                                    className="newsletter-activator box-style box-second second-alt alt-eighteen rounded-circle d-center box-area box-one"
                                                    type="button"
                                                >
                                                    <span className="d-center fs-four n1-color">

                                                        <List size={32} weight="bold" color="#000" />

                                                    </span>
                                                </button>
                                            </div>
                                            <div className="nav-items-wrapper d-flex flex-column p-4 p-sm-7 justify-content-center position-fixed top-0 end-0 bottom-0 w-100 n2-bg-color">
                                                <button className="position-absolute close-btn d-center gap-1">
                                                    <span>CLOSE</span>
                                                    <span className="d-center fs-five n1-color">
                                                        <i className="ph ph-x" />
                                                    </span>
                                                </button>
                                                <div className="nav-items text-center d-grid gap-8 gap-md-15">
                                                    <Link
                                                         to={'/'}
                                                        className="nav-brand-area d-center gap-2"
                                                    >
                                                        <span className="d-center">
                                                            <img src="assets/images/fav.png" alt="fav" />
                                                        </span>
                                                        <span className="d-center">
                                                            <img
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
                                                                            data-cfemail="214457444f454e614459404c514d440f424e4c"
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
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* header-section end */}
        </>

    )
}

export default CommonHeader