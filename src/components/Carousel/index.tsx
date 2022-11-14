import React, { Component, useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Carousel.module.css'
import api from "../../services/api"

interface ITrilha {
    _id: string,
    titulo: string,
    topicos: [],
    descricao: string,
    imagem: string,
    descritivoDaImagem: string,
    cursos: [{}],
    autor: string,
    estaAtivo: boolean,
}

export function Trilhas() {
    const [trilha, setTrilha] = useState<ITrilha[]>([])

    useEffect(() => {
        api.get("/trilhas").then((response) => {
            setTrilha(response.data)
        }).catch((error) => { console.log(error) });
    }, [])

    return trilha.map((trilha) => {
        return (
            <div key={trilha._id} className={style.trilhas}>
                <h2 className={style.tittleMobile}>{trilha.titulo}</h2>
                <div className={style.contentImg}>
                    <img className={style.img} alt={trilha.descritivoDaImagem} src={trilha.imagem} />
                </div>
                <div className={style.contentText}>
                    <h2 className={style.tittle}>{trilha.titulo}</h2>
                    <p className={style.legend}>{trilha.descricao}</p>
                    <ul className={style.features}>
                        {trilha.topicos.map((topico) => {
                            return <li className={style.feature}>{topico}</li>
                        })}
                    </ul>
                </div>
            </div>)
    })
}
export default function Carrossel() {

    return (
        <div className={style.containerCaroseul}>
            <Carousel className={style.carousel} stopOnHover={true} autoPlay={false} infiniteLoop={true} emulateTouch={true} selectedItem={1} transitionTime={1000} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true}  >
                {Trilhas()}
            </Carousel>
        </div>
    )
};
