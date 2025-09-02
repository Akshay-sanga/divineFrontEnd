import React from 'react'
import { Link } from 'react-router-dom'

const FaqPage = () => {
    return (
        <>
            <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
                <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
                    <div className="row">
                        <div className="col-xxl-12 cus-z1 text-center">
                            <div className="section-area">
                                <h2 className="fs-two mb-3 mb-md-5">FAQs</h2>
                            </div>
                            <div className="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb second position-relative m-0 d-center flex-wrap gap-2 gap-md-5">
                                        <li className="breadcrumb-item d-center fs-seven">
                                            <Link  to={'/'} className="fw-normal">
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
                                            <span className="p6-color">FAQs</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
            {/* Faq Section start */}
            <section className="cmn-faq faq-section s1-bg-color pt-120 pb-120">
                <div className="container">
                    <div className="row gy-0 justify-content-between align-items-center">
                        <div className="col-lg-6 ps-3 ps-xl-20">
                            <div className="section-area mb-6 mb-md-10 d-grid gap-3 gap-md-4  reveal-text text-three">
                                <span className="p6-color fw-semibold">FAQs</span>
                                <h2 className="fs-two">Frequently Asked Questions</h2>
                            </div>
                            <div className="img-area transition rounded-circle faq-shape">
                                <img src="assets/images/shape/faq-shape-3.webp" alt="user" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-0">
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6 active">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        1. How can I book an event with you?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            Simply fill out our contact form or call us directly. Our team
                                            will guide you through the process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        2. How can I schedule an event with you?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            You can schedule an event by filling out our online form or by
                                            giving us a call. We are happy to assist.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        3. How do I get a quote for my event?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            Booking an event is easy! Simply fill out our contact form, or
                                            call us to start the process and get your questions answered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        4. What is your cancellation policy?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            You can secure your event by filling out our form or calling
                                            us. We’ll guide you through every step to ensure your event is
                                            set up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        5. How can I arrange an event with you?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            To arrange an event, simply complete the contact form or give
                                            us a call. We will help you through the entire process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-single fourth position-relative d-grid flex-column s1-bg-color py-4 py-md-6 px-4 px-md-6">
                                <h5 className="header-area">
                                    <button
                                        className="accordion-btn text-start n2-color fw-bold d-flex align-items-center position-relative w-100"
                                        type="button"
                                    >
                                        6. How do I book an event?
                                    </button>
                                </h5>
                                <div className="content-area z-1">
                                    <div className="content-body pt-3 pt-md-4">
                                        <p className="n3-color">
                                            To book an event, simply complete our online form or contact
                                            us directly. We'll guide you through the next steps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Faq Section end */}
            {/* video section start */}
            <section className="video-section pb-120">
                <div className="container-fluid px-0">
                    <div
                        className="img-area d-center position-relative pt-120 pb-120"
                        data-bg="./assets/images/video-bg-7.webp"
                    >
                        <div className="py-20 my-10 my-md-20">
                            <div className="video-bg-thumb d-center position-absolute">
                                <a
                                    href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                                    className="popup-video btn-popup-animation transition position-absolute z-1 d-center rounded-circle"
                                >
                                    <span className="d-center fs-four p6-color z-1">
                                        <i className="fa-solid fa-play" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* video section end */}
            {/* Counter Section start */}
            <section className="counter-section position-relative pb-120">
                <div className="abs-area pe-none">
                    <div className="item position-absolute d-none d-lg-block start-0 bottom-0 pt-12 m-10">
                        <img src="assets/images/shape/about-shape-22.webp" alt="icon" />
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-6 gy-md-0 mb-8 mb-md-15 justify-content-center align-items-center text-center">
                        <div className="col-md-7 col-lg-8 col-xl-5">
                            <div className="section-area d-grid gap-3 gap-md-4  reveal-text text-one">
                                <span className="p6-color fw-semibold">WHY SHOULD ATTEND</span>
                                <h2 className="fs-two">Why Should Attend Our Event</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-9 gy-xxl-0 counter-area">
                        <div className="col-md-6 col-xxl-3">
                            <div className="single-item d-grid gap-2 gap-md-4 text-center">
                                <div className="box-area mb-3 mb-md-4">
                                    <img src="assets/images/icon/counter-icon-1.webp" alt="img" />
                                </div>
                                <div className="d-center gap-2 text-center">
                                    <div className="counters d-flex align-items-center">
                                        <span
                                            className="odometer fs-four fw-semibold p6-color"
                                            data-odometer-final={99}
                                        >
                                            0
                                        </span>
                                        <span className="symbol fs-four fw-semibold p6-color">+</span>
                                    </div>
                                    <span className="fs-four fw-semibold n2-color">
                                        Events Hosted
                                    </span>
                                </div>
                                <p className="n2-color">
                                    Bringing professionals together for impactful discussions.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="single-item d-grid gap-2 gap-md-4 text-center">
                                <div className="box-area mb-3 mb-md-4">
                                    <img src="assets/images/icon/counter-icon-2.webp" alt="img" />
                                </div>
                                <div className="d-center gap-2 text-center">
                                    <div className="counters d-flex align-items-center">
                                        <span
                                            className="odometer fs-four fw-semibold p6-color"
                                            data-odometer-final={25}
                                        >
                                            0
                                        </span>
                                        <span className="symbol fs-four fw-semibold p6-color">k+</span>
                                    </div>
                                    <span className="fs-four fw-semibold n2-color">Visitors</span>
                                </div>
                                <p className="n2-color">
                                    Engaging a growing community of business enthusiasts worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="single-item d-grid gap-2 gap-md-4 text-center">
                                <div className="box-area mb-3 mb-md-4">
                                    <img src="assets/images/icon/counter-icon-3.webp" alt="img" />
                                </div>
                                <div className="d-center gap-2 text-center">
                                    <div className="counters d-flex align-items-center">
                                        <span
                                            className="odometer fs-four fw-semibold p6-color"
                                            data-odometer-final={12}
                                        >
                                            0
                                        </span>
                                        <span className="symbol fs-four fw-semibold p6-color">+</span>
                                    </div>
                                    <span className="fs-four fw-semibold n2-color">
                                        Year Experience
                                    </span>
                                </div>
                                <p className="n2-color">
                                    Building a legacy of collaboration and success.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="single-item d-grid gap-2 gap-md-4 text-center">
                                <div className="box-area mb-3 mb-md-4">
                                    <img src="assets/images/icon/counter-icon-4.webp" alt="img" />
                                </div>
                                <div className="d-center gap-2 text-center">
                                    <div className="counters d-flex align-items-center">
                                        <span
                                            className="odometer fs-four fw-semibold p6-color"
                                            data-odometer-final={60}
                                        >
                                            0
                                        </span>
                                        <span className="symbol fs-four fw-semibold p6-color">+</span>
                                    </div>
                                    <span className="fs-four fw-semibold n2-color">
                                        Projects Done
                                    </span>
                                </div>
                                <p className="n2-color">
                                    Bringing professionals together for impactful discussions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter Section end */}
        </>

    )
}

export default FaqPage