import { useEffect, useState } from 'react'
import api from 'src/services/api'

interface TrilhaProps {
  children?: any
  id?: string
}

export default function TrilhasdeUmAluno(props: TrilhaProps) {
  const [trilhasDoAluno, setTrilhasDoAluno] = useState<[]>([])

  useEffect(() => {
    api
      .get(`/alunos/trilhas/${props.id}`)
      .then((response) => setTrilhasDoAluno(response.data))
      .catch((error) => console.log(`ocorre um erro: ${error}`))
  }, [])

  return (
    <>
      {trilhasDoAluno.map((trilha) => {
        return (
          <div key={trilha}>
            <h1>{trilha}</h1>
          </div>
        )
      })}
    </>
  )
}
