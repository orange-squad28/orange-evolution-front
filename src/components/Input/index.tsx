import style from './Input.module.css'

interface InputProps {
  tipo: string
  texto: string
  icone: string
}

function Input({ tipo, texto, icone }: InputProps) {
  return (
    <>
      <div className={style.container}>
        <img className={style.icone} src={`/img/${icone}-icon.svg`} alt="" />
        <input className={style.input} type={tipo} placeholder={texto} />
      </div>
    </>
  )
}

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ tipo, texto, icone }: InputProps, ref) => {
//     return (
//       <>
//         <div className={style.container}>
//           <img className={style.icone} src={`/img/${icone}-icon.svg`} alt="" />
//           <input
//             className={style.input}
//             type={tipo}
//             placeholder={texto}
//             ref={ref}
//           />
//         </div>
//       </>
//     )
//   }
// )

export default Input
