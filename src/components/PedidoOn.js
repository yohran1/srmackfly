import React from "react";
import Header from "./Header";
import FooterDevelop from "./FooterDevelop";


export default function PedidoOn(props){
    return (
        <div>
            <Header></Header>
            <div className="containerPedidos">
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

                </div>
                
            </div>
            
            <FooterDevelop></FooterDevelop>
        </div>
    )
}