import React from "react";
import bolo_capa from './IMG/bolo-layout-4.jpg'
import bolo_c3 from './IMG/bolo-branco.webp'
import bolo_slide1 from './IMG/bolo-dourado-com-flores.jpg'
import bolo_slide2 from './IMG/bolo-layout-1.jpg'
import bolo_slide3 from './IMG/bolo-layout-2.jpg'
import bolo_slide4 from './IMG/bolo-layout-3.jpg'

export default function Projeto(props){


    return (
        <div className="container">

            <div className="header">
                <div className="logo-menu">
                    <div className="logo"><div className="imgg"></div></div>
                    <div className="box-2">Bolos de Casamento <div>Por Yohran Kallahari</div></div>
                </div>
                    
                <div className="menu">
                    <ul id="lista">
                        <li>Página Inicial</li>
                        <li>Peça Online</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
            {/* ================================== NAV ========================================== */}
            <div className="contents">
                <div className="conteudo">
                    {/* <div className="c1"></div> */}
                    <img className="bolo_capa" src={bolo_capa} alt="Bolo" />
                </div>
                
                <div className="conteudo">
                    
                    <div className="arm">
                        <div className="c2">
                            <h2 className="h2">MEUS <span>BOLOS</span> SÃO <div>CONFECCIONADOS</div> COM AMOR.</h2>
                            <div className="textC2">
                                <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo espaço para você contar sua história.</p>
                            </div>                        
                        </div>
                    </div>

                    <div className="arm">
                        <img className="bolo_c3" src={bolo_c3} alt="Bolo_c3"></img>
                    </div>

                </div>

                <div className="conteudo">
                    <div className="arm c4"> <a className=" box-pedido" href="https://jsonplaceholder.typicode.com/todos"><div className="pedido">Faça seu pedido online</div></a> </div>

                    <div className="arm c5"> <a className=" box-pedido" href="https://jsonplaceholder.typicode.com/todos"><div className="pedido">Conheça o confeiteiro</div></a> </div>

                    <div className="arm c6"> <a className=" box-pedido" href="https://jsonplaceholder.typicode.com/todos"><div className="pedido">Personalize o seu bolo</div></a> </div>
                </div>

            </div>
            <hr></hr>
            <br></br>
            {/* ============================================================================================= */}

            <div className="slider">
                <div className="elements">

                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div className="slide first">
                        <img src={bolo_slide1} alt="Bolo_slide"></img>
                    </div>
                    <div className="slide">
                        <img src={bolo_slide2} alt="Bolo_slide"></img>
                    </div>
                    <div className="slide first">
                        <img src={bolo_slide3} alt="Bolo_slide"></img>
                    </div>
                    <div className="slide first">
                        <img src={bolo_slide4} alt="Bolo_slide"></img>
                    </div>
                

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>

                    <div className="manual-navigation">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>

                </div>
            </div>

            {/* ============================================================================================= */}
            <br></br>
            <hr></hr>
            <br></br>
            <div className="footerOrigin">
                <div className="boxs">
                    <h3>Inicio</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Home</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Produtos</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Download</a></li>
                    </ul>
                </div>
                <div className="boxs">
                    <h3>Informações</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Blog</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Contato</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Email</a></li>
                    </ul>
                </div>
                <div className="boxs">
                    <h3>Suporte</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">FAQ</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Telefone</a></li>
                        <li><a href="https://jsonplaceholder.typicode.com/todos">Chat</a></li>
                    </ul>
                </div>

                <div className="boxs">
                    <h3>Sobre Nós</h3>
                    <p>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum 
                        lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum 
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem 
                        ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem  
                        ipsum lorem ipsum Lorem ipsum lorem ipsum</p>
                </div>
            </div>
            
            <div className="footer">
                <h2 className="iconn"><div className="iconFooter"></div></h2>
                <div className="socials">
                    <div className="social">
                        <a href="https://www.facebook.com/yohran.venancio/"><div className="face"></div></a>
                    </div>
                    <div className="social">
                        <a href="https://twitter.com/YohranK"><div className="twitter"></div></a>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/yohran_kallahari/"><div className="insta"></div></a>
                    </div>
                </div>
            </div>

            <script src="./carrocel.js"></script>
        </div>       
    )
}