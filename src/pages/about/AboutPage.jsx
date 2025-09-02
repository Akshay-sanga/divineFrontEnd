import React, { useEffect, useState } from 'react'
import { getallartistdataslice, getalldataslice, getallpromotedartistdataslice, getallvideodataslice } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import limitHtmlWords from '../../utils/Htmlwordlimit';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [artist, setArtist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);
    const [videourl, setVideoUrl] = useState(false);
    const [videodata, setVideoData] = useState([]);
    const [season, setSeason] = useState([]);
    const [homeData, setHomeData] = useState([]);
    const [filterseason, setFilterSeason] = useState(null);
    const [promotedartist, setPromotedartist] = useState([]);
    const dispatch = useDispatch();

    // Season Data
    const fetchHomeData = async () => {
        setLoading(true);
        try {
            const response = await dispatch(getalldataslice()).unwrap();
            console.log('response', response)
            if (response.status === 200) {
                const filterData = response.season.filter((item) => item.type === 'new')
                setHomeData(response);
                console.log('filterData', filterData)
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
            console.log('Artist Screen Response', response.artists)
            if (response.status === 200) {
                setArtist(response.artists);
            } else {
                console.error('Failed to fetch Artist Screen data');
            }
        } catch (error) {
            console.error('Error fetching Artist Screen data:', error);
        } finally {
            setLoading(false);
        }
    }
    //Promoted Artist Data through Redux Api call
    const fetchPromotedArtistData = async () => {
        setLoading(true);
        try {
            const response = await dispatch(getallpromotedartistdataslice()).unwrap();
            console.log('Promoted Artist Screen Response', response.data)
            if (response.status === 200) {
                setPromotedartist(response.data);
            } else {
                console.error('Failed to fetch Promoted Artist Screen data');
            }
        } catch (error) {
            console.error('Error fetching Promoted Artist Screen data:', error);
        } finally {
            setLoading(false);
        }
    }

    // Artist Videos Data through Redux Api call
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
        fetchArtistData();
        fetchAllVideoData();
        fetchPromotedArtistData();
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
                                <h2 className="fs-two mb-3 mb-md-5">About Us</h2>
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
                                            <span className="p6-color">About Us</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
            {/* About Us start */}
            <section className="about-us second s1-bg-color position-relative pt-120 pb-120">
                <div className="abs-area pe-none">
                    <div className="item position-absolute shape-animation-2 d-none d-lg-block end-0 top-0 pt-12 m-n10">
                        <img src="assets/images/shape/about-shape-21.webp" alt="icon" />
                    </div>
                </div>
                <div className="container position-relative">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4 reveal-text text-three">
                                {/* <span className="p6-color fw-semibold"></span> */}
                                <h2 className="fs-two">ABOUT MANAGEMENT</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row gy-10 gy-md-0 justify-content-between">
                        <div className="col-md-6 pe-0 pe-lg-20 order-1 order-lg-0">
                            <div className="image-area circle-text-bg d-center position-relative">
                                <div className=" reveal-object object-one">
                                    <img
                                        src="/about-us-img-1.webp"
                                        className="w-100 mt-6 mt-lg-20 ms-4 ms-lg-20 circle-img"
                                        alt="image"
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6 ps-3 ps-lg-20 overflow-hidden">
                            <div className="d-grid gap-3 gap-md-4 pb-120">
                                <p className="n3-color">
                                    
                                </p>
                                <div className="n3-color"
                                  dangerouslySetInnerHTML={{
                                    __html: filterseason?.season_about,
                                  }}
                                />
                               
                            </div>
                            <div className=" reveal-overlay first-item">
                                <img
                                    src="assets/images/about-us-img-2.webp"
                                    className="w-100"
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div> */}

                    <div className="row gy-10 gy-md-0 justify-content-between">
                        <div className="d-grid gap-3 gap-md-4 pb-120">
                            <div className="n3-color"
                                dangerouslySetInnerHTML={{
                                    __html: filterseason?.season_about,
                                }}
                            />

                        </div>
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
                </div>
            </section>
            {/* About Us end */}
            {/* Counter Section start */}
            {/* <section className="counter-section position-relative pt-120 pb-120">
                <div className="abs-area pe-none">
                    <div className="item position-absolute d-none d-lg-block start-0 bottom-0 pt-12 m-10">
                        <img src="assets/images/shape/about-shape-22.webp" alt="icon" />
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-6 gy-md-0 mb-8 mb-md-15 justify-content-between align-items-center">
                        <div className="col-md-7 col-lg-8 col-xl-6">
                            <div className="section-area d-grid gap-3 gap-md-4  reveal-text text-one">
                                <span className="p6-color fw-semibold">WHY SHOULD ATTEND</span>
                                <h2 className="fs-two">Why Should Attend Our Event</h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 col-xl-4">
                            <p className="fs-eight n3-color">
                                Gain insights, network with leaders, and explore opportunities to
                                elevate your professional journey
                            </p>
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
            </section> */}
            {/* Counter Section end */}
            {/* Team start */}
            <section className="team-section s1-bg-color pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                                <span className="p6-color fw-semibold">Promoted Artists</span>
                                <h2 className="fs-two">OUR ARTISTS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-row gy-7 gy-xl-8 justify-content-center justify-content-sm-start">
                        {
                            loading ? (
                                <p>Loading...</p>
                            ) : (
                                promotedartist && promotedartist?.length > 0 ?
                                    (
                                        promotedartist.map((item, index) => (
                                            <div className="col-8 col-sm-6 col-lg-4">
                                                <div className="single-item d-grid gap-3 gap-xl-4 position-relative">
                                                    <div className="image-area d-center position-relative">
                                                        <img
                                                            src={item.image}
                                                            className="w-100 pe-none"
                                                            alt="image"
                                                        />
                                                        {/* <ul className="d-center hover-active d-grid justify-content-start position-absolute top-0 end-0 m-3 m-md-4 gap-1 gap-md-1 social-area transition">
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
                                                </ul> */}
                                                        {/* <span className="box-style box-second second-alt m-4 m-md-6 transition rounded-pill n1-bg-color d-center gap-2 py-1 py-md-2 px-3 px-md-4 position-absolute bottom-0 end-0">
                                                    <span className="d-center fs-four n1-color">
                                                        <i className="ph ph-microphone" />
                                                    </span>
                                                    <span className="fs-seven">Speaker</span>
                                                </span> */}
                                                    </div>
                                                    <div className="text-area">
                                                        <Link to={'/'}>
                                                            <h5 className="mb-2 n2-color">{item.name}</h5>
                                                        </Link>
                                                        <span className="n3-color fw-bold fs-nine">
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                    : (
                                        <p>Data Not Availble</p>
                                    )
                            )
                        }


                    </div>
                </div>
            </section>
            {/* Team end */}

            {/* Artist section start */}
            <section
                className="style-Wishlist s1-bg-color pt-120 pb-120 object-fit-cover"
                data-bg="./assets/images/event-bg.webp"
                style={{ backgroundImage: 'url("./assets/images/event-bg.webp")' }}
            >
                <div className="container">
                    <div className="row gy-7 gy-md-6">
                        <div className="col-lg-12">
                            <div className="top-area d-center flex-wrap justify-content-between gap-3 gap-md-4 p6-bg-color px-4 px-md-6 py-6 py-md-10">
                                <div className="d-center gap-4 gap-md-6">
                                    <div className="d-grid gap-2">
                                        <h5 className="n1-color fs-four">Top Artist</h5>
                                        {/* <span className="n1-color fs-eight">
                                            November 15th 2024- Kursaal Bern
                                        </span> */}
                                    </div>
                                    <div className="item-img">
                                        <img src="assets/images/icon/megaphone-icon.webp" alt="icon" />
                                    </div>
                                </div>
                                <div className="btn-area">
                                    <Link
                                       to={'/audition-form'}
                                        className="box-style box-second first-alt alt-four d-center gap-2 py-2 py-md-3 px-3 px-md-6 px-xl-9" style={{  }}
                                    >
                                        <span className="fs-seven">Apply for Season</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 d-grid gap-4 gap-md-6">
                            {
                                loading ? (
                                    <h3 className='text-center'>Loading....</h3>
                                ) : (
                                    artist && artist.length > 0 ? (
                                        artist.map((item, index) => (
                                            <div className="single-item n1-bg-color px-4 px-md-6 py-4 py-md-5" key={index}>
                                                <div className="row gy-6 gy-lg-0 justify-content-between">
                                                    {/* <div className="col-lg-2 d-center justify-content-start">
                                                    <div className="d-grid gap-1">
                                                        <span className="fs-two fw-bold n2-color">01</span>
                                                        <span className="fs-eight n3-color">Nov, 2025</span>
                                                    </div>
                                                </div> */}
                                                    <div className="col-lg-3 d-center justify-content-start justify-content-lg-center">
                                                        <div className="profile-area d-grid gap-2 gap-md-3  object-one" style={{ width: '150px', height: '150px' }}>
                                                            <img
                                                                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                                                                src={item.thumbnail}
                                                                className="max-un"
                                                                alt="user"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="d-grid gap-3">
                                                            <Link to={'/'}>
                                                                <h5 className="n2-color fw-semibold">
                                                                    {item.artist_name}
                                                                </h5>
                                                            </Link>
                                                            <div className="d-center flex-wrap justify-content-start gap-3 gap-md-4">
                                                                <div className="single-date d-center gap-2 n1-bg-color py-1 px-1 px-md-2">

                                                                    <span className="fs-seven n2-color " >
                                                                        Youtube : {item.title}
                                                                    </span>
                                                                </div>
                                                                {/* <div className="single-date d-center gap-2 n1-bg-color py-1 px-1 px-md-2">
                                                                <span className="d-center p6-color fs-six">
                                                                    <i className="ph ph-map-pin" />
                                                                </span>
                                                                <span className="fs-eight n2-color">London, UK</span>
                                                            </div> */}
                                                            </div>
                                                            <p className="n3-color mt-1 mt-lg-2">
                                                                {item.description
                                                                    .replace(/<[^>]+>/g, '') // remove HTML tags
                                                                    .split(' ')
                                                                    .slice(0, 10)
                                                                    .join(' ') +
                                                                    (item.description.replace(/<[^>]+>/g, '').split(' ').length > 10 ? '…' : '')}

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 d-center justify-content-start justify-content-lg-end">
                                                        <div className="btn-area d-center justify-content-end">
                                                            <Link
                                                                to={'/'}
                                                                className="box-style box-second second-alt bg-transparent cus-border border b-second d-center gap-2 py-2 py-md-3 px-3 px-md-6"
                                                            >
                                                                <span className="fs-seven fw-semibold">Subscriber : {item.subscribers}</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <h3 className='text-center'>No Data Available</h3>
                                    )
                                )
                            }






                        </div>
                    </div>
                </div>
            </section>
            {/* Artist section end */}

            {/* Video Section start */}
            <section className="testimonial-section third s1-bg-color pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-area mb-8 mb-md-15 d-grid gap-3 gap-md-4  reveal-text text-three">
                                <span className="p6-color fw-semibold">ARTIST</span>
                                <h2 className="fs-two">Artist Videos</h2>
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
                                                <p className="designation n3-color transition fw-semibold">
                                                    {item.title}
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

        </>

    )
}

export default AboutPage