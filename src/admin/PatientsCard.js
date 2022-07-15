import * as React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore/lite';
import {db} from './../firebase-config.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import styled from 'styled-components';

export const ConcludeButton = styled.button`
background-color: #33CC91;
border-radius: 8px;
border: 1px solid;
color: #FFFFFF;
padding-top: 9px;
padding-bottom: 9px;
width: 170px;
font-size: 14px;
font-family: Roboto;
`

export const CallButton = styled.button`
background-color: #FF6638;
border-radius: 8px;
border: 1px solid;
color: #FFFFFF;
padding-top: 9px;
padding-bottom: 9px;
width: 170px;
font-size: 14px;
font-family: Roboto;
`

// Generate Data
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

// Card "Pessoas sendo Atendidas" da seção "Fila de Espera"
export function Atendidas_FilaEspera() {
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
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.senha}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.hc}</TableCell>
              <TableCell>
                <ConcludeButton>CONCLUIR</ConcludeButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas na Fila" da seção "Fila de Espera"
export function Fila_FilaEspera() {
  return (
    <React.Fragment>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style>
      <Title>Pessoas na fila</Title>
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
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.senha}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.hc}</TableCell>
              <TableCell>
                <CallButton>CHAMAR</CallButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas sendo Atendidas" da seção "Fila sem Senha"
export function Atendidas_FilaSemSenha() {
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
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >HC</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.hc}</TableCell>
              <TableCell>
              <ConcludeButton>CONCLUIR</ConcludeButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas na Fila" da seção "Fila sem Senha"
export function Fila_FilaSemSenha() {
  const [senhas, setSenhas] = useState([]);

  const senhasCollectionRef = collection(db, 'senhas');
  
  
  useEffect(() => {
    const getSenhas = async () => {
      const senhasSnapshop = await getDocs(senhasCollectionRef);
      setSenhas(senhasSnapshop.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getSenhas();
  }, []);

  return (
    <React.Fragment>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style>
      <Title>Pessoas na fila</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
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
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {senhas.map((senha) => (
          <TableRow key={senha.senha}>
            <TableCell>{senha.senha}</TableCell>
            <TableCell>{senha.nome}</TableCell>
            <TableCell>{senha.numero_hc}</TableCell>
            <TableCell>{}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas sendo Atendidas" da seção "Faixa Amarela"
export function Atendidas_FaixaAmarela() {
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
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>
              <ConcludeButton>CONCLUIR</ConcludeButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas na Fila" da seção "Faixa Amarela"
export function Fila_FaixaAmarela() {
  return (
    <React.Fragment>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style>
      <Title>Pessoas na fila</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{
            color: '#999999',
            }}
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>
              <CallButton>CHAMAR</CallButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas sendo Atendidas" da seção "Sala 23"
export function Atendidas_Sala23() {
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
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>
              <ConcludeButton>CONCLUIR</ConcludeButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// Card "Pessoas na Fila" da seção "Sala 23"
export function Fila_Sala23() {
  return (
    <React.Fragment>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style>
      <Title>Pessoas na fila</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{
            color: '#999999',
            }}
            >Nome</TableCell>
            <TableCell sx={{
            color: '#999999',
            }}
            >Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>
              <CallButton>CHAMAR</CallButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
