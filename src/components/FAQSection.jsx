import React, { useState } from 'react';
import { Plus } from 'phosphor-react'; // Assuming react-feather is installed
import '../assets/faq.css';
// import { icon, shape, images } from '../../../public/assets/images/images';
import { icon, shape, images } from '../../public/assets/images/images';
const FAQSection = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section-custom"> {/* Use a unique class for this section */}
            <div className="container">
                <div className="row gy-0 justify-content-between align-items-center">
                    <div className="col-lg-6 ps-3 ps-xl-20">
                        <div className="section-area mb-6 mb-md-10 d-grid gap-3 gap-md-4  text-three">
                            <span className="p6-color fw-semibold">FAQs</span>
                            <h2 className="fs-two">Frequently Asked Questions</h2>
                        </div>
                        <div className="img-area transition rounded-circle faq-shape">
                            <img src={shape.faqshape3} alt="user" />
                        </div>
                    </div>
                    {/* Removed the left column for simplicity, as the image only shows FAQ items */}
                    <div className="col-lg-6 order-1 order-lg-0">


                        <div className="faq-items-wrapper">
                            {faqData && faqData.length > 0 ? (
                                faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        // Apply 'active-faq-item' class when this item is active
                                        className={`accordion-single-custom ${activeIndex === index ? 'active-faq-item' : ''}`}
                                    >
                                        <div className="header-area-custom" onClick={() => handleToggle(index)}>
                                            <h5 className="question-text">
                                                {index + 1}. {item.question} {/* Added index for numbering */}
                                            </h5>
                                            <button className="toggle-button-custom" type="button">
                                                <Plus
                                                    size={24}
                                                    // Rotate for 'X' effect, and ensure color is white when active
                                                    style={{
                                                        transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                                        transition: 'transform 0.3s ease-in-out',
                                                        color: activeIndex === index ? 'white' : 'inherit' // Change color when active
                                                    }}
                                                />
                                            </button>
                                        </div>

                                        {activeIndex === index && (
                                            <div className="content-area-custom">
                                                <p className="answer-text">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No FAQ data available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;