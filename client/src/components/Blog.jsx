import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import foto1 from "../img/Clip.png";
import blog1 from "../img/blog1.png";
import blog2 from "../img/blog2.png"
import blog3 from "../img/blog3.png"
import blog4 from "../img/blog4.png"
import blog5 from "../img/blog5.png"

const Blog = () =>{
 return (
        <div className = "w100 animated fadeIn">
            <div className="">
                <img className="w80 img-blog-principal" src={blog1} alt=""/>
                <div className="w40 cuadro pt-4 pb-3 pl-5 pr-5">
                    <span className="card-title">SORTEO APERTURA CLUB DIAMANTE:</span>
                    <p className="mt-3">¡Inauguramos Club Diamante, conoce más sobre el sorteo por apertura!</p>
                    <Link to="/blog-sorteo-club-diamante" className="leer-mas-blog mt-4  text-decoration  ">LEER MÁS<i className="fas fa-chevron-right arrow text-decoration"></i></Link>
                </div>
                <div className="container p-4 mt-3 mt4-xs">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 mb-5">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={blog2} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>CLUB DIAMANTE</b></h5>
                                    <p className="card-text">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte 
                                        que sean perfectos para ti.
                                    </p>
                                    <hr className="my-3"/>
                                    <Link to="/blog-club-diamante" className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-5">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={blog3} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?:</b></h5>
                                    <p className="card-text">Aquí te contamos todo lo que debes saber para comprar un diamante
                                        correctamente
                                    </p>
                                    <hr className="my-3"/>
                                    <Link to="/blog-evitar-estafa" className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-5">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={blog4} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>HISTORIA DE LA SORTIJA DE COMPROMISO</b></h5>
                                    <p className="card-text">¿Sabías la historia de cómo se instituyó la tradición del anillo de
                                        compromiso?, aquí te la contamos</p>
                                    <hr className="my-3"/>
                                    <Link to="/blog-historia-sortija" className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-5">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={blog5} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>LAS 5CS DIAMANTE PERÚ</b></h5>
                                    <p className="card-text">El valor del diamante está determinado por 4 factores, no interesando el orden de éstos. A continuación te explicamos sobre estos
                                        factores:
                                    </p>
                                    <hr className="my-3"/>
                                    <Link to="/color"className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
)}
export default Blog;