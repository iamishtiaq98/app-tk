import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TkDownloader from './components/TkDownloader';
import Header from './components/Header';



function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={  <TkDownloader /> } />
          <Route path='/tiktok' element={ <TkDownloader /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
