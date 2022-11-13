import { React, useState } from 'react'
import SideBar from '../SideBar'
import { Burguer } from './styled'
import { Link } from 'next/link';

export default function Hamburguer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <div><Link src="/">Home</Link></div>
        <div></div>
        <div></div>
      </Burguer>
      <SideBar open={open}></SideBar>
    </>
  )
}
