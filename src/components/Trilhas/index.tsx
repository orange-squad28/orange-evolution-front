import React from 'react'
import { Trilhas } from "../Carousel/index"
import style from './Trilhas.module.css'

export default function TrilhasMobile() {
    return (

        <>
            <div className={style.containerTrilhas}>
            {Trilhas()}
              
            </div>

        </>
    )
}