import { createGlobalStyle } from "styled-components";
//this needs to be imported in App.js: import GlobalStyle from "./globalStyle" (the name of the file)
//place this line inside App.js return: <GlobalStyle />

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  button{
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    outline: none;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
  }

  button:hover{
    background: #23d997;
  }

  h2{
    font-weight: lighter;
    font-size: 4rem;
  }
  h3{
    color: white;
  }
  h4{
    font-weight: bold;
    font-size: 2rem;
  }
  a{
    font-size: 1.1rem;
  }
  span{
    font-weight: bold;
    color:#23d997;
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

`;

export default GlobalStyle;
