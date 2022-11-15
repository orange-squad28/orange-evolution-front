import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Curso from '../Curso';
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
      <Curso admin={false} link={curso.link} titulo={curso.titulo} id={curso.id}/>
    );
  })
}
