import React from "react";
import bolo_capa from './IMG/bolo-layout-4.jpg'
import bolo_c3 from './IMG/bolo-branco.webp'
import bolo_slide1 from './IMG/bolo-dourado-com-flores.jpg'
import bolo_slide2 from './IMG/bolo-layout-1.jpg'
import bolo_slide3 from './IMG/bolo-layout-2.jpg'
import bolo_slide4 from './IMG/bolo-layout-3.jpg'
import bolo_slide5 from './IMG/bolo-layout-5.jpg'
import bolo_slide6 from './IMG/bolo-layout-6.jpg'

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
                        <li>Peça Online</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                        <li>Feedback</li>
                        <li>Login | Register</li>
                    </ul>
                </div>
            </div>
            {/* ================================== NAV ========================================== */}
            <div className="contents">
                    <div className="conteudo">
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

                {/* </div> */}
                {/* ============================================================================================= */}
                <p>MEU ACERVO DE BOLOS</p>
                <br></br>
                {/* <div className="slides">
                    <div className="elements">

                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        <input type="radio" name="radio-btn" id="radio5" />
                        <input type="radio" name="radio-btn" id="radio6" />

                        <div className="slide first">
                            <img src={bolo_slide1} alt="Bolo_slide"></img>
                        </div>
                        <div className="slide">
                            <img src={bolo_slide2} alt="Bolo_slide"></img>
                        </div>
                        <div className="slide">
                            <img src={bolo_slide3} alt="Bolo_slide"></img>
                        </div>
                        <div className="slide">
                            <img src={bolo_slide4} alt="Bolo_slide"></img>
                        </div>
                        <div className="slide">
                            <img src={bolo_slide5} alt="Bolo_slide"></img>
                        </div>
                        <div className="slide">
                            <img src={bolo_slide6} alt="Bolo_slide"></img>
                        </div>
                    </div>

                        <div className="navigation">
                            <label htmlFor="radio1" className="barra"></label>
                            <label htmlFor="radio2" className="barra"></label>
                            <label htmlFor="radio3" className="barra"></label>
                            <label htmlFor="radio4" className="barra"></label>
                            <label htmlFor="radio5" className="barra"></label>
                            <label htmlFor="radio6" className="barra"></label>
                        </div>   
                </div> */}

                <div className="slides">
                    <button className="arrow-left control" aria-label="Previous Image">◀</button>
                    <button className="arrow-right control" aria-label="Next Image">▶</button>
                    
                    <div className="elements">

                        <div className="gallery">
                            <img src={bolo_slide1} className="item atual-item" alt="Bolo_slide"></img>
                            <img src={bolo_slide2} className="item atual-item" alt="Bolo_slide"></img>
                            <img src={bolo_slide3} className="item atual-item" alt="Bolo_slide"></img>
                            <img src={bolo_slide4} className="item atual-item" alt="Bolo_slide"></img>
                            <img src={bolo_slide5} className="item atual-item" alt="Bolo_slide"></img>
                            <img src={bolo_slide6} className="item atual-item" alt="Bolo_slide"></img>
                        </div>

                    </div>
                </div>








            </div>
            {/* ============================================================================================= */}
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
                    <p>
                        A Tradicional Bolos e Tortas atende múltiplos paladares e dietas alimentares, com uma variedade exclusiva de produtos elaborados especialmente para você. Dos Bolos artesanais, aos Bolos Funcionais, Zero Açúcar, Vegano, Tortas Salgadas, porções individuais e Sobremesas cheias de sabor. Nós cuidamos de cada detalhe e preparamos tudo artesanalmente para que você sinta felicidade em cada pedaço.
                        <br></br><br></br>
                        Afinal, Tradicional é fazer parte da sua vida!
                    </p>
                </div>
            </div>
            
            <div className="footer">
                <h2 className="iconn"><div className="iconFooter"></div></h2>
                <div className="author">Yohran Kallahari | Sr-Mackfly &copy;</div>
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

            
        </div>      
         
    )
}

const controls = document.querySelectorAll('.control')
let atual_item = 0
const items = document.querySelectorAll('.item')
const max_items = items.length

controls.forEach(control => {
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('arrow-left')    
        
        if(isLeft){
            atual_item -= 1
        }else{
            atual_item += 1
        }

        if(atual_item >= max_items){
            atual_item = 0
        }
        if(atual_item < 0){
            atual_item = max_items - 1
        }

        items.forEach(item => {
            item.classList.remove('atual-item')

            items[atual_item].scrollIntoView({
                inline: 'center',
                behavior: 'smooth'
            })

            items[atual_item].classList.add('atual-item')
        })
    
    })
})