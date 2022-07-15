import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const StartButton = styled.button`
background-color: #FF6638;
border-radius: 100px;
border: 1px solid;
color: #FFFFFF;
padding-top:12px;
padding-bottom:12px;
width: 300px;
font-size: 16px;
font-family: Roboto;
`


const theme = createTheme();

const Queue = () => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
            backgroundColor: '#F0FAFF',
          }}>
          <Container sx={{
            pt: 10,
          }} style={{display: 'flex',  justifyContent:'center'}}>
            <h2>Você está na fila de espera. Sua senha é: </h2> 
          </Container>
          <Container  style={{display: 'flex',  justifyContent:'center'}}>
            <Box border={2} borderRadius={2} fontSize={65} padding={5}>43</Box>
          </Container>
          <Container sx={{
            pt: 6,
          }} style={{display: 'flex',  justifyContent:'center',}}>
              <StartButton onclick>
                Voltar para tela anterior
              </StartButton>
          </Container>
          <Container sx={{
            pt: 6,
          }} style={{display: 'flex',  justifyContent:'center',}} height={100}>
              <StartButton onClick={()=>{window.location.href='/'}}>
                Sair da fila e voltar para o início
              </StartButton>
          </Container>
          </Box>
      </ThemeProvider>
)

export default Queue