import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeApp from './Home/HomeApp';
import Signin from './Register/Signin';
import Login from './Register/Login';
import MiniHeader from './MiniHeader';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      {/* <HomeApp/> */}
      <MiniHeader/>
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={< HomeApp />}></Route>
          <Route exact path='/signin' element={< Signin />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
