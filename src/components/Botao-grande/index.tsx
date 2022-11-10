import style from './Botao-grande.module.css'

interface BotaoGrandeProps {
  texto: string
  cor: string
}

function BotaoGrande({ texto, cor }: BotaoGrandeProps) {
  return (
    <button
      type="submit"
      className={style.botao_grande}
      style={{ background: cor }}
    >
      {texto.toUpperCase()}
    </button>
  )
}

export default BotaoGrande