import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300&family=Montserrat:wght@800&display=swap');

* {
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
