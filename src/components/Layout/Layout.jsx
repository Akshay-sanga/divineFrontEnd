import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'
import CommonHeader from './header/CommonHeader'
// import LoadAssets from '../LoadAssets'

const Layout = () => {
    return (
        <>
            
            {/* start preloader */}
            <div id="preloader">
                <div id="loader" />
            </div>
            {/* end preloader */}
            {/* Scroll To Top Start*/}
            <div className="scroll-wrapper z-2 d-flex justify-content-center p-2 rounded-pill position-fixed">
                <button
                    className="scrollToTop p6-bg-color d-center flex-column rounded-circle"
                    aria-label="scroll Bar Button"
                >
                    <span className="d-center n1-color fs-five">
                        <i className="ph ph-caret-double-up" />
                    </span>
                    <span className="n1-color">TOP</span>
                </button>
            </div>
            {/* Scroll To Top End */}
            {/* Start Custom Cursor */}
            {/* <div className="mouse-follower">
                <span className="cursor-outline" />
                <span className="cursor-dot" />
            </div> */}
            {/* End Custom Cursor */}




            <CommonHeader />

            {/* <Sidebar /> */}
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout