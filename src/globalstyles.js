import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: white;
      font-size: 15px;
       font-family: Arial, Helvetica, sans-serif;

    
}
html{
  height:100%;
}
body{
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
`