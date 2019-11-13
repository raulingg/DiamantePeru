import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import blog3 from "../img/blog3.png";
import blog2 from "../img/blog2.png";
import blog1 from "../img/blog1.png";
import blog4 from "../img/blog4.png";
import blog5 from "../img/blog5.png";
import color from "../img/color.png"
import claridad from "../img/claridad.png";
import corte from "../img/corte.png"


const MantenimientoBlog= () => { 
return (
    <>
    <div className="div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={blog5} alt="" srcSet=""/>
        </div>
        <div className="container-title text-white black-blog">
            <div className="title-article">
                <h1 className="raleway-semibold mb-4 font-size-2em">MANTENIMIENTO:</h1>
                <p className=" raleway-regular font-size-1">Aquí te contamos todo lo que debes saber para comprar un diamante correctamente</p>
            </div>
        </div>
        <div className="div-5cs article-content flex d-block-xs">
            <article className="container-article w60rem xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-text raleway-regular font-size-1em m-5 p-2">
                        <p>
                            El valor del diamante está determinado por 4 factores, no interesando el orden de éstos; que
                            son: Corte, Color, Claridad, Carat (unidad de peso). A continuación te explicamos sobre estos
                            factores:
                        </p>
                        <h2 className="mb-4 mt-4 font-size-1 raleway-bold">COLOR</h2>
                        <p>
                            Lo más importante que hay que saber acerca del color es que cuanto menos tonalidad de color amarillo, marrón o plomo tenga el Diamante más valor tendrá, esto se debe a que dentro de más blanco es más raro y más bello. 
                            El rango de colores del diamante va desde el incoloro hasta tonalidades de amarillo, marrón o plomo hasta llegar a los más raros y escasos en el mercado que son los de color: rosado, verde, azul, rojo, violeta, etc. 
                            Llamados Diamantes de colores fasinantes ("fancy color diamonds").
                        </p>
                        <p>
                        Para el sistema de degradación de colores de los diamantes se utiliza las letras del alfabeto, desde la D hasta Z, cada letra representando un grado de color.
                        </p>
                        <p>
                            Los Diamantes con un grado de color D, E, F son considerados incoloros y son los tres mejores colores, los de grado de color G, H, I son muy buenos y casi incoloros y estos son los seis grados de colores más utilizados para sortijas de compromiso, 
                            las joyerías más renombradas en el mundo vende hasta el grado de color I.
                        </p>
                        <p>
                            Los colores J, K, L, y M tienen un viso de tono de amarillo, marrón o plomo, estos colores son
                            considerablemente más económicos ya que son más abundantes y menos atractivos.
                        </p>
                        <hr/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/blog-club-diamante" className="each-article-container flex mr-5 option-menu">
                        <img src={blog2} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog1} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">SORTEO APERTURA CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="blog-historia-sortija"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog4}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">HISTORIA DE LA SORTIJA DE COMPROMISO</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog3}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?</p>
                        </div>
                    </Link>
                </div>
                {/* <div className="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">DESTACADOS</h2>
                    <ul className="pl-3 pr-5 p-0-xs">
                        <li className="pt-2 pr-5">
                            <Link to="/color"className="pr-5 option-menu " href="/">COLOR</Link>
                        </li>
                        <li className="pt-2 pr-5">
                            <Link to="/claridad" className="pr-5 option-menu" href="/">CLARIDAD</Link>
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link className=" option-menu" to="/certificacion-y-confianza">CERTIFICACIÓN Y CONFIANZA</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/corte"className=" option-menu" href="/">CORTE</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/carats"className=" option-menu" href="/">CARATS</Link> 
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </div>  
    </>
    )
};

export default MantenimientoBlog;
