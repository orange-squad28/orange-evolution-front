import React, { useEffect, useState } from 'react'
import api from 'src/services/api'
import style from './trilha.module.css'
import Cabecalho from 'src/components/Cabecalho'
import Button from 'src/components/Button'
import Link from 'next/link'



interface IContainerTrilha {
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

export function ContainerTrilhas() {
  const [trilha, setTrilha] = useState<IContainerTrilha[]>([])

  useEffect(() => {
    api.get("/trilhas").then((response) => {
      setTrilha(response.data)
    }).catch((error) => { console.log(error) });
  }, [])

  return trilha.map((trilha) => {
    return (
      <div key={trilha._id} className={style.trilhas}>
        <p className={style.pTrilhas}>{trilha.titulo}</p>
        <Button style={{ color: "#0C1828", boxShadow: ",0px 4px 4px rgba(0, 0, 0, 0.25)", border: "#D2D6DC", backgroundColor: "#EBEDF0", borderRadius: "20px", fontSize: "1.2rem", marginRight: "2rem" }}><Link href="/developerCourses"><p className={style.pButton}>Escolher trilha</p></Link></Button>      </div>)
  })
}
export default function TrilhasHome() {

  return (
    <>
      <Cabecalho />
      <section className={style.section}>
        <div className={style.containerTrilha}>
          <div className={style.containerTittle}>
            <h2 className={style.h2Tittle}>Olá, escolha sua trilha e inicie sua evolução</h2>
          </div>
          {ContainerTrilhas()}
        </div>
      </section>
    </>
  )
};




























// export default function ContainerTrilhas() {
//   const [trilha, setTrilha] = useState([])

//   useEffect(() => {
//     api.get("/trilhas").then((response) => {
//       setTrilha(response.data)
//     }).catch((error) => { console.log(error) });
//   }, [])

//   return(
//   <>
//     <Cabecalho />

//     <section className={style.section}>
//       <div className={style.containerTrilha}>
//         <div className={style.containerTittle}>
//           <h2 className={style.h2Section}></h2>
//         </div>
//         <div className={style.trilha}>
//           <p>{trilha.titulo}</p>
//           <Button style={{ borderRadius: "20px", }}><p>Escolher trilha</p></Button>
//         </div>
//         <div className={style.trilha}>
//           <p></p>
//         </div>
//         <div className={style.trilha}>
//           <p></p>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }

















