import { MouseEventHandler } from 'react'
import style from './Botao-grande.module.css'

interface BotaoGrandeProps {
  texto: string
  cor: string
  id?: string
  tipo: 'button' | 'submit' | 'reset' | undefined
  onclick?: MouseEventHandler
}

function BotaoGrande({ texto, cor, id, tipo, onclick }: BotaoGrandeProps) {
  return (
    <button
      onClick={onclick}
      type={tipo}
      id={id}
      className={style.botao_grande}
      style={{ background: cor }}
    >
      {texto.toUpperCase()}
    </button>
  )
}

export default BotaoGrande
