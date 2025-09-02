import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../../../public/assets/images/images';

const Header = () => {

    // const [hide, setHide] = useState(false);
    // useEffect(() => {
    //     if (window.scrollY > 50) {
    //         console.log('scrollY', window.scrollY)
    //     } else {
    //         console.log(window.scrollY)
    //     }
    // })
    const [openclass, setOpenclass] = useState(false);
      const [dropdown,setDropdown] =useState(false);
    const [scrollY, setScrollY] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrollY(true);
            return
        } else {
            setScrollY(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openBtn = () => {
        setOpenclass(!openclass)
    }

     const Dropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <>
            {/* header-section start */}
            <header className="header-section index-one py-6 px-2 px-md-6" style={{
                background: scrollY ? 'black' : ''
            }} >
                <div className="container-fluid">
                    <div className="main-navbar px-0 px-xl-8">
                        <nav className="navbar-custom">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link  to={'/'} className="nav-brand d-block d-lg-none">
                                    <img className="d-block" src={images.logo} alt="logo"  style={{width:'80px',margin:'0px 10px'}} />
                                </Link>
                                <div className="d-flex gap-6">
                                    <button
                                        onClick={openBtn}
                                        className={`navbar-toggle-btn d-block d-lg-none ${openclass ? 'open' : ''} `}
                                        type="button"
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                            </div>
                            <div className="navbar-toggle-item " style={{display:openclass ? 'block' : 'none'}}>
                                <div className="d-flex gap-5 flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between mt-5 mt-lg-0">
                                    <Link
                                         to={'/'}
                                        className="navbar-brand logo d-none d-lg-block d-xl-none"
                                    >
                                        <img className="w-100" src={images.fav} alt="logo" />
                                    </Link>
                                    <ul className="custom-nav third d-lg-flex d-grid gap-3 gap-lg-4" >


                                        <li className="menu-link">

                                            <Link to={'/'}
                                                style={{ color: 'white' }}
                                                className=" slide-second text-uppercase slide-vertical"
                                                data-splitting=""
                                            >
                                                Home
                                            </Link>


                                        </li>
                                        <li className="menu-item position-relative" >


                                            <Link to={'/about-us'}
                                                style={{ color: 'white' }}
                                                className=" slide-second text-uppercase slide-horizontal"
                                                data-splitting=""
                                            >
                                                About us
                                            </Link>


                                        </li>
                                        <li className="menu-item position-relative">


                                            <Link to={'/all-season'}
                                                style={{ color: 'white' }}
                                                className=" slide-second text-uppercase slide-horizontal"
                                                data-splitting=""
                                            >
                                                Seasons
                                            </Link>

                                        </li>

                                        <li className="menu-item position-relative">
                                            <button
                                            onClick={Dropdown}
                                                className={`position-relative pe-5 z-1 slide-second text-uppercase slide-vertical ${dropdown ? 'Dropdown' : ''}`}
                                                data-splitting=""
                                                style={{ color: 'white' }}
                                            >
                                                Pages
                                            </button>
                                            <ul className="sub-menu n2-bg-color p-lg-5" style={{display: dropdown ? 'block' : 'none'}}>
                                                <li className="menu-link py-1">
                                                    <Link to={'/gallery'}
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        Gallery
                                                    </Link>
                                                </li>
                                                {/* <li className="menu-link py-1">
                                                    <Link to={'/faq'}
                                                        href="event-single.html"
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        Faq's
                                                    </Link>
                                                </li> */}
                                                <li className="menu-link py-1">
                                                    <Link to={'/videos'}
                                                     
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        All Videos
                                                    </Link>
                                                </li>
                                                {/* <li className="menu-link py-1">
                                                    <Link to={'/sponsor'}
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        sponsor
                                                    </Link>
                                                </li>
                                                <li className="menu-link py-1">
                                                    <Link to={'/speaker'}
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        Speaker
                                                    </Link>
                                                </li>
                                                <li className="menu-link py-1">
                                                    <Link to={'/testimonial'}
                                                        className=" slide-second text-uppercase slide-horizontal"
                                                        data-splitting=""
                                                        style={{ color: 'white' }}
                                                    >
                                                        Testimonial
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>
                                        <li className="menu-link">
                                            <Link to={'/contact'}
                                                className=" slide-second text-uppercase slide-vertical"
                                                data-splitting=""
                                                style={{ color: 'white' }}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="right-area sidebar-items position-relative d-flex gap-3 gap-md-5 align-items-center">


                                        <div className="single-item d-none d-lg-block">
                                            <Link to={'/audition-form'}
                                                
                                                className="box-style box-second first-alt d-center gap-2 py-2 py-md-3 px-3 px-md-6 px-xl-9"
                                            >
                                                <span className="fs-seven">Apply for Season</span>
                                            </Link>
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

export default Header