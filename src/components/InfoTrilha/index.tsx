import { useEffect, useState } from 'react'
import styles from './InfoTrilha.module.css'

interface InfoTrilhaProps {
  tempo: string
  guias: string
  tituloTrilha: string
  admin: boolean
}
interface tela {
  largura: number
  altura: number
}
function tamanhoTela() {
  const { innerWidth: largura, innerHeight: altura } = window
  return { largura, altura }
}

export default function InfoTrilha({
  tempo,
  guias,
  tituloTrilha,
  admin,
}: InfoTrilhaProps) {
  const [tamanhoDaTela, setTamanhoDaTela] = useState<tela>({
    largura: 1440,
    altura: 1024,
  })

  useEffect(() => {
    function pegaNovoTamanhoDaTela() {
      setTamanhoDaTela(tamanhoTela())
    }

    window.addEventListener('resize', pegaNovoTamanhoDaTela)

    return () => {
      window.removeEventListener('resize', pegaNovoTamanhoDaTela)
    }
  }, [])

  console.log(tamanhoDaTela.largura)

  return (
    <>
      {admin === true && (
        <div className={styles.info_admin_container}>
          {tamanhoDaTela.largura > 768 && (
            <div className={styles.infoTitulo_parag}>
              <p className={styles.tempo_trilha}>Tempo total: {tempo}</p>
              <p className={styles.guias_trilha}>Guias: {guias}</p>
            </div>
          )}
          <div className={styles.info_admin}>
            Olá, administrador(a), boas vindas à tilha de desenvolvimento full
            stack! Você poderá editar cada conteúdo ao clicar nos ícones
            conforme a instrução abaixo.
            <div className={styles.info_admin_icones}>
              <span>
                <img
                  src="/img/icone-lixeira.svg"
                  alt="icone de uma lixeira para excluir curso"
                />
                Excluir conteúdo
              </span>
              <span>
                <img src="/img/icone-seta-cima.svg" alt="seta para cima" />
                Mover para cima
              </span>
              <span>
                <img
                  src="/img/icone-adicionar.svg"
                  alt="botão de adcionar cursos"
                />
                Adicionar conteúdo
              </span>

              <span>
                <img src="/img/icone-seta-baixo.svg" alt="seta para baixo" />
                Mover para baixo
              </span>

              <span>
                <img
                  className={styles.icone}
                  src="/img/curso-seta-conteudo.svg"
                  alt="seta para ver contaúdo"
                />
                Visualizar conteúdo
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        className={
          admin === false
            ? styles.container_trilha
            : styles.container_adm_trilha
        }
      >
        <h1 className={styles.infoTitulo_titulo}>{tituloTrilha}</h1>
        <div
          className={admin === false ? styles.conteudo : styles.conteudo_admin}
        >
          {admin === false && (
            <div className={styles.infoTitulo_parag}>
              <p className={styles.tempo_trilha}>Tempo total: {tempo}</p>
              <p className={styles.guias_trilha}>Guias: {guias}</p>
            </div>
          )}

          <div className={styles.instrucoes_trilha}>
            {admin === true && (
              <>
                <p>
                  Olá, esta trilha está dividida em 3 níveis, no nível 1 você
                  irá aprender tudo que precisa a respeito de metodologias
                  utilizadas no dia a dia de quem desenvolve. No nível 2 estão
                  organizados todos os conceitos básicos para você programar. O
                  nível 3 é opcional, mas ao completar você ganhará uma insígnia
                  de estudante exemplar! Ao clicar na seta
                  <span className={styles.icone_container}>
                    <img
                      className={styles.icone}
                      src="/img/curso-seta-conteudo.svg"
                      alt="seta para ver contaúdo"
                    />
                  </span>
                  você visualiza algumas informações sobre o tema e todo o
                  conteúdo relacionado a ele.
                </p>
                <button className={styles.botao_adm_trilha}>
                  Editar descrição
                </button>
              </>
            )}

            {admin === false && (
              <>
                <p>
                  Olá, esta trilha está dividida em 3 níveis, no nível 1 você
                  irá aprender tudo que precisa a respeito de metodologias
                  utilizadas no dia a dia de quem desenvolve. No nível 2 estão
                  organizados todos os conceitos básicos para você programar. O
                  nível 3 é opcional, mas ao completar você ganhará uma insígnia
                  de estudante exemplar! Ao clicar na seta
                  <span className={styles.icone_container}>
                    <img
                      className={styles.icone}
                      src="/img/curso-seta-conteudo.svg"
                      alt="seta para ver contaúdo"
                    />
                  </span>
                  você visualiza algumas informações sobre o tema e todo o
                  conteúdo relacionado a ele.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
