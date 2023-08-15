import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projeto from "../Projeto";
import Contato from "../components/Contato";
import Sobre from "../components/Sobre";
import Login from "../login/Login";


function Router(){
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Projeto></Projeto>}></Route>
                <Route path="pecaOnline" element={require}></Route>
                <Route path="contato" element={<Contato></Contato>}></Route>
                <Route path="sobre" element={<Sobre></Sobre>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Router