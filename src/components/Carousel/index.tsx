import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import style from './Carousel.module.css'
import Trilhas from "../Trilhas";


export default function Carrossel() {
    return (
        <div className={style.CCaroseul}>
            <Carousel className={style.Caroseul} stopOnHover={true} autoPlay={true} infiniteLoop={true} centerSlidePercentage={85} emulateTouch={true} selectedItem={1} centerMode transitionTime={1000} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true} >
                <Trilhas/>
            </Carousel>
        </div>
    )
};