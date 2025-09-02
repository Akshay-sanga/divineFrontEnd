import React, { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getalldataslice } from '../../redux/UserSlice';
import limitHtmlWords from '../../utils/Htmlwordlimit';
import { Link } from 'react-router-dom';

const AllSeason = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [homeData, setHomeData] = useState([]);
    const [season, setSeason] = useState([]);


    const fetchHomeData = async () => {
        setLoading(true);
        try {
            const response = await dispatch(getalldataslice()).unwrap();
            console.log('response', response)
            if (response.status === 200) {
                setHomeData(response);
                const descOrder= response.season.slice().reverse();
                setSeason(descOrder);
            } else {
                console.error('Failed to fetch home data');
            }
        } catch (error) {
            console.error('Error fetching home data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchHomeData();
    }, []);
    return (
        <>
            {/* banner section start*/}
            <section className="banner-section inner-banner position-relative pt-12 pt-md-12 pt-xl-20">
                <div className="container position-relative cus-z1 py-20 py-md-20 py-xl-20">
                    <div className="row">
                        <div className="col-xxl-12 cus-z1 text-center">
                            <div className="section-area">
                                <h2 className="fs-two mb-3 mb-md-5">All Seasons</h2>
                            </div>
                            <div className="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb second position-relative m-0 d-center flex-wrap gap-2 gap-md-5">
                                        <li className="breadcrumb-item d-center fs-seven">
                                            <Link to={'/'}  className="fw-normal">
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
                                            <span className="p6-color">All Seasons</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
            {/* All Seasons Section start */}
            <section
                className="style-Wishlist s1-bg-color pt-120 pb-120 object-fit-cover"
                data-bg="./assets/images/event-bg.webp"
            >
                <div className="container">
                    <div className="row gy-7 gy-md-6">
                       
                        <div className="col-lg-12 d-grid gap-4 gap-md-6">

                            {loading ? (
                                <p>Content is loading. Please wait...</p>
                            ) :
                                season?.length > 0 ? (
                                    season.map((item, index) =>
                                    (
                                      <div 
                                      className="single-item px-4 px-md-6 py-4 py-md-5 mb-4" 
                                      key={index}
                                      style={{
                                        background: 'linear-gradient(270deg, #a8e6cf, #117658, #a8e6cf)', // add 3 colors for better effect
                                        backgroundSize: '300% 300%', // give it room to move
                                        animation: 'waveGradient 6s ease infinite', // apply animation
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        color: '#fff'
                                      }}
                                    >
                                        <div className="row gy-6 gy-lg-0 justify-content-between">
                                          
                                          <div className="col-lg-5">
                                            <div className="d-grid gap-3">
                                              <Link to={`/season-details/${item.slug}`} state={{ slug:item.slug }}>
                                                <h4 style={{
                                                  fontWeight: '700',
                                                  fontSize: '1.25rem',
                                                  marginBottom: '0.5rem',
                                                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                                  color: '#fff'
                                                }}>
                                                  {item.season_name}
                                                </h4>
                                              </Link>
                                              
                                              <div className="d-center flex-wrap justify-content-start gap-3 gap-md-4">
                                                <div 
                                                  className="d-center gap-2 py-1 px-3" 
                                                  style={{
                                                    background: '#fff',
                                                    color: '#333',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 600
                                                  }}
                                                >
                                                  {item.season_paid_type === 'paid' ? 'Paid' : 'Free'}
                                                </div>
                                                
                                                <div 
                                                  className="d-center gap-2 py-1 px-3" 
                                                  style={{
                                                    background: '#fff',
                                                    color: '#333',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 600
                                                  }}
                                                >
                                                  {item.address}
                                                </div>
                                              </div>
                                      
                                              <div
                                                className="mt-1 mt-lg-2"
                                                style={{ color: '#f5f5f5' }}
                                                dangerouslySetInnerHTML={{
                                                  __html: limitHtmlWords(item.about || '', 20),
                                                }}
                                              />
                                            </div>
                                          </div>
                                      
                                          <div className="col-lg-2 d-center justify-content-start justify-content-lg-end">
                                            <div className="btn-area d-center justify-content-end">
                                              <Link 
                                                to={`/season-details/${item.slug}`}  
                                                state={{ slug:item.slug }}
                                                className="d-center gap-2 py-2 px-4 fw-semibold"
                                                style={{
                                                  background: '#fff',
                                                  color: '#dd2476',
                                                  borderRadius: '8px',
                                                  transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={e => {
                                                  e.currentTarget.style.background = '#dd2476';
                                                  e.currentTarget.style.color = '#fff';
                                                }}
                                                onMouseOut={e => {
                                                  e.currentTarget.style.background = '#fff';
                                                  e.currentTarget.style.color = '#dd2476';
                                                }}
                                              >
                                                More Details
                                              </Link>
                                            </div>
                                          </div>
                                      
                                        </div>
                                      </div>
                                      

                                    )
                                    )
                                ) : (
                                    <p>No Data Available</p>
                                )}
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* Wishlist Section end */}
            {/* Upcoming Forum start */}
            {/* <section className="upcoming-forum n2-bg-color position-relative pt-120 pb-120">
                <div className="abs-area pe-none">
                    <div className="item position-absolute d-none d-xxl-block start-0 top-0 pt-20 ms-n16">
                        <img src="assets/images/shape/schedule-shape-3.webp" alt="icon" />
                    </div>
                    <div className="item position-absolute d-none d-xxl-block shape-animation-2 bottom-0 end-0 me-n20 mb-20">
                        <img src="assets/images/shape/schedule-shape-9.webp" alt="icon" />
                    </div>
                    <div className="item position-absolute d-none d-xxl-block top-0 end-0 ms-n20">
                        <img src="assets/images/shape/schedule-shape-10.webp" alt="icon" />
                    </div>
                    <div className="item position-absolute d-none d-xxl-block bottom-0 start-0 me-n20 mb-20">
                        <img src="assets/images/shape/schedule-shape-11.webp" alt="icon" />
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-6 gy-md-0 mb-8 mb-md-15 justify-content-center">
                        <div className="col-md-8 col-lg-8 col-xl-7 text-center">
                            <div className="section-area d-grid gap-3 gap-md-4  reveal-text text-one">
                                <span className="p2-color fw-semibold">SCHEDULE</span>
                                <h2 className="fs-two n1-color">Find Your Event Schedule</h2>
                            </div>
                        </div>
                    </div>
                    <div className="singleFilter"></div>
                </div>
            </section> */}
            {/* Upcoming Forum end */}
        </>

    )
}

export default AllSeason