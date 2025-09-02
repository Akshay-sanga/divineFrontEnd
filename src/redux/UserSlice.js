import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allGalleryData, allVideoData, appliedseasonData, artistData, contactData, homeData, promotedartistData, seasonDetailsData, seasonTestimonialData, userloginData,paymentverify } from "../API/UserProvider";

// Home Data for API calls
export const getalldataslice = createAsyncThunk(
  "user/fetchinghomedata",
  async (_, { rejectWithValue }) => {
    try {
      return await homeData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Artist Data for API calls
export const getallartistdataslice = createAsyncThunk(
  "user/fetchingartistdata",
  async (_, { rejectWithValue }) => {
    try {
      return await artistData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Promoted Artist Data for API calls
export const getallpromotedartistdataslice = createAsyncThunk(
  "user/fetchingpromotedartistdata",
  async (_, { rejectWithValue }) => {
    try {
      return await promotedartistData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Artist Data for API calls
export const getseasontestimonialdataslice = createAsyncThunk(
  "user/fetchingseasontestimonialdataslice",
  async (_, { rejectWithValue }) => {
    try {
      return await seasonTestimonialData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// All Gallery Data for API calls
export const getallgallerydataslice = createAsyncThunk(
  "user/fetchingallgallerydataslice",
  async (_, { rejectWithValue }) => {
    try {
      return await allGalleryData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// All Video Data for API calls
export const getallvideodataslice = createAsyncThunk(
  "user/fetchingallvideodataslice",
  async (_, { rejectWithValue }) => {
    try {
      return await allVideoData();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Season Data Details for API calls
export const getseasondetailsdataslice = createAsyncThunk(
  "user/fetchingseasondetailsdataslice",
  async (slug, { rejectWithValue }) => {
    console.log('slug on slice screen', slug)
    try {
      return await seasonDetailsData(slug);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// contact data for API calls
export const getContactslicedata = createAsyncThunk(
  "user/fetchingcontactslicedata",
  async(contactGlass, {rejectWithValue})=>{
    try{
      return await contactData(contactGlass);
    }catch(error){
      return rejectWithValue(error.response.data);
    }
  }
)

// contact data for API calls
export const getAppliedseasonslicedata = createAsyncThunk(
  "user/fetchingAppliedseasonslicedata",
  async(seasonGlass, {rejectWithValue})=>{
    try{
      return await appliedseasonData(seasonGlass);
    }catch(error){
      return rejectWithValue(error.response.data);
    }
  }
)

// User Login for API calls
export const userLoginslicedata = createAsyncThunk(
  "user/fetchinguserLoginslicedata",
  async(userLogin, {rejectWithValue})=>{
    try{
      return await userloginData(userLogin);
    }catch(error){
      return rejectWithValue(error.response.data);
    }
  }
)

//Payment Varify Api call
export const PaymentVarifyDataFetchSlice = createAsyncThunk(
  "user/PaymentVarifyDataFetchSlice",
  async (paymentinfo, { rejectWithValue }) => {
    try {
      return await paymentverify(paymentinfo);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getalldataslice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getalldataslice.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getalldataslice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;