import React from "react";
import Header from "./Header";
import FooterDevelop from "./FooterDevelop";


export default function Contato(props){
    return (
        <div>
            <Header></Header>
        <div className="contentBackground">

            <div className="information">
                <div className="infoH1">
                    <h1>CONTATE-ME</h1>
                </div>
                <div className="infoP">
                    <p>Sou um parágrafo. Clique aqui para adicionar o seu próprio texto e editar. Sou um ótimo espaço para você contar sua história para que seus usuários saibam um pouco mais sobre você.</p>
                </div>
                <div className="infoPessoal">
                    <p>(48) 1234-5678 | INFO@MEUSITE.COM | PEDIDOS SR-MACKFLY ONLINE</p>
                    <p>Coletas são possíveis na Av. Bernardino de Campos, 98</p>
                    <p>Santa Catarina - SC 12345-678, BRAZIL</p>
                </div>
            </div>

            <div className="divContato">
                <form className="form">
                    <div className="boxsForm">
                        <div className="modelBoxs">
                            <input type="text" placeholder="Nome*" required />
                        </div>
                        <div className="modelBoxs">
                            <input type="email" placeholder="Email*" required />
                        </div>
                    </div>
                    <div>
                        <input type="tel" placeholder="Telefone" />
                    </div>
                    <div>
                        <textarea placeholder="Digite sua mensagem aqui..." minLength={200}></textarea>
                    </div>
                    <button className="formButton">Enviar</button>
                </form>
            </div>

        </div>
        <FooterDevelop></FooterDevelop>
        </div>
    )
}