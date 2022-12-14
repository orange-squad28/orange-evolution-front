import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;500;700;800&display=swap');:root{
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  --login-background:#0C1828;
  --login-verde: #00C09B;
  --login-azul: #2B73BF;
  --login-roxo: rgba(74, 73, 199, 0.71);
  --login-preto: rgba(1, 19, 43, 0.95);
  --login-gradient:linear-gradient(180deg, rgba(74, 73, 209, 0.71) 27.78%, rgba(250, 42, 132, 0.61) 76.37%);
  --main-background: #01132B;
  --main-color:#FFFFFF;
  --main-colorSecundary:#00C09B;
  --font-home: 'Montserrat', sans-serif;
  --menu-color:#FFFFFF;
  --menu-background:#0C1828;
  --menu-font: 'Montserrat', sans-serif;
}

* {
  font-family: 'Inconsolata', monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html {
  font-size: 62.5%;
}

html, body, #__next {
  height: 100%;
  background-color:#0C1828;


}



`
export default GlobalStyle
