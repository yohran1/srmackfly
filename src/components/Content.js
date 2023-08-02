
import React from 'react';
import { Link } from 'react-router-dom';
import bolo_capa from '../IMG/bolo-layout-4.jpg'
import bolo_c3 from '../IMG/bolo-branco.webp'

export default function Content(props){
    return (
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
                        <div className="arm c4"> <Link className=" box-pedido" to="/pecaOnline"><div className="pedido">Faça seu pedido online</div></Link> </div>

                        <div className="arm c5"> <Link className=" box-pedido" to="/sobre"><div className="pedido">Conheça o confeiteiro</div></Link> </div>

                        <div className="arm c6"> <Link className=" box-pedido" to="/pecaOnline"><div className="pedido">Personalize o seu bolo</div></Link> </div>
                    </div>
        </div>
    )
}