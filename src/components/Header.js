import React from "react";
import { Link } from 'react-router-dom'


export default function Header(props){
    return (
        <header className="header">
            <Link to="/">
            <div className="logo-menu">
                <div className="logo"><div className="imgg"></div></div>
                <div className="box-2">Bolos de Casamento <div>Por Yohran Kallahari</div></div>
            </div>
            </Link>        
            <div className="menu">
                <ul id="lista">
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/pecaOnline">Peça Online</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/login">Login | Register</Link></li>
                </ul>
            </div>
        </header>
    )
}