import style from './Botao-grande.module.css'

function BotaoGrande({ texto, cor }) {
  return (
    <button className={style.botao_grande} style={{ background: cor }}>
      {texto}
    </button>
  )
}

export default BotaoGrande
