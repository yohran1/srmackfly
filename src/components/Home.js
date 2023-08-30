import React from 'react'
import PDF from './yohran.pdf'

function Home(props){

    return(
        <div className='containerBody'>
            <div className='containerCard'>
                <div id='pCard' className='perfil-img-Card'></div>
                <p className='nameCard'>Yohran v. c. Morais</p>

                <div className='contentCard'>
                    <ul className='listaCard'>
                        <a href='./sobre'>
                            <li>Sobre Mim</li>
                        </a>
                        <a href={PDF}>
                            <li>Currículo</li>
                        </a>
                        <a href='./projeto'>
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