import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getContactslicedata } from '../../redux/UserSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        msg: "",
    });



    // Your submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(getContactslicedata(form)).unwrap();
            toast.success(res.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
            });

            setForm({
                name: "",
                phone: "",
                email: "",
                subject: "",
                msg: "",
            });
        } catch (error) {
            toast.error(error.message || "Something went wrong!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
            });
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, [])

    return (
        <>
            {/* banner section start*/}
            <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
                <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
                    <div className="row">
                        <div className="col-xxl-12 cus-z1 text-center">
                            <div className="section-area">
                                <h2 className="fs-two mb-3 mb-md-5">Contact Us</h2>
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
                                            <span className="p6-color">Contact Us</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
            {/* Contact Section start */}
            <section className="contact-section second s1-bg-color pt-120">
                <div className="container pb-120">
                    <div className="row gy-8 gy-lg-0 align-items-center justify-content-center">
                        <div className="col-md-9 col-lg-5 order-1 order-lg-0">
                            <div className="d-grid gap-5 gap-md-8  reveal-text text-one">
                                <div className="section-text d-grid gap-3 gap-md-4">
                                    <span className="p6-color fw-semibold">CONTACT</span>
                                    <h2 className="fs-two">Get in touch with us!</h2>
                                    <p className="fs-eight n3-color">
                                        Get in touch with us for inquiries, support, or collaboration
                                        opportunities. We're here to help!
                                    </p>
                                </div>
                                <ul className="d-center justify-content-start gap-2 gap-md-3 social-area">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            aria-label="Facebook"
                                            className="d-center n1-bg-color rounded-circle transition"
                                        >
                                            <span className="d-center fs-seven p6-color">
                                                <i className="fab fa-facebook-f" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/"
                                            aria-label="Twitter"
                                            className="d-center n1-bg-color rounded-circle transition"
                                        >
                                            <span className="d-center fs-seven p6-color">
                                                <i className="fab fa-twitter" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            aria-label="Instagram"
                                            className="d-center n1-bg-color rounded-circle transition"
                                        >
                                            <span className="d-center fs-seven p6-color">
                                                <i className="fab fa-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.dribbble.com/"
                                            aria-label="dribbble"
                                            className="d-center n1-bg-color rounded-circle transition"
                                        >
                                            <span className="d-center fs-seven p6-color">
                                                <i className="fa-brands fa-dribbble" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-6 col-xxl-5 d-flex flex-column gap-3 gap-md-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="d-center p6-color fs-five">
                                                <i className="ph ph-envelope-open" />
                                            </span>
                                            <span className="n2-color">Address</span>
                                        </div>
                                        <p className="n3-color">
                                            Near Chandila Chowk Sector 82 <br /> Faridabad 121002
                                        </p>
                                    </div>
                                    <div className="col-6 col-xxl-5 d-flex flex-column gap-3 gap-md-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="d-center p6-color fs-five">
                                                <i className="ph ph-clock" />
                                            </span>
                                            <span className="n2-color">Call Us</span>
                                        </div>
                                        <a href="tel:9350065004" className="">
                                            +91 72 9001 9009
                                        </a>
                                        {/* <p className="n3-color">Monday -&gt; Saturday 9AM to 10PM</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-grid gap-4 gap-md-6">
                            <div className="form-area box-shadow-p1 n1-bg-color rounded-4 d-grid gap-3 gap-md-4 px-3 px-md-8 py-5 py-md-8">
                                <form className="row gy-4 gy-md-6" action="#" onSubmit={handleSubmit}>
                                    <div className="col-md-6">
                                        <div className="single-box d-grid gap-1">
                                            <label className="n2-color fs-seven text-capitalize">
                                                name <span className="p2-color">*</span>
                                            </label>
                                            <div
                                                id="name-enter"
                                                className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                                            >
                                                <span className="d-center fs-five n3-color">
                                                    <i className="ph ph-smiley" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={(e) =>
                                                        setForm({ ...form, name: e.target.value })
                                                    }
                                                    className="w-100 n2-color"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box d-grid gap-1">
                                            <label className="n2-color fs-seven text-capitalize">
                                                email <span className="p2-color">*</span>
                                            </label>
                                            <div className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2">
                                                <span className="d-center fs-five n3-color">
                                                    <i className="ph ph-envelope-simple" />
                                                </span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={(e) =>
                                                        setForm({ ...form, email: e.target.value })
                                                    }
                                                    placeholder="Your email address"
                                                    className="w-100 n2-color"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box d-grid gap-1">
                                            <label className="n2-color fs-seven text-capitalize">
                                                phone <span className="p2-color">*</span>
                                            </label>
                                            <div
                                                id="phone-enter"
                                                className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                                            >
                                                <span className="d-center fs-five n3-color">
                                                    <i className="ph ph-phone-call" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={(e) =>
                                                        setForm({ ...form, phone: e.target.value })
                                                    }
                                                    placeholder="Phone"
                                                    className="w-100 n2-color"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box d-grid gap-1">
                                            <label className="n2-color fs-seven text-capitalize">
                                                subject <span className="p2-color">*</span>
                                            </label>
                                            <div
                                                id="subject-enter"
                                                className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                                            >
                                                <span className="d-center fs-five n3-color">
                                                    <i className="ph ph-info" />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={(e) =>
                                                        setForm({ ...form, subject: e.target.value })
                                                    }
                                                    placeholder="Your subject"
                                                    className="w-100 n2-color"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-box d-grid gap-1">
                                            <label className="n2-color fs-seven text-capitalize">
                                                message <span className="p2-color">*</span>
                                            </label>
                                            <div
                                                id="message-enter"
                                                className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                                            >
                                                <textarea
                                                    rows={5}
                                                    placeholder="Enter a message here..."
                                                    name="msg"
                                                    value={form.msg}
                                                    onChange={(e) =>
                                                        setForm({ ...form, msg: e.target.value })
                                                    }
                                                    className="w-100 n2-color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button className="box-style box-second first-alt transition d-center py-2 py-md-3 px-4 px-md-6 w-100">
                                            <span className="fs-eight fw-semibold">Get In Touch</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="single-box position-relative position-relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.59877108524!2d77.15426248515463!3d28.40246849811216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1756623366555!5m2!1sen!2sin"
                                    className="border-0"
                                />
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.59877108524!2d77.15426248515463!3d28.40246849811216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1756623366555!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section end */}
        </>

    )
}

export default ContactPage