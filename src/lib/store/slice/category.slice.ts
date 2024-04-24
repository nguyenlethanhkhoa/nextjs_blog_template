import { Category, CategoryApi, CategoryFilter } from "@/api/category.api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CategorySlice {
    categories: Category[]
}

const initialState: CategorySlice = {
    categories: []
};

export const getCategories = createAsyncThunk('category/list', async (filters: CategoryFilter) => {
    const resp = await CategoryApi.getCategories();
    
    return resp.result.items;
});

const postSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
    });
  },
});

export default postSlice.reducer;