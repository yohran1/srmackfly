import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Slides from "./components/Slides";

export default function Projeto(props){

    return (
        <div className="container">
            <Header></Header>
            <Content></Content>
            <Slides></Slides>
             <Footer></Footer>
        </div> 
    )
}