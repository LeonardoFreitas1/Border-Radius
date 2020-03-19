import style, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
  background: #3d3d3d;
}

body {
  background: #3d3d3d;
  font: 12px 'Lucida Grande', Arial, sans-serif;
}
`

export const Logo = style.div`
    background: url('https://border-radius.com/border_radius.png');
    height: 35px;
    position: sticky;
    margin: auto;
    width: 283px;
    margin-bottom: 20px;
    align-content: center;
`;

export const Container = style.div`
    margin-left: auto;
    width: 550px;
    margin: 0 auto;
    position: relative;
   
`;

export const Surface = style.div`
    background: #e9eaee;
    border: 2px solid #ffffff;
    padding: 44px 40px 20px 40px;
    width: 460px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    box-shadow: 1px 2px 6px rgba(0,0,0, 0.5);
    -moz-box-shadow: 1px 2px 6px rgba(0,0,0, 0.5);
    -webkit-box-shadow: 1px 2px 6px rgba(0,0,0, 0.5);
    width: 430px;
    height: 240px;

`;
export const Input = style.input`  
    margin-left: 15px;
    max-width: 100px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Main = style.div`
    margin: auto;
    display: grid;
    
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 1px;
    padding-top: 5%;
    width: auto;
`;

export const Phrase = style.p`
margin-left: 15px;
    color: #FFF;
    font-size: 120%;
`;

export const FaderInput = style.input`
    -webkit-appearance: none;
    margin-left: auto;
    margin: 30px 1%; 
    width: 98%;
    &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 90%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        background: #7C7C7C;
        box-shadow: 0 0 0 4px #3d3d3d; 
        border-radius: 25px;
      }
      &::-webkit-slider-thumb {
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: #F2F2F2;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3.6px;
      }

 &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 25px;
 }
`;

export const Code = style.div`
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    background-color: #091237;
    height: 300px;
    width: 90%;
    border-radius: 20px;
`;
export const Copy = style.div`

`;

export const Svg = style.svg`
    margin-left: 92%;
    padding-top: 15px;
    width:24px;
    height:24px;
    color: #F1F1F1;
    cursor: pointer;
`;
export const Span = style.span`

    font-size: 150%;
    font-family: Courier New;

`
