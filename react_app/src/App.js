import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import MiniHeader from './components/MiniHeader';
import Hero from './components/Hero';
function App() {
  return (
    <>
      <MiniHeader/>
      <Header/>
      <Hero/>
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
