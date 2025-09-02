import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ImageGallery from 'react-image-gallery' // Assuming you're using this library
import "react-image-gallery/styles/css/image-gallery.css";
import { getallgallerydataslice } from '../../redux/UserSlice';

const GalleryPage = () => {
  const [gallerydata, setGallerydata] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Example: fetching gallery data (replace with real API call)
  useEffect(() => {
    dispatch(getallgallerydataslice())
  .unwrap()
  .then((data) => {
    console.log('Gallery API response:', data);
    setGallerydata(data.gallery);
    setLoading(false);
  })
  .catch((error) => {
    console.error('Error fetching gallery data:', error);
    setLoading(false);
  });
  }, []);
  

  // Convert gallerydata into objects required by ImageGallery
  const galleryItems = gallerydata.map(item => ({
    original: item.image,
    thumbnail: item.image, // or a separate thumbnail URL if available
  }));

  return (
    <>
      <section className="team-section position-relative pb-120 pt-120">
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
    </>
  );
}

export default GalleryPage;
