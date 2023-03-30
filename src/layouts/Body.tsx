import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';

const Body = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movies/:id' element={<Movie />} />
    </Routes>
  );
};

export default Body;
