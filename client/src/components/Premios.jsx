import React from "react";
import premios from "../img/DIAMANTE_PREMIO.png";
import { Helmet } from "react-helmet";
const Premios = () => {
    return(
        <>
          <Helmet>
            <title>Premios - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
        </Helmet>
        <div className=" w100 pb-pt-4rem pb-9 pt-5-xs animated fadeIn gray fondo-icon">
            <span className="p-4 flex flexCenter text-size27"><b>PREMIOS</b></span>
            <div className=" allCenter flexWrap-xs ">
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                       <img className="logoPremios " src={premios} alt="" srcset=""/>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Gracias a nuestros altos estándares de calidad y gran servicio, hemos obtenido 3 veces el reconocimiento a Empresa Peruana del Año en el rubro de Distribuidor de Diamante y también en la fabricación de diseño de joyas con diamantes (custom made jewelry)</p>
                    </div>
                </div>
                {/* <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 2</p>
                    </div>
                </div>
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 3</p>
                    </div>
                </div>
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 4</p>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
};
export default Premios;