import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Post, RouteParams } from '../types';

const PostPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/news/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('An error occurred while fetching post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <CircularProgress />
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h6">An error occurred while fetching post.</Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Back to Posts
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">{post.title}</Typography>
              <Typography variant="subtitle1">{post.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Back to Posts
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPage;