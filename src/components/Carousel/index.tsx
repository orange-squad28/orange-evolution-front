import React, { Component, useEffect, useState } from 'react';
import Image from "next/image"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Carousel.module.css'
import api from "../../services/api"
import orange from "../../../public/img/CarouselOrange.webp"

interface ITrilha {
    _id: string;
    titulo: string;
    descricao: string,
    imagem: string,
    descritivoDaImagem: string,
    cursos: [{}];
    autor: string;
    estaAtivo: boolean;
}





const images = {
    "UX/UI Design": "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "Desenvolvimento Full Stack": "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    QA: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}

const imgTrilhas = (titulo: string) => {
    //@ts-ignore
    return images[titulo] ?? "https://images.unsplash.com/photo-1617319683252-027deeba5fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

}
const alt = {
    "UX/UI Design": "(Imagem da trilha) varias pessoas com canetas na mão apontando para layouts de Design com vários post-its coloridos",
    "Desenvolvimento Full Stack": "(Imagem da trilha) Um teclado como plano principal e mais ao fundo dois monitores aparecendo programas de programação ",
    QA: "(Imagem da trilha)"
}

const altTrilhas = (titulo: string) => {
    //@ts-ignore
    return alt[titulo] ?? "Update Trilha nova"

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
                    <Image className={style.img}
                        alt={altTrilhas(trilha.titulo)}
                        src={imgTrilhas(trilha.titulo)}
                        sizes={"100vw"}
                        width={"100%"}
                        height={"90%"}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className={style.contentText}>
                    <h2 className={style.tittle}>{trilha.titulo}</h2>
                    <p className={style.legend}>{trilha.descricao}</p>
                    <ul className={style.features}>
                        <li className={style.feature}>{trilha.titulo}</li>
                        <li className={style.feature}>{trilha.titulo}</li>
                        <li className={style.feature}>{trilha.titulo}</li>
                        <li className={style.feature}>{trilha.titulo}</li>
                        <li className={style.feature}>{trilha.titulo}</li>
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

// <button onClick={() => postTrilha("https://orange-node-api.herokuapp.com/trilhas")}></button>
//   const postTrilha = async (baseURL: string) => {
//         await axios.post(baseURL)

//     }
