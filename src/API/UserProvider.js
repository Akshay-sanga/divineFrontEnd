import axios from "axios";
import api from "./axioxConfig";
// const API_BASE_URL = "https://test.hunardvi.com/api";
const API_BASE_URL = "http://127.0.0.1:8000/api";

// season api 
export const homeData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-all-data`);
    console.log('Home Data API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Home Data:', error); // Debugging log
    throw error;
  }
};

// Artist api 
export const artistData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-artist-data`);
    console.log('Artist Data API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Artist Data:', error); // Debugging log
    throw error;
  }
};

//Promoted Artist api 
export const promotedartistData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-promoted-artist-data`);
    console.log('Promoted Artist Data API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Promoted Artist Data:', error); // Debugging log
    throw error;
  }
};

// Testimonial api 
export const seasonTestimonialData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-newseason-testimonial-data`);
    console.log('Season Testimonial Data API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Testimonial Data:', error); // Debugging log
    throw error;
  }
};

// Gallery api 
export const allGalleryData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all-gallery-data`);
    console.log('All Gallery Data API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Gallery Data:', error); // Debugging log
    throw error;
  }
};

// Videos api 
export const allVideoData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all-video-data`);
    return response.data;
  } catch (error) {
    console.error('Error in Video Data:', error); // Debugging log
    throw error;
  }
};
// Season Details 
export const seasonDetailsData = async (slug) => {
  try {
    const response = await api.get(`/season-details/${slug}`);
    console.log('Season details data', response);
    return response.data;

  } catch (error) {
    console.error('Error season details Api in provider function', error);
    throw error;
  }
}

// contact form 
export const contactData = async (contactGlass) => {
  try {
    const response = await api.post(`/contact-submit`, contactGlass);
    return response.data;
  } catch (error) {
    console.error('Error in contact form submit, error');
    throw error;
  }
}

// Applied form 
export const appliedseasonData = async (seasonGlass) => {
  try {
    const response = await api.post(`/appliedseason-submit`, seasonGlass);
    return response.data;
  } catch (error) {
    console.error('Error in Applied season data form submit, error');
    throw error;
  }
}

// User Login
export const userloginData = async (userLogin) => {
  try {
    const response = await api.post(`/user-login`, userLogin);
    return response.data;
  } catch (error) {
    console.error('Error in User Login, error');
    throw error;
  }
}

// Payment Varrify Api Response
export const paymentverify = async (paymentinfo) => {
  try {
    const response = await axios.post(`https://test.hunardvi.com/api/verify-payment`, paymentinfo);
    console.log('Payment Verify API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Payment Verify:', error); // Debugging log
    throw error;
  }
};