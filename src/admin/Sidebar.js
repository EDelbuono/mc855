import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Filter1 from '@mui/icons-material/Filter1';
import NoSim from '@mui/icons-material/NoSim';
import TrendingFlat from '@mui/icons-material/TrendingFlat';
import AccountBalance from '@mui/icons-material/AccountBalance';

export const Sidebar = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Filter1 />
      </ListItemIcon>
      <ListItemText primary="Fila de Espera" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NoSim />
      </ListItemIcon>
      <ListItemText primary="Fila sem Senha" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TrendingFlat />
      </ListItemIcon>
      <ListItemText primary="Faixa Amarela" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalance  />
      </ListItemIcon>
      <ListItemText primary="Sala 23" />
    </ListItemButton>
  </React.Fragment>
);