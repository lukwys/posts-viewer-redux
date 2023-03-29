import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface PostsState {
  loading: boolean;
  posts: []
}

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts = [];
        state.loading = false;
      });
  },
})

export default postsSlice.reducer;