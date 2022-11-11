import React from 'react'
import Link from 'next/link'
import { SideBarMenu, LinkContent } from './styled'

const SideBar = ({ open }) => {
  return (
    <SideBarMenu open={open}>
      <Link href="/">
        <LinkContent>Home</LinkContent>
      </Link>
      <Link href="/">
        <LinkContent>Trilhas</LinkContent>
      </Link>
      <Link href="/">
        <LinkContent className="aboutOrange">Sobre a Orange</LinkContent>
      </Link>
      <Link href="/">
        <LinkContent>Canais</LinkContent>
      </Link>
      <Link href="/">
        <LinkContent>Login</LinkContent>
      </Link>
      <Link href="/">
        <LinkContent>Canais</LinkContent>
      </Link>
    </SideBarMenu>
  )
}

export default SideBar
