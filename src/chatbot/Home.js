import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../img/LocalizaHC.svg';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const StartButton = styled.button`
background-color: #FF6638;
border-radius: 100px;
border: 1px solid;
color: #FFFFFF;
padding: 12px 90px;
font-size: 16px;
font-family: Roboto;
`

const theme = createTheme();

const Home = () => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
            backgroundColor: '#F0FAFF',
          }}>
          <Container sx={{
            pt: 25,
          }} style={{display: 'flex',  justifyContent:'center'}}>
            <Logo/> 
          </Container>
          <Container sx={{
            pt: 6,
          }} style={{display: 'flex',  justifyContent:'center',}}>
              <StartButton onclick>
                Iniciar Conversa
              </StartButton>
          </Container>
          </Box>
      </ThemeProvider>
)

export default Home