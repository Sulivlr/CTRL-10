import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPosts, selectAllPosts } from '../features/NewsSlice';
import { deletePost } from '../features/PostsThunk';


const PostsListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = async (id: string) => {
    try {
      await dispatch(deletePost(id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        News Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="subtitle1">{post.content}</Typography>
              </CardContent>
              <CardActions>
                <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                  <Button size="small">Read Full Post</Button>
                </Link>
                <Link to="/posts/new" style={{ textDecoration: 'none' }}>
                  <Button size="small">Add new post</Button>
                </Link>
                <Button size="small" onClick={() => handleDeletePost(post.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsListPage;