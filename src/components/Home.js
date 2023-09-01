import React from 'react'
import PDF from './yohran.pdf'

function Home(props){

    const downloadPDF = () => {
        window.open(PDF, "_blank")
    }

    return(
        <div className='containerBody'>
            <div className='containerCard'>
                <div id='pCard' className='perfil-img-Card'></div>
                <p className='nameCard'>Yohran v. c. Morais</p>

                <div className='contentCard'>
                    <ul className='listaCard'>
                        <a href='./SobrePortifolio'>
                            <li>Sobre Mim</li>
                        </a>
                        <button onClick={downloadPDF}>
                            <li>Currículo</li>
                        </button>
                        <a href='./login'>
                            <li>Projeto</li>
                        </a>
                        <a href='https://www.linkedin.com/in/yohran-ven%C3%A2ncio-96017b120/'>
                            <li>Linkedin</li>
                        </a>
                        <a href='https://github.com/yohran1'>
                            <li>GitHub</li>
                        </a>
                        
                    </ul>
                </div>
            </div>
        </div>
    
    )
}

export default Home