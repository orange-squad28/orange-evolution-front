import { React, useState } from 'react'
import SideBar from '../SideBar'
import { Burguer } from './styled'

export default function Hamburguer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burguer>
      <SideBar open={open}></SideBar>
    </>
  )
}
