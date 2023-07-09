import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import MiniHeader from './components/MiniHeader';
import CarouselGroup from './components/CarouselGroup';

function App() {
  return (
    <>
      <MiniHeader/>
      <Header/>
      <CarouselGroup/>
      {/* <CarouselGroup/> */}
      <Footer/>
    </>
  );
}

export default App;
