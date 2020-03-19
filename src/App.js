import React, { useState } from 'react';
import { Logo, Container, Input, Main, Phrase, Surface, GlobalStyle, FaderInput, Code, Svg, Span} from './styles';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';

export default function App() {

  const[tlValue, usetlValue] = useState(0);
  const[trValue, usetrValue] = useState(0);
  const[blValue, useblValue] = useState(0);
  const[brValue, usebrValue] = useState(0);
  const[totalValue, usetotalValue] = useState(0);
  const[AllUpdated, useallUpdated] = useState();
  const[Copied, usecopied] = useState(false);
  const AllBorders = {
    'border-radius': `${totalValue}px`
  };
  const SpecifyBorders = {
    'border-top-left-radius': `${tlValue}px`,
    'border-top-right-radius': `${trValue}px`,
    'border-bottom-left-radius': `${blValue}px`,
    'border-bottom-right-radius': `${brValue}px`
  };

  function updateAll(){
    usetrValue(totalValue)
    useblValue(totalValue)
    usebrValue(totalValue)
    usetlValue(totalValue)
  }
  
  function copyText(){

    if(AllUpdated){
      const code = `border-radius: ${AllBorders["border-radius"]};`;
      const dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = code;
      dummy.select();
      dummy.setSelectionRange(0, 99999)
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }else{
      const code = 
      `
      border-top-left-radius: ${SpecifyBorders["border-top-left-radius"]};
      border-top-right-radius: ${SpecifyBorders["border-top-right-radius"]};
      border-bottom-left-radius: ${SpecifyBorders["border-bottom-left-radius"]};
      border-bottom-right-radius: ${SpecifyBorders["border-bottom-right-radius"]};
    
      `;
       const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = code;
        dummy.select();
        dummy.setSelectionRange(0, 99999)
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    

    usecopied(true)
  }

  return (
    <>
    <GlobalStyle/>
    
        <Container id="container"> 
        <Logo/>
            <Surface style={AllUpdated ? AllBorders: SpecifyBorders}/>
            <FaderInput type="range" max="160" onChange={(e) => {
              useallUpdated(true)
              updateAll();
              usetotalValue(e.target.value)
              }}/>
            <Main>
              <div>
                <Phrase>Superior Esquerdo</Phrase>
                <Input type="number" value={tlValue} min="0" onChange={(e) => {
                  useallUpdated(false)
                  usetlValue(e.target.value)
              }}/>

              </div>
                
              <div>
                <Phrase>Superior Direito</Phrase>
                <Input type="number" value={trValue} min="0" onChange={(e) => {
                  useallUpdated(false) 
                  usetrValue(e.target.value)
              }}/>
              </div>
                
              <div>
                <Phrase>Inferior Esquerdo</Phrase>
                <Input type="number" value={blValue} min="0" onChange={(e) => {
                  useallUpdated(false) 
                  useblValue(e.target.value)
              }}/>
              </div>
                
              <div>
                <Phrase>Inferior Direito</Phrase>
                <Input type="number" value={brValue} min="0" onChange={(e) => {
                  useallUpdated(false) 
                  usebrValue(e.target.value)
              }}/>
              </div>
     
            </Main>

            <Code>
              
            <Tooltip title="Copiar Texto" color="red" arrow="true" placement="top" onClick={() => copyText()}>
            <Svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
            </Svg>
              </Tooltip>
     
            <p style={{"padding-left": "20px"}}>{AllUpdated ? (
            <>
            <Span style={{"color": "#737373"}}>border-box: </Span> 
            <Span style={{"color": "#E74545"}}>{AllBorders["border-radius"]}</Span>
            <Span style={{"color": "#737373"}}>;</Span>
            </>
            ):
            <>
              <Span style={{"color": "#737373"}}>border-top-left-radius: </Span> 
            <Span style={{"color": "#E74545"}}>{SpecifyBorders["border-top-left-radius"]}</Span>
            <Span style={{"color": "#737373"}}>;</Span>
            <br/>
            <br/>
            <Span style={{"color": "#737373"}}>border-top-right-radius: </Span>
            <Span style={{"color": "#E74545"}}>{SpecifyBorders["border-top-right-radius"]}</Span>
            <Span style={{"color": "#737373"}}>;</Span>
            <br/>
            <br/>
            <Span style={{"color": "#737373"}}>border-bottom-left-radius: </Span> 
            <Span style={{"color": "#E74545"}}>{SpecifyBorders["border-bottom-left-radius"]}</Span>
            <Span style={{"color": "#737373"}}>;</Span>
            <br/>
            <br/>
            <Span style={{"color": "#737373"}}>border-bottom-right-radius: </Span> 
            <Span style={{"color": "#E74545"}}>{SpecifyBorders["border-bottom-right-radius"]}</Span>
            <Span style={{"color": "#737373"}}>;</Span>
            </>
            }</p>
            </Code>

            <Snackbar
              open={Copied}
              onClose={ () => usecopied(false)}
              message="Copiado!"
            />
        </Container>
        </>
  );
}
