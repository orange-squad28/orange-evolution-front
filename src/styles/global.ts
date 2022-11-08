import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --login-background:#0C1828;
  --login-verde: #00C09B;
  --login-azul: #2B73BF;
  --login-roxo: rgba(74, 73, 199, 0.71);
  --login-preto: rgba(1, 19, 43, 0.95);
  --login-gradient:linear-gradient(180deg, rgba(74, 73, 209, 0.71) 27.78%, rgba(250, 42, 132, 0.61) 76.37%);


}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body, #__next {
  height: 100%;
}

body{
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export default GlobalStyle;
