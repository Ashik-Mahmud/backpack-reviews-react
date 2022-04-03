import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
