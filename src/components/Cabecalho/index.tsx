import style from './Cabecalho.module.css'
import Image from 'next/image'
import Logo from 'public/img/orange_juice_logo.svg'
import Link from 'next/link'
import Hamburguer from './Hamburguer'
import Button from '../Button'

function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <Image
        className={style.logo}
        src={Logo}
        alt="Logo da Orange Juice"
        width={75}
        height={63}
      />
      <div className={style.menu}>
        <nav className={style.nav}>

          <Link href="/" >Home</Link>
          <Link href="/trilhas-home" >Trilhas</Link>
          <Link href="/" >Sobre a Orange</Link>
          <Link href="/#canais" >Canais</Link>
          <Button style={{ border: "none", background: "var(--login-gradient)", borderRadius: "20px", padding: "5px 20px", fontFamily: "var(--menu-font)" }}><Link href="/login" >Login</Link></Button>
          <Button style={{ border: "none", background: "var(--login-gradient)", borderRadius: "20px", padding: "5px 20px", fontFamily: "var(--menu-font)" }}><Link href="/cadastro" >Cadastrar</Link></Button>

        </nav>
        <Hamburguer />
      </div>
    </header>
  )
}

export default Cabecalho
