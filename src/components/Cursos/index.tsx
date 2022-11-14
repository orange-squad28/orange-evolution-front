import React, { useEffect, useState } from 'react';
import api from '../../services/api';

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
}

export default function Cursos() {
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
      <div key={curso?.id}>
        <p>{curso?.titulo}</p>
        <p>{curso.autor}</p>
        <p>{curso?.id}</p>
        <img src={curso?.imagem} alt={curso?.titulo} />
        (estaAtivo ? <p>Ativo</p> : <p>Inativo</p>)
        <p> {curso.dataCriacao}</p>
        <p>{curso.dataAtualização}</p>
        <p>{`${curso.duracao} minutos`}</p>
        <p>{curso?.descricao}</p>
        <video src={curso?.video} controls></video>
      </div>
    );
  })
}
