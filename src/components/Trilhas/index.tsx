import React, {useEffect, useState} from 'react';
import api from '../../services/api';

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    api
    .get('/trilhas')
    .then((response) =>setTrilhas(response.data))
    .catch((error) => console.log(`ocorre um erro: ${error}`));
  }, []);

  return (
    <>
      <h1>Trilhas</h1>

      {trilhas.map((trilha) => (
        <>
        <p key={trilha?.id}>{trilha?.titulo}</p>
        <p>{trilha.autor}</p>

        <p>{trilha?.id}</p>
        </>

      ))}
    </>
  );
}
