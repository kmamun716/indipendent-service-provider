import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-me' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
