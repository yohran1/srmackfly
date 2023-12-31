import React from "react";
import { Link } from "react-router-dom";

export default function FooterDevelop(){
    return(
        <div className="footer ">
                <h2 className="iconn">
                    <Link to="/projeto"><div className="iconFooter"></div></Link>
                </h2>
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
    )
}