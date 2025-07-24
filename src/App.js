import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/Herosection';
import EssentialTools from './components/EssentialTools';
import SuccessStory from './components/SuccessStory';
import QnaSection from './components/QnaSection';
import HeroSectionphone from './components/Herosectionphone';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
     <Header/>
     <HeroSection/>
     <EssentialTools/>
     <SuccessStory/>
     <QnaSection/>
     <HeroSectionphone/>
     <Footer/>
    </>
  );
}


export default App;
