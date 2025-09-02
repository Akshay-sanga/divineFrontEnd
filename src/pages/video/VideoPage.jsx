import React, { useEffect, useState } from 'react'
import { getallvideodataslice } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';

const VideoPage = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [videourl, setVideoUrl] = useState(false);
    const [loading, setLoading] = useState(false);
    const [videodata, setVideoData] = useState([]);
    const dispatch = useDispatch();

      // Videos Data through Redux Api call
      const fetchAllVideoData = async () => {
        setLoading(true);
        try {
          const response = await dispatch(getallvideodataslice()).unwrap();
          console.log('Videos Response', response.data)
          if (response.status === 200) {
            setVideoData(response.data);
          } else {
            console.error('Failed to fetch Videos data');
          }
        } catch (error) {
          console.error('Error fetching Videos data:', error);
        } finally {
          setLoading(false);
        }
      }

      useEffect(() => {
        fetchAllVideoData();
      }, []);
  return (
    <>
      {/* banner section start*/}
      <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
        <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
          <div className="row">
            <div className="col-xxl-12 cus-z1 text-center">
              <div className="section-area">
                <h2 className="fs-two mb-3 mb-md-5">All Videos</h2>
              </div>
              <div className="breadcrumb-area">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb second position-relative m-0 d-center flex-wrap gap-2 gap-md-5">
                    <li className="breadcrumb-item d-center fs-seven">
                      <a href="index.html" className="fw-normal">
                        Home
                      </a>
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
                      <span className="p6-color">Videos</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section end */}
      {/* Video Section start */}
      <section className="testimonial-section third s1-bg-color pt-120 pb-120">
        <div className="container">
          <div className="row cus-row justify-content-center justify-content-md-start gy-4 gy-md-6">

            {/* <div className="col-9 col-md-6 col-xl-4">
                            <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                                <div className="d-center d-grid  gap-3 gap-md-4">
                                    <div className="img-area transition " style={{ borderRadius: '5%' }}>
                                        <img
                                            src="assets/images/blog-img-28.webp"
                                            className="max-un "
                                            alt="user"
                                            style={{ borderRadius: '4%' }}
                                        />
                                    </div>
                                    <div className="d-grid gap-1 gap-md-2">
                                       
                                        <p className="designation n3-color transition">
                                            Senior Designer, PixelCraft Studios
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div> */}
            {loading ? (
              <h1 style={{ color: 'white' }}>Loading....</h1>
            ) : videodata && videodata.length > 0 ? (
              videodata.map((item, index) => (

            <div className="col-9 col-md-6 col-xl-4" key={index}>
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid gap-3 gap-md-4">
                  <div className="img-area transition position-relative" style={{ borderRadius: '5%',width: '100%', height: '250px', }}>
                    <img
                      src={item.front_image}
                      className=""
                      alt="user"
                      style={{ borderRadius: '4%',width: '100%',height:'240px' }}
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


            {/* <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-34.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Lucas Jackson
                    </h6>
                    <p className="designation n3-color transition">
                      Lead Engineer, BrightTech Solutions
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    Collaborating with the Wonder Studio team was an amazing
                    experience. Their creativity and attention to detail truly
                    transformed our vision into reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-35.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Sophia Wright
                    </h6>
                    <p className="designation n3-color transition">
                      Creative Director, Visionary Studios
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    The team at Wonder Studio brought our ideas to life in a way we
                    never imagined. Their professionalism and expertise were evident
                    in every project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-36.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      James Martin
                    </h6>
                    <p className="designation n3-color transition">
                      CEO, FutureTech Innovations
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    Working with Wonder Studio exceeded all our expectations. Their
                    team delivered unique designs that captured the spirit of our
                    brand and vision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-37.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Ava Lee
                    </h6>
                    <p className="designation n3-color transition">
                      Head of Operations, GreenTech
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    Our partnership with Wonder Studio has been incredibly
                    rewarding. Their creative team took our ideas to the next level
                    with impressive designs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-38.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Ethan Clark
                    </h6>
                    <p className="designation n3-color transition">
                      Chief Designer, Style Media
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    We couldn't be happier with the results from Wonder Studio.
                    Their team truly understood our needs and delivered exceptional
                    design work that speaks to our brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-39.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Mia Scott
                    </h6>
                    <p className="designation n3-color transition">
                      Director of Marketing, Horizon
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    It was an incredible experience working with Wonder Studio.
                    Their team's creativity and precision made our brand stand out
                    in an incredibly competitive market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-40.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Isabella King
                    </h6>
                    <p className="designation n3-color transition">
                      Head of Strategy, Wave Digital
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    The team at Wonder Studio worked closely with us to craft
                    designs that truly represent our brand's vision. Their attention
                    to detail was outstanding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-6 col-xl-4">
              <div className="single-item transition d-grid gap-3 gap-md-5 n1-bg-color py-4 py-md-6 px-3 px-md-6">
                <div className="d-center d-grid justify-content-start gap-3 gap-md-4">
                  <div className="img-area transition rounded-circle">
                    <img
                      src="assets/images/user-img-41.webp"
                      className="max-un rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div className="d-grid gap-1 gap-md-2">
                    <h6 className="n2-color transition fw-semibold mt-2">
                      Liam Rodriguez
                    </h6>
                    <p className="designation n3-color transition">
                      Product Manager, TechRise
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="n3-color transition">
                    The collaboration with Wonder Studio has been transformative for
                    our brand. Their innovative approach and consistent results have
                    exceeded our expectations.
                  </p>
                </div>
              </div>
            </div> */}
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
    </>
  )
}

export default VideoPage