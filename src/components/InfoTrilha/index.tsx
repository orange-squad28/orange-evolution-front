import styles from './InfoTrilha.module.css'

interface InfoTrilhaProps {
  tempo: string
  guias: string
  tituloTrilha: string
}
export default function InfoTrilha({
  tempo,
  guias,
  tituloTrilha,
}: InfoTrilhaProps) {
  return (
    <>
      <div className={styles.container_trilha}>
        <h1>{tituloTrilha}</h1>

        <div className={styles.infoTitulo_trilha}>
          <p className={styles.tempo_trilha}>Tempo total:{tempo}</p>
          <p className={styles.guias_trilha}>Guias: {guias}</p>
        </div>

        <p className={styles.instrucoes_trilha}>
          Olá, esta trilha está dividida em 3 níveis, no nível 1 você irá
          aprender tudo que precisa a respeito de metodologias utilizadas no dia
          a dia de quem desenvolve. No nível 2 estão organizados todos os
          conceitos básicos para você programar. O nível 3 é opcional, mas ao
          completar você ganhará uma insígnia de estudante exemplar!Ao clicar na
          seta
          <img
            className={styles.icone}
            src="/img/curso-seta-conteudo.svg"
            alt="seta para ver contaúdo"
          />
          você visualiza algumas informações sobre o tema e todo o conteúdo
          relacionado a ele.{' '}
        </p>
      </div>
    </>
  )
}
