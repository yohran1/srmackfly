import React, { useState } from "react";
import FooterDevelop from "../components/FooterDevelop";
import GitHub from "./assets/github.png"
import Facebook from "./assets/facebook.png"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register(props){

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [message, setMessage] = useState("")

    const valorInput = (event) => setData({...data, [event.target.name]: event.target.value})

    const sendMsg = async (event) =>{

        event.preventDefault()
        console.log(`nome: ${data.name}`)
        console.log(`Email: ${data.email}`)
        console.log(`Password: ${data.password}`)

        const headers = {
            'headers': {
                // Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }
        // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
        await axios.post('http://localhost:5000/message', data, headers)
        .then((res)=>{  // Acessar o then quando a API retornar status 200
            setMessage(res.data.mensagem)

            // Limpar os dados do state e os dados dos campos do formulário
            setData({
                name: '',
                email: '',
                password: ''
            })
        }).catch((error)=>{
            setMessage(error.data.mensagem)
        })
    }

    return (
        <div className="containerLogin">
            <form className="formLogin" onSubmit={sendMsg} id="form">
            <div className="headerLogin">
                <h1>Register</h1>
                <i className="fa-solid fa-moon icon-moon"> <div className="i-txt">theme</div></i>
            </div>

            <div className="inputsLogin">
                <div className="input-box-login">
                    <label htmlFor="name">
                        Name
                        <div className="inputLogin">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" id="name" onChange={valorInput} name="name" value={data.name} required/>
                        </div>
                    </label>
                </div>
                <div className="input-box-login">
                    <label htmlFor="email">
                        Email
                        <div className="inputLogin">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" id="email" onChange={valorInput} name="email" value={data.email} required/>
                        </div>
                    </label>
                </div>
                <div className="input-box-login">
                    <label htmlFor="password">
                        Password
                        <div className="inputLogin">
                            <i className="fa-solid fa-key"></i>
                            <input type="password" id="password" onChange={valorInput} name="password" value={data.password} required/>
                        </div>
                    </label>
                </div>
            </div>
                <button type="submit" className="login-btn">Register</button>
            <div className="has-registration">
                <Link to="/login">Já possui cadastro?</Link>
            </div>
                <div className="social_media_login">
                <a href="https://www.facebook.com/yohran.venancio/">
                    <img src={Facebook} alt="Facebook-logo" />
                </a>
                
                <a href="https://github.com/yohran1">
                    <img src={GitHub} alt="gitHub-logo" />
                </a>
            </div>

            {message ? <p>{message}</p> : ""}

        </form>

        <FooterDevelop></FooterDevelop>
        </div>
    )
}
