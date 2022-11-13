import { forwardRef } from 'react'
import style from './Input.module.css'

interface InputProps {
  tipo: string
  texto: string
  icone: string
}

const Input = forwardRef((props: InputProps, ref) => {
  const { tipo, texto, icone, ...restoProps } = props

  return (
    <>
      <div className={style.container}>
        <img className={style.icone} src={`/img/${icone}-icon.svg`} alt="" />
        <input
          className={style.input}
          type={tipo}
          placeholder={texto}
          {...restoProps}
          // ref={ref}
        />
      </div>
    </>
  )
})

export default Input
