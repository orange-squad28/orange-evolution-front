// import React, { useEffect, useState } from 'react';
// import api from '../../services/api';

// export default function Cursos() {
//   const [cursos, setCursos] = useState([]);

//   useEffect(() => {
//     api
//       .get('/cursos')
//       .then((response) => setCursos(response.data))
//       .catch((error) => console.log(`ocorre um erro: ${error}`));

//   }, []);

//   return (
//     <>
//       <h1>Cursos</h1>

//       {cursos.map((curso) => (
//         <>
//           <p key={curso?.id}>{curso?.titulo}</p>
//           <p>{curso.autor}</p>
//           <p>{curso?.id}</p>
//           <img src={curso?.imagem} alt={curso?.titulo} />
//           (estaAtivo ? <p>Ativo</p> : <p>Inativo</p>)
//           <p>{curso.dataCriacao}</p>
//           <p>{curso.dataAtualização}</p>
//           <p>{`${curso.duracao} minutos`}</p>
//           <p>{curso?.descricao}</p>
//           <video src={curso?.video} controls></video>
//         </>

//       ))}
//     </>
//   );
// }
