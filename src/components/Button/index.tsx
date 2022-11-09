import React from 'react'
import style from "./Button.module.css"



interface IProps {
    children?: any;
    style?: React.CSSProperties;
    attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export default function Button(props: IProps) {
    return (
        <button className={style.button} style={{ ...props.style }} {...props.attributes} >{props.children}</button>
    )
}

// Como usar o Button, o mesmo pode ser estilizado e atribuido com esse atributos
// <Button style={{color:"red", background:"black"}} attributes={{onClick:() => {}}}><p>iosaodioa</p></Button>