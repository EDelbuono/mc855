import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Filter1 from '@mui/icons-material/Filter1';
import NoSim from '@mui/icons-material/NoSim';
import TrendingFlat from '@mui/icons-material/TrendingFlat';
import AccountBalance from '@mui/icons-material/AccountBalance';

export const Sidebar_FilaEspera = (
  <React.Fragment>
    <ListItemButton sx={{
            backgroundColor: '#F0FAFF',
            }}
            onClick={()=>{window.location.href='/dashboard-fila-espera'}}>
      <ListItemIcon>
        <Filter1 />
      </ListItemIcon>
      <ListItemText primary="Fila de Espera" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-fila-sem-senha'}}>
      <ListItemIcon>
        <NoSim />
      </ListItemIcon>
      <ListItemText primary="Fila sem Senha" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-faixa-amarela'}}>
      <ListItemIcon>
        <TrendingFlat />
      </ListItemIcon>
      <ListItemText primary="Faixa Amarela" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-sala-23'}}>
      <ListItemIcon>
        <AccountBalance  />
      </ListItemIcon>
      <ListItemText primary="Sala 23" />
    </ListItemButton>
  </React.Fragment>
);

export const Sidebar_FilaSemSenha = (
  <React.Fragment>
    <ListItemButton
            onClick={()=>{window.location.href='/dashboard-fila-espera'}}>
      <ListItemIcon>
        <Filter1 />
      </ListItemIcon>
      <ListItemText primary="Fila de Espera" />
    </ListItemButton>
    <ListItemButton sx={{
            backgroundColor: '#F0FAFF',
            }} onClick={()=>{window.location.href='/dashboard-fila-sem-senha'}}>
      <ListItemIcon>
        <NoSim />
      </ListItemIcon>
      <ListItemText primary="Fila sem Senha" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-faixa-amarela'}}>
      <ListItemIcon>
        <TrendingFlat />
      </ListItemIcon>
      <ListItemText primary="Faixa Amarela" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-sala-23'}}>
      <ListItemIcon>
        <AccountBalance  />
      </ListItemIcon>
      <ListItemText primary="Sala 23" />
    </ListItemButton>
  </React.Fragment>
);

export const Sidebar_FaixaAmarela = (
  <React.Fragment>
    <ListItemButton
            onClick={()=>{window.location.href='/dashboard-fila-espera'}}>
      <ListItemIcon>
        <Filter1 />
      </ListItemIcon>
      <ListItemText primary="Fila de Espera" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-fila-sem-senha'}}>
      <ListItemIcon>
        <NoSim />
      </ListItemIcon>
      <ListItemText primary="Fila sem Senha" />
    </ListItemButton>
    <ListItemButton sx={{
            backgroundColor: '#F0FAFF',
            }} onClick={()=>{window.location.href='/dashboard-faixa-amarela'}}>
      <ListItemIcon>
        <TrendingFlat />
      </ListItemIcon>
      <ListItemText primary="Faixa Amarela" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-sala-23'}}>
      <ListItemIcon>
        <AccountBalance  />
      </ListItemIcon>
      <ListItemText primary="Sala 23" />
    </ListItemButton>
  </React.Fragment>
);

export const Sidebar_Sala23 = (
  <React.Fragment>
    <ListItemButton
            onClick={()=>{window.location.href='/dashboard-fila-espera'}}>
      <ListItemIcon>
        <Filter1 />
      </ListItemIcon>
      <ListItemText primary="Fila de Espera" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-fila-sem-senha'}}>
      <ListItemIcon>
        <NoSim />
      </ListItemIcon>
      <ListItemText primary="Fila sem Senha" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/dashboard-faixa-amarela'}}>
      <ListItemIcon>
        <TrendingFlat />
      </ListItemIcon>
      <ListItemText primary="Faixa Amarela" />
    </ListItemButton>
    <ListItemButton sx={{
            backgroundColor: '#F0FAFF',
            }} onClick={()=>{window.location.href='/dashboard-sala-23'}}>
      <ListItemIcon>
        <AccountBalance  />
      </ListItemIcon>
      <ListItemText primary="Sala 23" />
    </ListItemButton>
  </React.Fragment>
);