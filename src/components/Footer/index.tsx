import style from "./Footer.module.css"

function Footer (){
    return(
        <>
        <footer className={style.listasRodape}>
        <ul className={style.lista}>
            <li>Orange Evolution</li>
        </ul>

        <ul  className={style.lista}>
            <li>Sobre a Orange Evolution</li>
            <li>lorem</li>
            <li>lorem</li>
        </ul>
        <ul  className={style.lista}>
            <li>Redes Sociais</li>
            <li>Instagram</li>
            <li>Discord</li>
            <li> Facebook</li>
        </ul>
      

        </footer>
        </>
    )
}

export default Footer