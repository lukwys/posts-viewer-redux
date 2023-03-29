import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import { fetchPosts } from './features/posts/postsSlice';

function App() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPosts());
  }, [dispatch])

  console.log(posts)

  return (
    <div className="App">
    </div>
  );
}

export default App;
