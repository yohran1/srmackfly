import React from "react";
import FooterDevelop from "../components/FooterDevelop";
import GitHub from "./assets/github.png"
import Facebook from "./assets/facebook.png"
import { Link } from "react-router-dom";

export default function Register(props){
    return (
        <div className="containerLogin">
            <form className="formLogin" id="form">
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
                            <input type="text" id="name" name="name" required/>
                        </div>
                    </label>
                </div>
                <div className="input-box-login">
                    <label htmlFor="email">
                        Email
                        <div className="inputLogin">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" id="email" name="name" required/>
                        </div>
                    </label>
                </div>
                <div className="input-box-login">
                    <label htmlFor="password">
                        Password
                        <div className="inputLogin">
                            <i className="fa-solid fa-key"></i>
                            <input type="password" id="password" name="name" required/>
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
        </form>

        <FooterDevelop></FooterDevelop>
        </div>
    )
}
