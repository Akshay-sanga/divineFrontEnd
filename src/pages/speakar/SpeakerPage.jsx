import React from 'react'
import { Link } from 'react-router-dom'

const SpeakerPage = () => {
    return (
        <>
            {/* banner section start*/}
            <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
                <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
                    <div className="row">
                        <div className="col-xxl-12 cus-z1 text-center">
                            <div className="section-area">
                                <h2 className="fs-two mb-3 mb-md-5">Speakers</h2>
                            </div>
                            <div className="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb second position-relative m-0 d-center flex-wrap gap-2 gap-md-5">
                                        <li className="breadcrumb-item d-center fs-seven">
                                            <Link to={'/'} className="fw-normal">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item d-center fs-seven">
                                            <a href="javascript:void(0)" className="fw-normal">
                                                Pages
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item d-center fs-seven p6-color active"
                                            aria-current="page"
                                        >
                                            <span className="p6-color">Speakers</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
            {/* Team start */}
            <section className="team-section s1-bg-color position-relative pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                                <span className="p6-color fw-semibold">TEAM</span>
                                <h2 className="fs-two">Our Speakers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-row gy-7 gy-xl-8 justify-content-center justify-content-sm-start">
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-1.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Lila Thompson</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Director of Sales
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-2.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">John Smith</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Chief Marketing Officer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-3.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Emily Walker</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Head of Product Design
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-4.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Michael Green</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        VP of Engineering
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-5.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Sophia Miller</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Chief Financial Officer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-6.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">David Brown</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Head of Operations
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-7.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Olivia Johnson</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">VP of Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-8.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Ethan Lewis</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Chief Technology Officer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-6 col-lg-4">
                            <div className="single-area d-grid gap-3 gap-xl-4 position-relative">
                                <div className="image-area overflow-hidden d-center position-relative">
                                    <img
                                        src="assets/images/team-img-9.webp"
                                        className="w-100 pe-none"
                                        alt="image"
                                    />
                                    <span className="box-style box-second second-alt tag-area m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                        <span className="d-center fs-four n1-color">
                                            <i className="ph ph-microphone" />
                                        </span>
                                        <span className="fs-seven">Speaker</span>
                                    </span>
                                    <div className="hover-item d-center flex-column transition-sec cus-border border b-fifth position-absolute z-1">
                                        <ul className="d-center hover-active m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    aria-label="Facebook"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-facebook-f" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/"
                                                    aria-label="Twitter"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    aria-label="Instagram"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fab fa-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/"
                                                    aria-label="youtube"
                                                    className="d-center rounded-circle single-item n1-bg-color transition"
                                                >
                                                    <span className="d-center fs-seven p6-color transition">
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 pe-none">
                                            <span className="d-center fs-four n1-color">
                                                <i className="ph ph-microphone" />
                                            </span>
                                            <span className="fs-seven">Speaker</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-area">
                                    <Link to={'/'}>
                                        <h5 className="mb-2 n2-color">Ava Scott</h5>
                                    </Link>
                                    <span className="n3-color fw-bold fs-nine">
                                        Chief Executive Officer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team end */}
            {/* Schedule Section start */}
            <section className="schedule-section position-relative n1-bg-color pt-120 pb-120">
                <div className="abs-area pe-none">
                    <div className="item item-2 position-absolute shape-animation-2 d-none d-lg-block end-0 bottom-0 mb-10">
                        <img src="assets/images/shape/schedule-shape-14.webp" alt="icon" />
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-6 gy-md-0 mb-8 mb-md-15 justify-content-center text-center">
                        <div className="col-md-8 col-lg-8 col-xl-7">
                            <div className="section-area d-grid gap-3 gap-md-4  reveal-text text-one">
                                <span className="p6-color fw-semibold">SCHEDULE</span>
                                <h2 className="fs-two">Unlock the Day's Schedule</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-6 singleTab third">
                        <div className="col-lg-3 col-xl-2">
                            <ul className="tabLinks d-center justify-content-start flex-wrap gap-1">
                                <li className="nav-links transition active">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            01: SATURDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 06, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            02: SUNDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 07, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            03: MONDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 11, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            04: TUESDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 12, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            05: WEDNESDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 13, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            06: THURSDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 14, 2026</span>
                                    </button>
                                </li>
                                <li className="nav-links transition">
                                    <button className="tablink pb-1 d-grid gap-1 px-2 px-md-5 py-3 py-md-4 text-start">
                                        <span className="fs-eight fw-semibold n2-color">
                                            07: FRIDAY
                                        </span>
                                        <span className="fs-eight n3-color">January 15, 2026</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9 col-xl-10">
                            <div className="tabContents">
                                <div className="tabItem d-grid gap-6 gap-md-6 active">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    2:30 PM - 3:00 PM
                                                </span>
                                                <p className="n3-color">Room 150</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                AI Ethics: Navigating the Challenges
                                            </span>
                                            <p className="n3-color">
                                                A discussion on the ethical considerations surrounding
                                                artificial intelligence.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Join the Discussion
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    3:45 PM - 4:15 PM
                                                </span>
                                                <p className="n3-color">Conference Hall B</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Startup Showcase
                                            </span>
                                            <p className="n3-color">
                                                A spotlight on innovative startups in the tech industry.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Explore Startups
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    4:30 PM - 5:00 PM
                                                </span>
                                                <p className="n3-color">Room 102</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Leadership in Tech
                                            </span>
                                            <p className="n3-color">
                                                Insights from leaders in the tech industry.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Talk</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    5:15 PM - 6:00 PM
                                                </span>
                                                <p className="n3-color">Room 303</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Fireside Chat: The Future of AI
                                            </span>
                                            <p className="n3-color">
                                                An intimate conversation on the future of artificial
                                                intelligence.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                               to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP for Chat</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    6:00 PM - 6:30 PM
                                                </span>
                                                <p className="n3-color">Hall 1</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Closing Remarks
                                            </span>
                                            <p className="n3-color">
                                                A wrap-up of the day’s events and what's coming next.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Attend Closing</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    7:00 PM - 8:00 PM
                                                </span>
                                                <p className="n3-color">Networking Area</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Evening Mixer
                                            </span>
                                            <p className="n3-color">
                                                A relaxed networking session with drinks and appetizers.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Mixer</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    1:30 PM - 2:00 PM
                                                </span>
                                                <p className="n3-color">Room 510</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Digital Transformation in Retail
                                            </span>
                                            <p className="n3-color">
                                                How digital tools are reshaping the retail industry.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Here</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    9:00 PM - 10:00 PM
                                                </span>
                                                <p className="n3-color">Main Auditorium</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Award Ceremony
                                            </span>
                                            <p className="n3-color">
                                                Celebrating the most innovative companies and individuals.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Attend Ceremony
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    10:00 PM - 12:00 AM
                                                </span>
                                                <p className="n3-color">VIP Lounge</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                VIP After Party
                                            </span>
                                            <p className="n3-color">
                                                An exclusive after-party for VIP attendees with cocktails
                                                and music.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Join After Party
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    12:00 AM - 1:00 AM
                                                </span>
                                                <p className="n3-color">Terrace Bar</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Late Night Karaoke
                                            </span>
                                            <p className="n3-color">
                                                Wind down the night with some fun karaoke.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Sing Karaoke</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    10:00 AM - 10:30 AM
                                                </span>
                                                <p className="n3-color">Conference Hall B</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Ice Breaking Session
                                            </span>
                                            <p className="n3-color">
                                                Get to know your fellow attendees and expand your network.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Buy Tickets</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    11:00 AM - 11:30 AM
                                                </span>
                                                <p className="n3-color">Room 101</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Keynote Speech
                                            </span>
                                            <p className="n3-color">
                                                Inspiring words from the industry leader.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Register Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    12:30 PM - 1:00 PM
                                                </span>
                                                <p className="n3-color">Room 412</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Cloud Computing in 2024
                                            </span>
                                            <p className="n3-color">
                                                Exploring the latest developments in cloud computing and
                                                infrastructure.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                               to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join the Talk</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    12:00 PM - 12:45 PM
                                                </span>
                                                <p className="n3-color">Room 202</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Panel Discussion
                                            </span>
                                            <p className="n3-color">
                                                Experts discuss the latest trends in technology.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Webinar</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    1:30 PM - 2:00 PM
                                                </span>
                                                <p className="n3-color">Hall C</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Networking Lunch
                                            </span>
                                            <p className="n3-color">
                                                Enjoy lunch while networking with peers.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    9:00 AM - 9:30 AM
                                                </span>
                                                <p className="n3-color">Conference Hall A</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Opening Ceremony
                                            </span>
                                            <p className="n3-color">
                                                Welcome to the event and opening remarks.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Get Started</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    9:45 AM - 10:15 AM
                                                </span>
                                                <p className="n3-color">Room 303</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Product Demo
                                            </span>
                                            <p className="n3-color">
                                                See the latest tech innovations in action.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Book Demo</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    10:30 AM - 11:00 AM
                                                </span>
                                                <p className="n3-color">Conference Hall C</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Workshop: Digital Marketing
                                            </span>
                                            <p className="n3-color">
                                                Learn the latest strategies for digital marketing success.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Workshop</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    11:30 AM - 12:00 PM
                                                </span>
                                                <p className="n3-color">Room 307</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Tech Startups: Innovation &amp; Growth
                                            </span>
                                            <p className="n3-color">
                                                A look at how startups are driving innovation in tech and
                                                business.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Learn More</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    11:30 AM - 12:00 PM
                                                </span>
                                                <p className="n3-color">Room 201</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Break: Coffee &amp; Networking
                                            </span>
                                            <p className="n3-color">
                                                Take a break and network with fellow attendees.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Grab Coffee</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    12:00 PM - 12:45 PM
                                                </span>
                                                <p className="n3-color">Room 202</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Panel Discussion
                                            </span>
                                            <p className="n3-color">
                                                Experts discuss the latest trends in technology.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Webinar</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    1:30 PM - 2:00 PM
                                                </span>
                                                <p className="n3-color">Hall C</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Networking Lunch
                                            </span>
                                            <p className="n3-color">
                                                Enjoy lunch while networking with peers.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    2:00 PM - 2:30 PM
                                                </span>
                                                <p className="n3-color">Conference Room A</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Breakout Session: Leadership
                                            </span>
                                            <p className="n3-color">
                                                Enhancing leadership skills in a digital world.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    3:00 PM - 3:45 PM
                                                </span>
                                                <p className="n3-color">Room 501</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Cybersecurity: Protecting Data
                                            </span>
                                            <p className="n3-color">
                                                A session on the latest strategies for data security.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Secure Your Spot
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    4:00 PM - 4:30 PM
                                                </span>
                                                <p className="n3-color">Room 102</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Panel Discussion: The Future of AI
                                            </span>
                                            <p className="n3-color">
                                                Industry experts discuss the potential impact of AI in
                                                various sectors.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    4:45 PM - 5:15 PM
                                                </span>
                                                <p className="n3-color">Room 305</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Sustainability in Tech
                                            </span>
                                            <p className="n3-color">
                                                Exploring how technology can be used to promote
                                                environmental sustainability.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Join the Session
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    5:30 PM - 6:00 PM
                                                </span>
                                                <p className="n3-color">Main Auditorium</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Closing Keynote: Innovating for the Future
                                            </span>
                                            <p className="n3-color">
                                                A visionary talk about the future of innovation across
                                                industries.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Attend Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    6:00 PM - 7:00 PM
                                                </span>
                                                <p className="n3-color">Outdoor Patio</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Networking Reception
                                            </span>
                                            <p className="n3-color">
                                                Join us for drinks and light refreshments while networking
                                                with fellow attendees.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    7:00 PM - 9:00 PM
                                                </span>
                                                <p className="n3-color">Ballroom</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">Gala Dinner</span>
                                            <p className="n3-color">
                                                Enjoy an evening of gourmet dining, entertainment, and
                                                networking.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Reserve Your Seat
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    4:00 PM - 4:30 PM
                                                </span>
                                                <p className="n3-color">Room 102</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Panel Discussion: The Future of AI
                                            </span>
                                            <p className="n3-color">
                                                Industry experts discuss the potential impact of AI in
                                                various sectors.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    4:45 PM - 5:15 PM
                                                </span>
                                                <p className="n3-color">Room 305</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Sustainability in Tech
                                            </span>
                                            <p className="n3-color">
                                                Exploring how technology can be used to promote
                                                environmental sustainability.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Join the Session
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    5:30 PM - 6:00 PM
                                                </span>
                                                <p className="n3-color">Main Auditorium</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Closing Keynote: Innovating for the Future
                                            </span>
                                            <p className="n3-color">
                                                A visionary talk about the future of innovation across
                                                industries.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Attend Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    6:00 PM - 7:00 PM
                                                </span>
                                                <p className="n3-color">Outdoor Patio</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Networking Reception
                                            </span>
                                            <p className="n3-color">
                                                Join us for drinks and light refreshments while networking
                                                with fellow attendees.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    7:00 PM - 9:00 PM
                                                </span>
                                                <p className="n3-color">Ballroom</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">Gala Dinner</span>
                                            <p className="n3-color">
                                                Enjoy an evening of gourmet dining, entertainment, and
                                                networking.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Reserve Your Seat
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabItem d-grid gap-6 gap-md-6">
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    9:45 AM - 10:30 AM
                                                </span>
                                                <p className="n3-color">Room 202</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Cybersecurity Trends
                                            </span>
                                            <p className="n3-color">
                                                A session on emerging trends in cybersecurity and how to
                                                stay ahead.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join Session</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    10:45 AM - 11:15 AM
                                                </span>
                                                <p className="n3-color">Room 310</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                The Future of Work
                                            </span>
                                            <p className="n3-color">
                                                How AI and automation are reshaping the workplace.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    11:30 AM - 12:00 PM
                                                </span>
                                                <p className="n3-color">Room 307</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Tech Startups: Innovation &amp; Growth
                                            </span>
                                            <p className="n3-color">
                                                A look at how startups are driving innovation in tech and
                                                business.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Learn More</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    12:30 PM - 1:00 PM
                                                </span>
                                                <p className="n3-color">Room 412</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Cloud Computing in 2024
                                            </span>
                                            <p className="n3-color">
                                                Exploring the latest developments in cloud computing and
                                                infrastructure.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">Join the Talk</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    1:30 PM - 2:00 PM
                                                </span>
                                                <p className="n3-color">Room 510</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                Digital Transformation in Retail
                                            </span>
                                            <p className="n3-color">
                                                How digital tools are reshaping the retail industry.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">RSVP Here</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row gy-4 gy-md-0 single-item align-items-center n1-bg-color py-2 py-md-3 px-4 px-md-6">
                                        <div className="col-md-3 col-lg-3 col-xl-4">
                                            <div className="time-area d-flex flex-column gap-1 align-items-start h-100">
                                                <span className="n2-color fw-bold fs-eight">
                                                    2:30 PM - 3:00 PM
                                                </span>
                                                <p className="n3-color">Room 150</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-5 mid-area d-grid gap-1">
                                            <span className="n2-color fw-bold fs-eight">
                                                AI Ethics: Navigating the Challenges
                                            </span>
                                            <p className="n3-color">
                                                A discussion on the ethical considerations surrounding
                                                artificial intelligence.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-xl-3 btn-area d-center justify-content-start justify-content-md-end">
                                            <Link
                                                to={'/'}
                                                className="box-style box-second first-alt alt-three transition d-center py-2 py-md-3 px-4 px-md-6"
                                            >
                                                <span className="fs-eight fw-semibold">
                                                    Join the Discussion
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Schedule Section end */}
        </>

    )
}

export default SpeakerPage