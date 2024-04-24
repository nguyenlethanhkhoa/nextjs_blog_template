import { Post, PostApi, PostFilter } from "@/api/post.api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PostSlice {
    posts: Post[];
    selectedPost: Post | null;
}

const initialState: PostSlice = {
    posts: [],
    selectedPost: null
};

export const getPosts = createAsyncThunk('post/list', async (filters: PostFilter) => {
    const resp = await PostApi.getPosts();
    
    return resp.result.items;
});

export const getPostBySlug = createAsyncThunk('post/detail', async (slug: string) => {
    const resp = await PostApi.getPostBySlug(slug);
    
    return resp.result;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
    });

    builder.addCase(getPostBySlug.fulfilled, (state, action) => {
        state.selectedPost = action.payload
    });
  },
});

export default postSlice.reducer;