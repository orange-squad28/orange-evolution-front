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
    cursos: [{}];
    autor: string;
    estaAtivo: boolean;
}

     const images = {
        "UX/UI Design": "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "Desenvolvimento Full Stack": "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
         QA: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }

    const imgTrilhas = (titulo: string) => {
        //@ts-ignore
       return images[titulo]??"https://images.unsplash.com/photo-1617319683252-027deeba5fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    
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
                <Image
                    alt="Mountains"
                    src={ imgTrilhas(trilha.titulo) }
                    quality={100}
                    sizes="100vw"
                    width={"70vw"}
                    height={"50vh"}
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <p className="legend">{trilha.titulo}</p>
            </div>)
    })


    }

    export default function Carrossel() {

        return (
            <div className={style.CCaroseul}>
                <Carousel className={style.Caroseul} stopOnHover={true} autoPlay={true} infiniteLoop={true} emulateTouch={true} selectedItem={1} transitionTime={1000} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true}  >
                    {Trilhas()}
                </Carousel>


            </div>
        )
    };

// <button onClick={() => postTrilha("https://orange-node-api.herokuapp.com/trilhas")}></button>
//   const postTrilha = async (baseURL: string) => {
//         await axios.post(baseURL)

//     }

