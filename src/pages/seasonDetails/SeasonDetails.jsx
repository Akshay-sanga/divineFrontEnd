import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import ImageGallery from 'react-image-gallery' // Assuming you're using this library
import "react-image-gallery/styles/css/image-gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getallgallerydataslice, getallvideodataslice, getseasondetailsdataslice, getseasontestimonialdataslice } from '../../redux/UserSlice';
import { CaretLeft, CaretRight, Microphone, Plus, Star } from 'phosphor-react';
import limitHtmlWords from '../../utils/Htmlwordlimit';
import { icon, shape, images } from '../../../public/assets/images/images';
import FAQSection from '../../components/FAQSection';

const SeasonDetails = () => {
  const params = useLocation();
  const { slug } = params.state || {};
  const [gallerydata, setGallerydata] = useState([]);
  const dispatch = useDispatch();
  const [videoOpen, setVideoOpen] = useState(false);
  const [videourl, setVideoUrl] = useState(false);
  const [videodata, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seasontestimonial, setSeasonTestimonial] = useState([]);
  const [seasonDetails, setSeasonDetails] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [winnersData, setWinnersData] = useState([]);


  // Season Details Api Data Function
  const fetchSeasonDetails = async () => {
    setLoading(true);
    try {
      const res = await dispatch(getseasondetailsdataslice(slug)).unwrap();
      console.log('season details data response on screen', res.data)
      if (res.status === 200) {
        setSeasonDetails(res.data.season);
        setGallerydata(res.data.gallery);
        setSeasonTestimonial(res.data.testimonials);
        setVideoData(res.data.videos);
        setFaqData(res.data.faqs);
        setWinnersData(res.data.winners);
      } else {
        console.error('Failed to fetch season details');
      }

    } catch (error) {
      console.error('Error fetching season details', error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchSeasonDetails();
  }, []);

  // Convert gallerydata into objects required by ImageGallery
  const galleryItems = gallerydata.map(item => ({
    original: item.image,
    thumbnail: item.image, // or a separate thumbnail URL if available
  }));
  return (
    <>
      {/* banner section start*/}
      <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
        <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
          <div className="row">
            <div className="col-xxl-12 cus-z1 text-center">
              <div className="section-area">
                <h2 className="fs-two mb-3 mb-md-5">
                  {
                    seasonDetails?.season_name

                  }
                </h2>
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
                      <span className="p6-color">Season Details</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section end */}
      {/* Season Details Section start */}
      <section className="event-single s1-bg-color pt-120" >
        <div className="container">
          <div className="row gy-7 gy-md-6" >
            <div className="col-lg-12">
              <div className="design-system  flex-column gap-3 gap-md-8 gap-lg-12 n1-bg-color px-4 px-md-12 px-lg-15 py-8 py-md-15">
                <div className="row justify-content-start">
                  <div className="col-md-12 d-center flex-column align-items-start gap-3 gap-md-4" >
                    <div className="d-center gap-2 gap-md-3">
                      <span className="p6-bg-color n1-color py-2 px-3 px-md-4">
                        Season
                      </span>
                      <span className="p6-bg-color n1-color py-2 px-3 px-md-4">
                        {
                          seasonDetails?.address
                        }
                      </span>
                      {/* <span className="n2-color">August 18, 2025</span> */}
                    </div>
                    <h2 className="n2-color">{
                      seasonDetails?.season_name
                    }</h2>

                    <div
                      className="n3-color"
                      dangerouslySetInnerHTML={{
                        __html: (seasonDetails?.about),
                      }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Event Section end */}
      {/* Event Section start */}
      {/* <section className="event-single s1-bg-color pt-8 pt-md-15">
        <div className="container-fluid banner-carousel-third position-relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide mx-0">
              <div className="slide-single position-relative transition d-grid align-items-center">
                <div className="banner-img position-relative  object-one">
                  <img
                    src="assets/images/event-img-13.webp"
                    className="w-100 transition"
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide mx-0">
              <div className="slide-single position-relative transition d-grid align-items-center">
                <div className="banner-img position-relative  object-one">
                  <img
                    src="assets/images/event-img-14.webp"
                    className="w-100 transition"
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide mx-0">
              <div className="slide-single position-relative transition d-grid align-items-center">
                <div className="banner-img position-relative  object-one">
                  <img
                    src="assets/images/event-img-15.webp"
                    className="w-100 transition"
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Event Section end */}
      {/* Winners start */}
      {
        winnersData?.length > 0 && (
          <section className="team-section s1-bg-color pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                    <span className="p6-color fw-semibold">Winners</span>
                    <h2 className="fs-two">Our Winners</h2>
                  </div>
                </div>
              </div>
              <div className="row cus-row gy-7 gy-xl-8 justify-content-center justify-content-sm-start">
                {
                  loading ? (
                    <p>Loading...</p>
                  ) : (
                    winnersData && winnersData?.length > 0 ? (
                      winnersData.map((item, index) => (

                        <div className="col-8 col-sm-6 col-lg-4" key={index}>
                          <div className="single-item d-grid gap-3 gap-xl-4 position-relative">
                            <div className="image-area d-center position-relative">
                              <img
                                src={item.image}
                                className="w-100 pe-none"
                                alt="image"
                              />
                              <ul className="d-center hover-active d-grid justify-content-start position-absolute top-0 end-0 m-3 m-md-4 gap-1 gap-md-1 social-area transition">
                                <li>
                                  <a
                                    href="https://www.facebook.com/"
                                    aria-label="Facebook"
                                    className="d-center rounded-circle single-item transition"
                                  >
                                    <span className="d-center fs-six n1-color">
                                      <i className="fab fa-facebook-f" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://twitter.com/"
                                    aria-label="Twitter"
                                    className="d-center rounded-circle single-item transition"
                                  >
                                    <span className="d-center fs-six n1-color">
                                      <i className="fab fa-twitter" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.instagram.com/"
                                    aria-label="Instagram"
                                    className="d-center rounded-circle single-item transition"
                                  >
                                    <span className="d-center fs-six n1-color">
                                      <i className="fab fa-instagram" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/"
                                    aria-label="youtube"
                                    className="d-center rounded-circle single-item transition"
                                  >
                                    <span className="d-center fs-six n1-color">
                                      <i className="fa-brands fa-youtube" />
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                <span className="d-center fs-four n1-color">
                                  {/* <i className="ph ph-microphone" /> */}
                                  <Star size={24} weight="bold" color="#000" />
                                </span>
                                <span className="fs-seven">Rank : {item.rank}</span>
                              </span>
                            </div>
                            <div className="text-area">
                              <Link to={'#'}>
                                <h5 className="mb-2 n2-color">{item.name}</h5>
                              </Link>
                              {/* <span className="n3-color fw-bold fs-nine">
                            Director of Sales
                          </span> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Data not available</p>
                    )
                  )
                }

              </div>
            </div>
          </section>
        )}
      {/* Winners end */}
      {/* Gallery Section start */}
      <section className="team-section position-relative pb-120 pt-120" style={{ borderTop: '1px solid' }}>
        <div className="container mb-10">
          <div className="section-area d-grid gap-3 gap-md-4 text-one">
            <span className="p6-color fw-semibold text-center">GALLERY</span>
            <h2 className="fs-two text-center">Gallery</h2>
          </div>
        </div>

        <section className="gallery-one">
          <div className="container">
            {loading ? (
              <h1 style={{ color: 'white' }}>Loading....</h1>
            ) : galleryItems.length > 0 ? (
              <ImageGallery items={galleryItems} />
            ) : (
              <p>No Data Available</p>
            )}
          </div>
        </section>
      </section>
      {/* Gallery Section end */}
      {/* Video Section start */}
      <section className="testimonial-section third s1-bg-color pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                <span className="p6-color fw-semibold">Videos</span>
                <h2 className="fs-two">Season Videos</h2>
              </div>
            </div>
          </div>
          <div className="row cus-row justify-content-center justify-content-md-start gy-4 gy-md-6">


            {loading ? (
              <h1 style={{ color: 'white' }}>Loading....</h1>
            ) : videodata && videodata.length > 0 ? (
              videodata.map((item, index) => (

                <div className="col-9 col-md-6 col-xl-4" key={index}>
                  <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                    <div className="d-center d-grid gap-3 gap-md-4">
                      <div className="img-area transition position-relative" style={{ borderRadius: '5%', width: '100%', height: '250px', }}>
                        <img
                          src={item.front_image}
                          className=""
                          alt="user"
                          style={{ borderRadius: '4%', width: '100%', height: '240px' }}
                        />
                        <button
                          onClick={() => {

                            setVideoOpen(true)
                            setVideoUrl(item.video_link)
                          }
                          }
                          className="play-btn position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '24px',
                          }}
                        >
                          <i className="fa-solid fa-play" />
                        </button>
                      </div>
                      <div className="d-grid gap-1 gap-md-2">
                        <p className="designation n3-color transition">
                          Senior Designer, PixelCraft Studios
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              ))
            ) : (
              <p>No Data Available</p>
            )}



          </div>
        </div>
      </section>
      {/* Videos Section end */}

      {videoOpen && (
        <div
          className="video-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1050,
          }}
          onClick={() => setVideoOpen(false)} // close on background click
        >
          <div style={{ position: 'relative', width: '80%', maxWidth: '800px' }}>
            <iframe
              width="100%"
              height="450"
              src={videourl}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* TESTIMONIAL start */}
      {
        seasontestimonial.length > 0 && (

          <section className="review-section position-relative pt-120 pb-120">
            <div className="abs-area pe-none">
              <div className="item position-absolute shape-animation d-none d-lg-block start-0 top-0 p-20">
                <img src={shape.reviewshape1} alt="icon" />
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                    <span className="p6-color fw-semibold">TESTIMONIAL</span>
                    <h2 className="fs-two">Reviews</h2>
                  </div>
                </div>
              </div>
              <div className="row gy-6 gy-lg-0 align-items-center justify-content-between">


                <div className="col-lg-6" >
                  <div className="swiper testimonial-carousel">
                    <div className="swiper-wrapper">

                      {/* Testimonial slider */}
                      <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                          delay: 2000, // slide every 2.5s
                          disableOnInteraction: false, // keep autoplay after user interaction
                        }}
                        style={{ padding: '30px' }}
                        className="testimonial-carousel"
                      >
                        {loading ? (
                          <p>Content is loading. Please wait...</p>
                        ) : seasontestimonial && seasontestimonial.length > 0 ? (
                          seasontestimonial.map((item, index) => (
                            <SwiperSlide key={index} style={{ width: '100%' }}>
                              <div className="single-item reveal-object object-two" >
                                <div className="box-area">
                                  <img src="assets/images/icon/quote-icon.webp" alt="image" />
                                </div>
                                <div className="d-center flex-wrap gap-4 justify-content-between">
                                  <div className="text-area">
                                    <h5 className="mb-1 n2-color">{item.name}</h5>
                                  </div>
                                  <ul className="d-center justify-content-end mb-2 ms-4">
                                    <li className="rounded-circle ms-n4">
                                      <img
                                        style={{ width: "60px", height: "60px" }}
                                        className="cus-border border border-2 b-fifth rounded-circle"
                                        src={item?.front_image}
                                        alt="Profile"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="n3-color fw-mid fs-five my-6 my-md-10"
                                  dangerouslySetInnerHTML={{ __html: item.desp }}
                                />
                              </div>
                            </SwiperSlide>
                          ))
                        ) : (
                          <p>No testimonials available</p>
                        )}
                      </Swiper>



                    </div>
                  </div>

                  <span className="position-relative d-center cus-border border-bottom b-second" />

                </div>


                <div className="col-lg-6">
                  <div
                    className="img-area d-center position-relative pt-120 pb-120"
                    data-bg="./assets/images/video-bg-2.webp"
                    style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${images.videobg2})` }}
                  >
                    <div className="py-20 my-10 my-md-20">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }

      {
        faqData.length > 0 && (

          <FAQSection faqData={faqData} />
        )
      }
      {/* Faq Section end */}
    </>

  )
}

export default SeasonDetails