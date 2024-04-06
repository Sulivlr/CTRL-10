import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import axios from 'axios';
import PostsListPage from './components/PostListPage';
import PostPage from './components/PostPage';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('/news');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;