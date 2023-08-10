import React from "react";
import Header from "./Header";
import FooterDevelop from "./FooterDevelop";

import Pedido_1 from '../IMG/pedido-1.png'
import Pedido_2 from '../IMG/pedido-2.png'
import Pedido_3 from '../IMG/pedido-3.png'
import Pedido_4 from '../IMG/pedido-4.png'
import Pedido_5 from '../IMG/pedido-5.png'
import Pedido_6 from '../IMG/pedido-6.png'
import Pedido_7 from '../IMG/criar.png'


export default function PedidoOn(props){
    return (
        <div>
            <Header></Header>
            <div className="containerPedidos">
            {/* <Header></Header> */}
                <div className="pedidosBox">
                    <div className="headerPedidos">
                        <div className="retirada"><span>Retirada, o mais rápido possível (em 15 minutos)</span><div className="alterar">Alterar</div></div>
                        <div className="HeaderMenuPedidos">
                            <div className="headerMenu">
                                <div className="menu-bolo"><p>MENU DE BOLOS</p></div> 
                                <div className="headerP"><p>Bolos de Casamento</p></div> 
                                <div className="headerP"><p>Personalize seu bolo</p></div>
                            </div>
                        </div>
                        <div className="headerInfo">
                            <h2>MENU DE BOLOS</h2>
                            <p>Encomendar com 3 dias de antecedência</p>
                        </div>
                    </div>
                    <div className="contentPedidos">
                        <h4 className="h4">Bolos de Casamento</h4>
                        <div className="pedidos">

                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento Dourado</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_1} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento de Pérolas</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_2} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento Rústico</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_3} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento Romântico</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_4} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento Lilás</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_5} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="cardPedido-1">
                                <div className="pedido-1">
                                    <div className="pedido-1-divH4"><h4>Bolo de Casamento Florido</h4></div>
                                    <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                    <span>R$100</span>
                                </div>
                                <div className="boxImg">
                                     <img src={Pedido_6} alt="Bolo" />
                                </div>
                            </div>
                            {/* ================================================= */}
                            <div className="criar">

                                <h4 className="h4">Personalize seu Bolo</h4>

                                <div className="cardPedido-1">
                                    <div className="pedido-1">
                                        <div className="pedido-1-divH4"><h4>Personalize seu próprio bolo</h4></div>
                                        <div className="pedido-1-div">Esse é um item do seu menu.<br></br>Adicione uma breve descrição.</div>
                                        <span>R$0,00</span>
                                    </div>
                                    <div className="boxImg">
                                        <img src={Pedido_7} alt="criar" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <FooterDevelop></FooterDevelop> */}
            </div>
            <FooterDevelop></FooterDevelop>
        </div>
    )
}