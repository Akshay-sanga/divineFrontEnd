import React, { use, useEffect, useState } from 'react'
import Sidebar from '../../components/Layout/sidebar/Sidebar'
import Header from '../../components/Layout/header/Header'
import Footer from '../../components/Layout/footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDispatch } from 'react-redux';
import { getallartistdataslice, getalldataslice, getseasontestimonialdataslice } from '../../redux/UserSlice';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { images } from '../../../public/assets/images/images';
import LimitedHtmlContent from '../../components/LimitedHtmlContent';
import Skeleton from '../../components/skeleton/Skeleton';
const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [homeData, setHomeData] = useState([]);
  const [season, setSeason] = useState([]);
  const [slider, setSlider] = useState([]);
  const [artist, setArtist] = useState([]);
  const [filterseason, setFilterSeason] = useState(null);
  const [seasontestimonial, setSeasonTestimonial] = useState([]);

  const fetchHomeData = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getalldataslice()).unwrap();
      if (response.status === 200) {
        const sliderData = response.slider;
        setSlider(sliderData);
        const filterData = response.season.filter((item) => item.type === 'new')
        setHomeData(response);
        const descSeason = response.season.slice().reverse();
        setSeason(descSeason);
        setFilterSeason({
          season_name: filterData[0]?.season_name || 'Default Season',
          season_id: filterData[0]?.id || '',
          season_type: filterData[0]?.type || '',
          season_about: filterData[0]?.about || '',
          season_address: filterData[0]?.address || '',
          season_paid_type: filterData[0]?.paid_type || '',
          season_email: filterData[0]?.email || '',
          season_video_link: filterData[0]?.video_link || '',

        });
      } else {
        console.error('Failed to fetch home data');
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    } finally {
      setLoading(false);
    }
  }


  // Artist Data through Redux Api call
  const fetchArtistData = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getallartistdataslice()).unwrap();
      console.log('Artist Response', response)
      if (response.status === 200) {
        setArtist(response.artists);
      } else {
        console.error('Failed to fetch Artist data');
      }
    } catch (error) {
      console.error('Error fetching Artist data:', error);
    } finally {
      setLoading(false);
    }
  }


  // Testimonial Data through Redux Api call
  const fetchSeasonTestimonial = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getseasontestimonialdataslice()).unwrap();
      console.log('Season Testimonial Response', response.data)
      if (response.status === 200) {
        setSeasonTestimonial(response.data);
      } else {
        console.error('Failed to fetch Season Testimonial data');
      }
    } catch (error) {
      console.error('Error fetching Season Testimonial data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchArtistData();
    fetchHomeData();
    fetchSeasonTestimonial();
  }, []);



  return (
    <>
      <main className="viewport-container position-relative">

        <Header />
        <Sidebar />
        {/* banner section start*/}
        <section className="banner-section n2-bg-color  position-relative">
          <div className="container-fluid px-0 banner-carousel position-relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={false}
              className="mySwiper"
            >
              {loading ? (
                <>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Skeleton animation="wave" />
                  </div>
                </>

              ) :
                slider && slider?.length > 0 ? (
                  slider?.map((slider, index) => (

                    <SwiperSlide key={slider.id}>
                      <div className="slide-single ps-0 mt-2 mb-0 mb-lg-2 py-0 position-relative  align-items-center">
                        <div className="banner-img pe-none position-absolute start-0 end-0 z-0">
                        </div>
                        <img src={slider?.image} className="max-un sliderImage" alt="image" />

                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p>No data available</p>

                )
              }


            </Swiper>
          </div>
        </section>
        {/* banner section end */}

        {/* About Us start */}
        <section className="AbStartSection position-relative pt-120 pb-120">
          <div className="abs-area pe-none">
            <div className="item position-absolute d-none d-lg-block end-0 top-0 pt-12">
              <img src="assets/images/shape/about-shape-1.png" alt="icon" />
            </div>
            <div className="item position-absolute d-none d-lg-block start-0 bottom-0 ms-n20 mb-n8">
              <img
                src="assets/images/shape/about-shape-2.png"
                className="m-n10"
                alt="icon"
              />
            </div>
          </div>
          <div className="container position-relative">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4 reveal-text text-three">

                  <span className="p6-color fw-semibold">About the Program</span>
                  <h2 className="fs-two">Hunar Voice of India</h2>
                </div>
              </div>
            </div>
            <div className="row gy-10 gy-md-0 justify-content-between">
              <div className='AboutSectionDesp' >

                <div className="d-grid gap-3 gap-md-4 mb-6">
                  <div className="n3-color"
                    dangerouslySetInnerHTML={{
                      __html: filterseason?.season_about,
                    }}
                  />

                </div>
              </div>


            </div>

          </div>
          <div className='AboutSectionImages'>

            <div className="col-md-6 pe-0 pe-lg-20 order-1 order-lg-0">
              <div className="image-area circle-text-bg d-center position-relative">
                <div className=" object-one">
                  <img
                    src="assets/images/about-us-img-1.webp"
                    className="w-100 mt-6 mt-lg-20 ms-4 ms-lg-20 circle-img"
                    alt="image"
                  />
                </div>

              </div>
            </div>
            <div className="col-md-6 ps-3 ps-lg-20 overflow-hidden">

              <div className=" reveal-overlay first-item">
                <img
                  src="assets/images/about-us-img-2.webp"
                  className="w-100"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Us end */}

        {/* Season start */}
        <section className="upcoming-forum pt-120 pb-120">
          <div className="container">
            <div className="row gy-6 gy-md-0 mb-8 mb-md-15 justify-content-between align-items-end">
              <div className="col-md-8 col-lg-8 col-xl-7">
                <div className="section-area d-grid gap-3 gap-md-4 reveal-text text-one">
                  <span className="p6-color fw-semibold">SEASONS</span>
                  <h2 className="fs-two">All Seasons</h2>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-5">
                <div className="btn-area gap-1 d-center justify-content-start justify-content-md-end">
                  <Link
                    to="/all-season"
                    className="box-style box-second first-alt d-center gap-2 py-2 py-md-3 px-3 px-md-4 px-lg-6"
                  >
                    <span className="fs-seven">More Seasons</span>
                  </Link>
                  <Link
                    to={'/audition-form'}
                    className="box-style box-second first-alt d-center gap-2 py-2 py-md-3 px-3 px-md-4 px-lg-6"
                  >
                    <span className="fs-seven">Apply Season</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="singleTab s1-bg-color p-4 p-md-6 p-lg-10">
                <div className="d-center gap-4 gap-md-6 flex-wrap justify-content-between mb-8 mb-md-15">
                  <h4 className="fw-bold n2-color">Seasons</h4>

                </div>
                <div className="tabContents">
                  <div className="tabItem d-grid gap-4 gap-md-6 active">

                    {loading ? (
                      <p>Content is loading. Please wait...</p>
                    ) :
                      season?.length > 0 ? (
                        season.map((item, index) =>
                        (
                          <div key={`${index}-season`}>
                            <div
                              className="single-item d-flex flex-column align-items-start flex-wrap px-4 py-3 gap-3"
                              style={{
                                borderRadius: '12px',
                                background: 'linear-gradient(270deg, #a8e6cf, #117658, #a8e6cf)', // more colors
                                backgroundSize: '300% 300%', // more room to move
                                animation: 'waveGradient 6s ease infinite', // slower for smooth wave
                                color: '#333',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                              }}
                            >
                              {/* Title */}
                              <Link to={`/season-details/${item.slug}`} state={{ slug: item.slug }}>
                                <h4 style={{
                                  fontWeight: '700',
                                  fontSize: '1.25rem',
                                  marginBottom: '0.5rem',
                                  color: '#fff',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                }}>
                                  {item.season_name}
                                </h4>
                              </Link>

                              {/* Tags */}
                              <div className="d-flex flex-wrap gap-2">
                                <span style={{
                                  background: '#fff',
                                  color: '#333',
                                  borderRadius: '20px',
                                  padding: '4px 12px',
                                  fontSize: '0.85rem',
                                  fontWeight: '600',
                                }}>
                                  {item.season_paid_type === 'paid' ? 'Paid' : 'Free'}
                                </span>
                                <span style={{
                                  background: '#fff',
                                  color: '#333',
                                  borderRadius: '20px',
                                  padding: '4px 12px',
                                  fontSize: '0.85rem',
                                  fontWeight: '600',
                                }}>
                                  {item.address}
                                </span>
                              </div>

                              {/* Description */}
                              <LimitedHtmlContent
                                className="mt-2"
                                html={item.about}
                                wordLimit={20}
                                style={{
                                  fontSize: '0.9rem',
                                  opacity: 0.9,
                                  lineHeight: 1.4
                                }}
                              />
                            </div>
                          </div>


                        )

                        )) : (
                        <p>No data available</p>

                      )}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Season end */}

        {/* video section start */}
        <section className="video-section pb-120">

          <div className="container-fluid px-0">
            <div
              className="img-area d-center position-relative pt-120 pb-120"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${images.videobg1})` }}
            >
              <div className="py-20 my-10 my-md-20">
                <div className="video-bg-thumb d-center position-absolute">
                  <a
                    href={
                      filterseason?.season_video_link
                        ? filterseason.season_video_link.replace('/embed/', '/watch?v=')
                        : '#'
                    }
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

        {/* TESTIMONIAL start */}
        <section className="review-section position-relative pt-120 pb-120">
          <div className="abs-area pe-none">
            <div className="item position-absolute shape-animation d-none d-lg-block start-0 top-0 p-20">
              <img src="assets/images/shape/review-shape-1.webp" alt="icon" />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                  <span className="p6-color fw-semibold">TESTIMONIAL</span>
                  <h2 className="fs-two">Program Reviews</h2>
                </div>
              </div>
            </div>
            <div className="row gy-6 gy-lg-0 align-items-center justify-content-between">


              <div className="col-lg-6" >


                {/* <div className="swiper testimonial-carousel">
                  <div className="swiper-wrapper">

              

                    {
                      loading ? (
                        <p>Content is loading. Please wait...</p>
                      ) : (
                        seasontestimonial && seasontestimonial.length > 0 ? (
                          seasontestimonial.map((item, index) => (
                            <div className="swiper-slide" key={`${index}-testimonial`}>
                              <div className="single-item  reveal-object object-two">
                                <div className="box-area">
                                  <img src="assets/images/icon/quote-icon.webp" alt="image" />
                                </div>
                                <div className="d-center flex-wrap gap-4 justify-content-between">
                                  <div className="text-area">
                                    <a href="javascript:void(0)">
                                      <h5 className="mb-1 n2-color">{item.name}</h5>
                                    </a>
                                  
                                  </div>
                                  <ul className="d-center justify-content-end mb-2 ms-4">
                                    <li className="rounded-circle ms-n4">
                                      <img
                                        style={{ width: '60px', height: '60px' }}
                                        className="cus-border border border-2 b-fifth rounded-circle"
                                        src={item.image}
                                        alt="Profile"
                                      />
                                    </li>

                                  </ul>
                                </div>


                                <div className="n3-color fw-mid fs-five my-6 my-md-10"
                                  dangerouslySetInnerHTML={{
                                    __html: item.desp,
                                  }}
                                />
                              </div>
                            </div>

                          ))
                        ) : (
                          <p>No testimonials available</p>
                        ))
                    }


                  </div>
                </div> */}
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
                                  src={item.image}
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


                <span className="position-relative d-center cus-border border-bottom b-second" />
                <div className="slider-btn w-100 gap-2 gap-md-3 d-center justify-content-start mt-6 mt-md-10 position-relative">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    className="ara-prev position-relative cus-border border b-fourth box-area box-one box-style box-second second-alt d-center slide-button"
                  >
                    <span className="fs-five d-center">
                      <i className="ph ph-caret-left" />
                      <CaretLeft size={24} weight="bold" />
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    className="ara-next position-relative cus-border border b-fourth box-area box-one box-style box-second second-alt d-center slide-button"
                  >
                    <span className="fs-five d-center">
                      <CaretRight size={24} weight="bold" />
                      {/* <i className="ph ph-caret-right" /> */}
                    </span>
                  </button>
                  <div className="abs-area pe-none d-center w-100">
                    <div className="item position-absolute shape-animation d-none d-lg-block">
                      <img src="assets/images/shape/review-shape-2.webp" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-6">
                <div
                  className="img-area d-center position-relative pt-120 pb-120"
                  data-bg="./assets/images/video-bg-2.webp"
                  style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(./assets/images/video-bg-2.webp)' }}
                >
                  <div className="py-20 my-10 my-md-20">
                    {/* <div className="video-bg-thumb second d-center position-absolute">
                      <a
                        href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                        className="popup-video btn-popup-animation transition position-absolute z-1 d-center rounded-circle"
                      >
                        <span className="d-center fs-four p6-color z-1">
                          <i className="fa-solid fa-play" />
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIAL end */}


        <Footer />
      </main >
    </>

  )
}

export default HomePage