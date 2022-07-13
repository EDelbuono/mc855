import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, senha, nome, hc, especialidade) {
  return { id, senha, nome, hc, especialidade};
}

const rows = [
  createData(
    0,
    '001',
    'Josias da Silva Santos',
    '196862',
    'Alergia e Imunologia Ped',
  ),
  createData(
    1,
    '002',
    'Cecília Lígia Castelo',
    '194374',
    'Alergia e Imunologia Ped',
  ),
  createData(
    2, 
    '003', 
    'Ivo Raimundo Belo', 
    '187600', 
    'Endocrinologia Ped', 
    ),
  createData(
    3,
    '004',
    'Valéria Hipólito Matos',
    '310146',
    'Reumatologia Ped',
  ),
  createData(
    4,
    '005',
    'Edvaldo Feliciano Lopes',
    '378794',
    'Reumatologia Ped',
  ),
];

export default function PatientsCard() {
  return (
    <React.Fragment>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style>
      <Title>Pessoas sendo atendidas</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{
            color: '#999999',
            }}
            >Senha</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >HC</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Especialidade</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.senha}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.hc}</TableCell>
              <TableCell>{row.especialidade}</TableCell>
              <TableCell>{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}