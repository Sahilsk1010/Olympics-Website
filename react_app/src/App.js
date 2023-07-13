import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeApp from "./Home/HomeApp";
import FanSignin from "./Register/FanSignin";
import OrgSignin from "./Register/OrgSignin";
import Login from "./Register/Login";
import MiniHeader from "./MiniHeader";
import Header from "./Header";
import Footer from "./Footer";
import SignerType from "./Register/SignerType";

function App() {
  return (
    <>
      {/* <HomeApp/> */}
      <BrowserRouter>
      <MiniHeader />
      <Header />
        <div className="md:mx-24">
          <Routes>
            <Route exact path="/" element={<HomeApp />}></Route>
            <Route exact path="/orgsignin" element={<OrgSignin />}></Route>
            <Route exact path="/fansignin" element={<FanSignin />}></Route>
            <Route exact path="/signertype" element={<SignerType />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
