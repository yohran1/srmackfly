import React from "react";
import FooterDevelop from "./FooterDevelop";
import { Link } from "react-router-dom";

export default function Footer(props){
    return (
    <div>
            <div className="footerOrigin">
                <div className="boxs">
                    <h3>Inicio</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pecaOnline">Produtos</Link></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Download</a></li>
                    </ul>
                </div>
                <div className="boxs">
                    <h3>Informações</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Blog</a></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><Link to="/contato">Email</Link></li>
                    </ul>
                </div>
                <div className="boxs">
                    <h3>Suporte</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">FAQ</a></li>
                        <li><Link to="/contato">Telefone</Link></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Chat</a></li>
                    </ul>
                </div>

                <div className="boxs">
                    <h3>Sobre Nós</h3>
                    <p>
                        A Tradicional Bolos e Tortas atende múltiplos paladares e dietas alimentares, com uma variedade exclusiva de produtos elaborados especialmente para você. Dos Bolos artesanais, aos Bolos Funcionais, Zero Açúcar, Vegano, Tortas Salgadas, porções individuais e Sobremesas cheias de sabor. Nós cuidamos de cada detalhe e preparamos tudo artesanalmente para que você sinta felicidade em cada pedaço.
                        <br></br><br></br>
                        Afinal, Tradicional é fazer parte da sua vida!
                    </p>
                </div>
            </div>
            <FooterDevelop></FooterDevelop>
    </div> 
    )
}