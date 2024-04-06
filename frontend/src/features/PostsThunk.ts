import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('/news');
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
  await axios.delete(`/news/${postId}`);
  return postId;
});