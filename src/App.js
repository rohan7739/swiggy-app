import './App.css';
// import About from './components/About/About';
// import Carousel from './components/Carousel/Carousel';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ResDetail from './components/Restaurant/ResDetail/ResDetail';
// import Restaurant from './components/Restaurant/Restaurant';
import Search from './components/Search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/restaurants/:Id' element={<ResDetail />} />
        <Route exact path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;