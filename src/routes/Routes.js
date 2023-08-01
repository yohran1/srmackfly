import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projeto from "../Projeto";
import Contato from "../components/Contato";


function Router(){
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Projeto></Projeto>}></Route>
                <Route path="pecaOnline" element={require}></Route>
                <Route path="contato" element={<Contato></Contato>}></Route>
                <Route path="sobre" element={require}></Route>
                <Route path="login" element={require}></Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Router