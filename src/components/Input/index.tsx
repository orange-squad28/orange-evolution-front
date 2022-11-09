import style from './Input.module.css'

function Input({ tipo, texto, icone }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.icone} src={`/img/${icone}-icon.svg`} alt="" />
        <input className={style.input} type={tipo} placeholder={texto} />
      </div>
    </>
  )
}

export default Input
