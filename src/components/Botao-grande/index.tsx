import style from './Botao-grande.module.css'

interface BotaoGrandeProps {
  texto: string
  cor: string
  id?: string
}

function BotaoGrande({ texto, cor, id }: BotaoGrandeProps) {
  return (
    <button
      type="submit"
      id={id}
      className={style.botao_grande}
      style={{ background: cor }}
    >
      {texto.toUpperCase()}
    </button>
  )
}

export default BotaoGrande
