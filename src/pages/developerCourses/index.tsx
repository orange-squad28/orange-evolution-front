import React from 'react'
import Cabecalho from 'src/components/Cabecalho'
import Curso from 'src/components/Curso'
import InfoTrilha from 'src/components/InfoTrilha'
import Courses from '../../components/Courses'
import style from './developerCourses.module.css'

export default function index() {
  return (
    <>
      <Cabecalho />
      <div className={style.container}>
        <InfoTrilha
          admin={false}
          tempo={'100'}
          tituloTrilha={'full stack developer'}
          guias="Charles Edurado, Maria Amanda, Jade Figueiredo"
        />
        <h2 className={style.tittle}>SEU PROGRESSO NESTA TRILHA</h2>
        <div className={style.containerProgressEmblem}>
          <div className={style.progress}>
            <div className={style.progressAllBar}></div>
            <div className={style.progressBar}></div>
          </div>
          <div className={style.containerEmblem}>
            <div className={style.containerPoints}>
              <div className={style.points}></div>
              <div className={style.points}></div>
            </div>
            <div className={style.emblem}>
              <div className={style.star}></div>
            </div>
            <div className={style.emblem}>
              <div className={style.star}></div>
            </div>
          </div>
        </div>
        <InfoTrilha
          admin={false}
          tempo={'100'}
          tituloTrilha={'full stack developer'}
          guias="Charles Edurado, Maria Amanda, Jade Figueiredo"
        />
        <div className={style.containerCourses}>
          <h2 className={style.tittle}>O INÍCIO</h2>
          <div className={style.containerCourse}>{Courses()}</div>
          <h2 className={style.tittle}>CONCEITOS BÁSICOS</h2>
          <div className={style.containerCourse}>{Courses()}</div>
          <h2 className={style.tittle}>CONTEÚDO OPCIONAL</h2>
          <div className={style.containerCourse}>{Courses()}</div>
        </div>
      </div>
    </>
  )
}
