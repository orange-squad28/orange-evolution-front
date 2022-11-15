import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

import React from 'react'
import { AuthProvider } from 'src/provider/Context'



function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>
        <title>Orange Evolution</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name='theme-color' content='orange_red' />
        <meta name="description" content="Sistema de Controle de Cursos para Orange Juice" />

      </Head>

      <GlobalStyle />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>



    </>
  )
}

export default App
