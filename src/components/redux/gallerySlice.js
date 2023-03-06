import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { REHYDRATE } from 'redux-persist';

export const getPhotos = createAsyncThunk('photos/getPhotos', async () => {
  try {
    const response = await axios('https://picsum.photos/v2/list');
    // console.log(response);
    const data = await response.data;
    return data;
  } catch (error) {
    // console.log(error);
    return error.message;
  }
});

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    photos: [],
    isLoading: false,
    message: '',
  },
  reducers: {},
  // extraReducers: {   this is old way, we can user builder callback func
  //   [getPhotos.pending]: state => {
  //     state.isLoading = true;
  //     state.message = 'pending';
  //   },
  //   [getPhotos.fulfilled]: (state, action) => {
  //     // console.log(action.payload);
  //     state.photos = action.payload;
  //     state.isLoading = false;
  //     state.message = 'succesfull';
  //   },
  //   [getPhotos.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.message = action.payload;
  //     console.log('action payload', action.payload);
  //   },
  // },

  extraReducers: builder => {
    console.log(builder);
    builder.addCase(getPhotos.fulfilled, (state, { payload }) => {
      // console.log(state);
      state.photos = payload;
    });
    // builder.addCase(REHYDRATE, state => {
    //   console.log('in rehydrate');
    // });
  },
});

export default gallerySlice.reducer;
