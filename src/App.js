import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import NavBar from './components/NavBar/NavBar.js'
import Categorias from './routes/Categorias/Categorias.js'
import CategoriasId from './routes/CategoriasId/CategoriasId.js'
import ItemId from './routes/ItemId/ItemId.js'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element= {<Categorias />}/>
        <Route exact path="/Categorias/:id" element= {<CategoriasId />}/>        
        <Route exact path="/Item/:id" element= {<ItemId />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;