import React from 'react'
import Cabecalho from 'src/components/Cabecalho'
import Curso from 'src/components/Curso'
import Courses from "../../components/Courses"
import style from './developerCourses.module.css'

export default function index() {
    return (
        <>
            <Cabecalho />
            <div className={style.container}>
                <h2 className={style.tittle}></h2>
                <div className={style.containerAboutTrail}>

                </div>
                <div className="containerProgress">

                </div>
                <div className={style.containerCourses}>
                    <h2 className={style.Tittle}>O INÍCIO</h2>
                    <div className={style.containerCourse}>
                        {Courses()}
                    </div>
                    <h2 className={style.Tittle}>CONCEITOS BÁSICOS</h2>
                    <div className={style.containerCourse}>
                        {Courses()}
                    </div>
                    <h2 className={style.Tittle}>CONTEÚDO OPCIONAL</h2>
                    <div className={style.containerCourse}>
                        {Courses()}
                    </div>
                </div>
                <Curso />
            </div>
        </>
    )
}
