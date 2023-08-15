
import './App.css';
// import cssLogin from './login/style.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projeto from './Projeto';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import PedidoOn from './components/PedidoOn';
import Login from './login/Login';

export default function App() {
  return (
    <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Projeto></Projeto>}></Route>
                <Route path="pecaOnline" element={<PedidoOn></PedidoOn>}></Route>
                <Route path="contato" element={<Contato></Contato>}></Route>
                <Route path="sobre" element={<Sobre></Sobre>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
            </Routes>
        
        
    </BrowserRouter>
  );
}

