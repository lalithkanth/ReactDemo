import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Churn from './pages/Churn';
import Fake from './pages/Fake';
import Meme from './pages/Meme';
import Sen from './pages/Sen';
import Social from './pages/Social';
import MainPage from './pages/MainPage';

import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route index element = {<MainPage/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/churn" element={<Churn/>} />
              <Route path="/fake" element={<Fake/>} />
              <Route path="/meme" element={<Meme/>} />
              <Route path="/sen" element={<Sen/>} />
              <Route path="/social" element={<Social/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
