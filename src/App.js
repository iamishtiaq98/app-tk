import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TkDownloader from './components/TkDownloader';


function App() {
  
  return (
    <div className='Approot App'>
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
