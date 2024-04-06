import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import { News } from '../types';

interface PostsState {
  loading: boolean;
  error: string | null;
  posts: News[];
}

const initialState: PostsState = {
  loading: false,
  error: null,
  posts: [],
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('/news');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;