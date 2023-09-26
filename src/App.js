import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TkDownloader from './components/TkDownloader';
import Header from './components/Header';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';



function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={  <TkDownloader /> } />
          <Route path='/tiktok' element={ <TkDownloader /> } />
          <Route path='/faq' element={ <FAQSection /> } />
          <Route path='/about' element={ <AboutSection /> } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
