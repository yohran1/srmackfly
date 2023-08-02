import React from "react";
import Header from "./Header";
import confeiteiro from '../IMG/confeiteiro-1.webp'
import FooterDevelop from "./FooterDevelop";


export default function Sobre(props){
    return (
        
        <div className="contentSobreTop">
            <Header></Header>
            <div className="sobre">
                <div className="divSobre">
                    <h1>SOBRE</h1>
                    <p className="sobreP">SR-MACKFLY, RENOMADO CONFEITEIRO.</p>

                    <div className="descriptionSobre">
                        <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para me arrastar e soltar em qualquer lugar na sua página. Sou um ótimo lugar para você contar sua história.</p>
                    </div>
                </div>
                <div className="contentSobre">
                    <div>
                        <img className="divImgSobre" src={confeiteiro} alt="confeiteiro" />
                    </div>
                    <div className="descriptionImg">
                        <div className="p">
                        <p>
                        Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim para adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo lugar para você contar sua história.
                        <br></br>
                        <br></br>
                        Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a idéia de iniciar o seu negócio e o que o torna diferente de seus concorrentes. Faça com que sua empresa se destaque e mostre quem você é.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDevelop></FooterDevelop>
        </div>
    )
}