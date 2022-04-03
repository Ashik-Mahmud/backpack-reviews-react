import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Blogs from "./components/Pages/Blogs/Blogs";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Home from "./components/Pages/Home/Home";
import NotFound from './components/Pages/NotFound/NotFound';
import Reviews from "./components/Pages/Reviews/Reviews";
import useReviews from "./Hooks/useReviews";
export const ReviewsContext = createContext([]);
function App() {
  const [reviews] = useReviews();
  return (
    <>
    <ReviewsContext.Provider value={{reviews}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </ReviewsContext.Provider>
    </>
  );
}

export default App;
