import React, { useState, useEffect } from "react";
import axios from 'axios'


interface ITrilha {
    id: string;
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
            console.log(response)
            setTrilha(response.data)
        });
    }, [])

    return (
            <>
               {trilha.map((trilha) => {
                    <div key={trilha.id}>
                        <img src="https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220"/>
                        <p className="legend">{trilha.titulo}</p>
                        <p className="legend">{trilha.autor}</p>
                        <p className="legend">{trilha.estaAtivo}</p>
                        <p className="legend">{trilha.id}</p>
                    </div>
                })}
            </>
    )
};