import React, { useState, useEffect } from "react";
import axios from 'axios'
import style from './Trilhas.module.css'

interface ITrilha {
    _id: string;
    titulo: string;
    cursos: any[];
    autor: string;
    estaAtivo: boolean;
}


export default function Trilhas() {
    const [trilha, setTrilha] = useState<ITrilha[]>([])
    const baseURL = "https://orange-node-api.herokuapp.com/trilhas"

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTrilha(response.data)
        });
    }, [])

    return (
        <>
            {trilha.map((trilha) => {
                return <div key={trilha._id} className={style.Trilhas}>
                    <img src="https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=150" />
                    <p className="legend">{trilha.titulo}</p>
                    
                </div>
            })}
        </>
    )
};