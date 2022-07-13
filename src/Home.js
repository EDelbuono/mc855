import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from './img/LocalizaHC.svg';
import { ThemeProvider } from 'styled-components';

const props = {
  background: '#F0FAFF',
  fontFamily: 'Roboto',
  headerBgColor: '#0093DD',
  headerFontColor: '#FFFFFF',
  headerFontSize: '20px',
  botBubbleColor: '#ADEBD3',
  botFontColor: '#222222',
  userBubbleColor: '#FFFFFF',
  userFontColor: '#222222',
};


const Button = styled.button`
background: #FF6638;
border-radius: 100px;
color: #FFFFFF;
padding: '12px 24px';
${props => props.fontSize ? css`
        font-size: props.fontSize;             
`: ''}
`

function Home() {
    return (
      <ThemeProvider theme={props}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        </style>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {/* Logo is an actual React component */}
            <Logo /> 
            <br></br>
          </div>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h2>LocalizaHC</h2>
          </div>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <p>
              <Button onClick={() =>  console.log('tenteeeei')}>
                Iniciar Conversa
              </Button>
            </p>
          </div>
      </ThemeProvider>
  )
}

export default Home