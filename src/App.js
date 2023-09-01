
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projeto from './Projeto';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import PedidoOn from './components/PedidoOn';
import Login from './login/Login';
import Register from './regisger/Register';
import Home from './components/Home';
import SobrePortifolio from './components/SobrePorft';

export default function App() {
  return (
    <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/SobrePortifolio" element={<SobrePortifolio></SobrePortifolio>}></Route>
                <Route path="/projeto" element={<Projeto></Projeto>}></Route>
                <Route path="pecaOnline" element={<PedidoOn></PedidoOn>}></Route>
                <Route path="contato" element={<Contato></Contato>}></Route>
                <Route path="sobre" element={<Sobre></Sobre>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="register" element={<Register></Register>}></Route>
            </Routes>
        
    </BrowserRouter>
    
  );
}

