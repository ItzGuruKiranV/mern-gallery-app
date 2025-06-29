import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValues = {
  images: [],
  categories: [],
};

// Async thunks for API requests
export const getAllImages = createAsyncThunk(
  "images/fetchallimages",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/images");
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "images/fetchallcategories",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/categories");
    return res.data;
  }
);

export const postNewCategory = createAsyncThunk(
  "images/postnewcategory",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/add/category",
      payload
    );
    return res.data;
  }
);

export const postNewImage = createAsyncThunk(
  "images/postnewimage",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/upload/image",
      payload
    );
    return res.data;
  }
);

export const getSingleImage = createAsyncThunk(
  "images/getsingleImageData",
  async (payload) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

// Slice for managing gallery state
const gallerySlice = createSlice({
  name: "galleryslice",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImages.fulfilled, (state, action) => {
        state.images = action.payload;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getSingleImage.fulfilled, (state, action) => {
        state.images = action.payload;
      });
  },
});

export default gallerySlice.reducer