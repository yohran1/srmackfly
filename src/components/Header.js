import React from "react";
import { Link } from 'react-router-dom'


export default function Header(props){
    return (
        <header className="header">
            <div className="logo-menu">
                <div className="logo"><Link to="/"><div className="imgg"></div></Link></div>
                <div className="box-2">Bolos de Casamento <div>Por Yohran Kallahari</div></div>
            </div>
                    
            <div className="menu">
                <ul id="lista">
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/pecaOnline">Peça Online</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li>Login/Register</li>
                </ul>
            </div>
        </header>
    )
}