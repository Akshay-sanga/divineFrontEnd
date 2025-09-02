// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// import viteLogo from '/Hunar-Sangeet-Mahavidyalaya.png'


// import HomePage from './pages/home/HomePage'
// import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
// import ScrollToTop from './components/ScrollToTop'
// import Layout from './components/Layout/Layout'
// import AboutPage from './pages/about/AboutPage'
// import Header from './components/Layout/header/Header'
// import Footer from './components/Layout/footer/Footer'
// import SpeakerPage from './pages/speakar/SpeakerPage'
// import FaqPage from './pages/faq/FaqPage'
// import GalleryPage from './pages/gallery/GalleryPage'
// import VideoPage from './pages/video/VideoPage'
// import TestimonialPage from './pages/testimonial/TestimonialPage'
// import SponsorPage from './pages/sponsor/SponsorPage'
// import ContactPage from './pages/contact/ContactPage'
// import AuditionFormPage from './pages/auditionForm/AuditionFormPage'
// import LoadAssets from './components/LoadAssets'
// import SeasonDetails from './pages/seasonDetails/SeasonDetails'
// import AllSeason from './pages/season/AllSeason'
// import UserLogin from './pages/userLogin/UserLogin'


// function App() {


//   return (
//     <>
//       {/* <LoadScripts /> */}

//       <Router>
//       <LoadAssets />

//         <ScrollToTop />

//         <Routes>

//           <Route path='/' element={<HomePage />} />

//           <Route element={<Layout />}>

//             <Route path='/about-us' element={<AboutPage />} />
//             <Route path='/speaker' element={<SpeakerPage />} />
//             <Route path='/all-season' element={<AllSeason />} />
//             <Route path='/season-details/:slug' element={<SeasonDetails />} />
//             <Route path='/faq' element={<FaqPage />} />
//             <Route path='/gallery' element={<GalleryPage />} />
//             <Route path='/videos' element={<VideoPage />} />
//             <Route path='/testimonial' element={<TestimonialPage />} />
//             <Route path='/sponsor' element={<SponsorPage />} />
//             <Route path='/contact' element={<ContactPage />} />
//             <Route path='/audition-form' element={<AuditionFormPage />} />
//             <Route path='/user-login' element={<UserLogin />} />

//           </Route>
//         </Routes>

//       </Router>

//     </>
//   )
// }

// export default App



import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/Hunar-Sangeet-Mahavidyalaya.png'

import HomePage from './pages/home/HomePage'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout/Layout'
import AboutPage from './pages/about/AboutPage'
import Header from './components/Layout/header/Header'
import Footer from './components/Layout/footer/Footer'
import SpeakerPage from './pages/speakar/SpeakerPage'
import FaqPage from './pages/faq/FaqPage'
import GalleryPage from './pages/gallery/GalleryPage'
import VideoPage from './pages/video/VideoPage'
import TestimonialPage from './pages/testimonial/TestimonialPage'
import SponsorPage from './pages/sponsor/SponsorPage'
import ContactPage from './pages/contact/ContactPage'
import AuditionFormPage from './pages/auditionForm/AuditionFormPage'
import LoadAssets from './components/LoadAssets'
import SeasonDetails from './pages/seasonDetails/SeasonDetails'
import AllSeason from './pages/season/AllSeason'
import UserLogin from './pages/userLogin/UserLogin'

function App() {
  return (
    <>
      <Router>
        <LoadAssets />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route element={<Layout />}>
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/speaker' element={<SpeakerPage />} />
            <Route path='/all-season' element={<AllSeason />} />
            <Route path='/season-details/:slug' element={<SeasonDetails />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/videos' element={<VideoPage />} />
            <Route path='/testimonial' element={<TestimonialPage />} />
            <Route path='/sponsor' element={<SponsorPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/audition-form' element={<AuditionFormPage />} />
            <Route path='/user-login' element={<UserLogin />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
