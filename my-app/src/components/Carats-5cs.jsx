import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import foto1 from "../img/carats-fondo.png";

const Carats= () => { 
return (
    <>
    <div className="gray div-5cs animated fadeIn pb-4">
        <div >
            <img className="img-min-blog " src={foto1} alt="" srcset=""/>
        </div>
        <div className="div-5cs  flex d-block-xs">
            <article className="container-article vw60 xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-title mb-5 text-white black">
                        <div className="title-article">
                            <h1 className="raleway-semibold mb-4 font-size-2em">LAS 5Cs DE DIAMANTE </h1>
                            <p className=" raleway-regular font-size-1">En DIAMANTE PERÚ trabajamos con las mejores calidades,elegidas rigurosamente por profesionales de la ciencia</p>
                        </div>
                    </div>
                    <div className="container-text raleway-regular font-size-1em p-2">
                        <p>
                            El valor del diamante está determinado por 4 factores, no interesando el orden de éstos; que
                            son: Corte, Color, Claridad, Carat (unidad de peso). A continuación te explicamos sobre estos
                            factores:
                        </p>
                        <h2 className="mb-4 mt-4 font-size-1 raleway-bold">CARAT (UNIDAD DE PESO)</h2>
                        <p>
                            El Diamante tiene su propia unidad de peso y ésta tiene como nombre: Carat. Un (1) Carat es una unidad de peso que equivale a 0.2 décimas de gramo. (No confundir Carat con Karats que
                            es la medida de pureza del oro en el idioma ingles). La palabra Carat viene de la palabra carob (que es una semilla muy uniforme en su tamaño de una planta de la India) que en la antigüedad se usaba como medida de peso. 
                            En 1913, el peso se estandarizo internacionalmente y fue adaptado al sistema métrico. Siendo un Carat la quinta parte de un  gramo en otras palabras 1 carat equivale a 0.20 décimas de gramo.
                        </p>
                        <p>
                            Carat es la unidad de un diamante; 1 carat tiene 100 puntos, un diamante de 3⁄4 de carat tiene 0.75 puntos, uno de 1⁄2 carat tiene 0.50 puntos, el de 1⁄4 de carat tiene 0.25 puntos y así sucesivamente.
                        </p>
                        <hr/>
                    </div>
                </div>
            </article>
            <div class="container-another-articles vw40 mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div class="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/corte" class="each-article-container flex mr-5">
                        <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                        <div class="text-each-rel-art">
                            <p class="mb0 ml-3">CORTE (TALLADO)</p>
                        </div>
                    </Link>
                    <Link to="/color" class="each-article-container  flex mr-5">
                        <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                        <div class="text-each-rel-art">
                            <p class="mb0 ml-3">COLOR</p>
                        </div>
                    </Link>
                    <Link to="/claridad" class="each-article-container  flex mr-5">
                        <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                        <div class="text-each-rel-art">
                            <p class="mb0 ml-3">CLARIDAD</p>
                        </div>
                    </Link>
                    <Link to="/certificacion-y-confianza" class="each-article-container  flex mr-5">
                        <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                        <div class="text-each-rel-art">
                            <p class="mb0 ml-3">CERTIFICACIÓN Y CONFIANZA</p>
                        </div>
                    </Link>
                </div>
                <div class="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">POPULARES</h2>
                    <ul class="pl-3 pr-5 p-0-xs">
                        <li class="pt-2 pr-5">
                            <a class="pr-5 " href="/">El Perú : Nuevo mercado para los Diamantes </a>
                        </li>
                        <li class="pt-2 pr-5">
                            <a class="pr-5 "href="/">Diamantes para Ellas : Sorprendela en San Valetín</a>
                        </li>
                        <li class="pt-2 pr-5"> 
                            <a href="/">Se incrementa la vista de Diamantes por San Valentín</a> 
                        </li>
                        <li class="pt-2 pr-5"> 
                            <a class="pr-5 " href="/">¿Diamante o Rubí? </a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
    </>
    )
};

export default Carats;