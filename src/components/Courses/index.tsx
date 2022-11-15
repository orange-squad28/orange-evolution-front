import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import style from './Courses.module.css'

interface ICurso {
  id: string,
  titulo: string,
  video: string,
  descricao: string,
  imagem: string,
  descritivoDaImagem: string,
  duracao: string,
  dataCriacao: string,
  autor: string,
  estaAtivo: boolean,
  dataAtualização: string,
  link: string,
}

export default function Courses() {
  const [cursos, setCursos] = useState<ICurso[]>([]);

  useEffect(() => {
    api
      .get('/cursos')
      .then((response) => setCursos(response.data))
      .catch((error) => console.log(`ocorre um erro: ${error}`));

  }, []);
  useEffect(() => {
    api
      .get('/admins')
      .then((response) => setCursos(response.data))
      .catch((error) => console.log(`ocorre um erro: ${error}`));

  }, []);

  return cursos.map((curso) => {
    return (
      <div key={curso?.id} className={style.course}>
        <p className={style.tittle}>{curso?.titulo}</p>
        <div className={style.containerLinks}>
          <a href={curso.link} target="_blank" className={style.Link}><p>Ver conteúdo</p></a>
          <a href={curso.link} target="_blank"><div className={style.imgArrow} role="img" aria-label="Uma logo em formato de circulo com uma seta 'vazada' ao meio, apontando a esquerda."></div></a>
        </div>
      </div>
    );
  })
}
