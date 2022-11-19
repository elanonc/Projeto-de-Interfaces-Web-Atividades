// import { useState } from 'react';
import './App.css';
// import { PaginaFeed } from './components/Pages/PaginaFeed/PaginaFeed';

import { PaginaFeed } from "./components/Pages/PaginaFeed/PaginaFeed";
import { PaginaPostar } from "./components/Pages/PaginaPostar/PaginaPostar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaFeed/>}></Route>
          <Route path="/postar" element={<PaginaPostar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;