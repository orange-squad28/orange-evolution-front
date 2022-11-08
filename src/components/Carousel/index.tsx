import React, { Component, useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Carousel.module.css'
import api from "../../services/api"

interface ITrilha {
    _id: string;
    titulo: string;
    cursos: any[];
    autor: string;
    estaAtivo: boolean;
}
function Trilhas() {
    const [trilha, setTrilha] = useState<ITrilha[]>([])


    useEffect(() => {
        api.get("/trilhas").then((response) => {
            setTrilha(response.data)
        }).catch((error) => { console.log(error) });
    }, [])


    return trilha.map((trilha) => {
        return (
            <div key={trilha._id} className={style.Trilhas}>
                <img src="https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=150" />
                <p className="legend">{trilha.titulo}</p>
            </div>)
    })


}

export default function Carrossel() {

    return (
        <div className={style.CCaroseul}>
            <Carousel className={style.Caroseul} stopOnHover={true} autoPlay={true} infiniteLoop={true} centerSlidePercentage={85} emulateTouch={true} selectedItem={1} centerMode transitionTime={1000} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true} >
                {Trilhas()}
            </Carousel>


        </div>
    )
};

// <button onClick={() => postTrilha("https://orange-node-api.herokuapp.com/trilhas")}></button>
//   const postTrilha = async (baseURL: string) => {
//         await axios.post(baseURL)

//     }

