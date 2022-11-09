
import style from './Cabecalho.module.css';
import Image from "next/image"
import Logo from "public/img/orange_juice_logo.svg"
import Link from 'next/link';



function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <Image className={style.logo} src={Logo}
                alt="Logo da Orange Juice"
                width={75}
                height={63}
            />
            <nav className={style.menu}>
                <Link href="#" >Home</Link>
                <Link href="#" >Trilhas</Link>
                <Link href="#" >Sobre a Orange</Link>
                <Link href="#" >Canais</Link>
                <Link href="#" >Login</Link>
                <Link href="#" >Cadastrar</Link>

            </nav>
        </header>
    )
}

    export default Cabecalho;