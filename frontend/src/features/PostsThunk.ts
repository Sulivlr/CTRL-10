import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
  await axios.delete(`/news/${postId}`);
  return postId;
});