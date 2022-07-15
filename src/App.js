import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';
import {db} from './firebase-config.js';
import CustomChatBot from "./chatbot/ChatBotScreen";
import Home from "./chatbot/Home"
import AdminLogin from "./admin/AdminLogin";
import Queue from "./chatbot/Queue";
import DashboardFilaEspera from "./admin/DashboardFilaEspera";
import DashboardFilaSemSenha from "./admin/DashboardFilaSemSenha";
import DashboardFaixaAmarela from "./admin/DashboardFaixaAmarela";
import DashboardSala23 from "./admin/DashboardSala23";

var ultimo_nome = 'giovanni';
export var tamanho_atual = 0;

async function getSenhas(db){
  const senhasCollectionRef = collection(db, 'senhas');
  const senhasSnapshop = await getDocs(senhasCollectionRef);
  const senhasList = senhasSnapshop.docs.map((doc) => ({...doc.data(), id: doc.id}));
  console.log(senhasList[0].nome);
}

export async function addSenhas(nome_var, numero_hc_var){
  if(nome_var===ultimo_nome)
    return 0;
  const docRef = doc(db, "senhas", "tamanho_fila_senhas");
  const docSnap = await getDoc(docRef);

  var tamanho_var = -1;
  var vezes = 0; 
  while(tamanho_var<0 && vezes<5){
    if (docSnap.exists()) {
      tamanho_var = docSnap.data().tamanho
    } else {
      // doc.data() will be undefined in this case
    }
    vezes++;
  }

  if(tamanho_var===-1){
    console.log('Problema ao acessar o Banco de Dados');
    return
  }


  await setDoc(doc(db, "senhas", 'p'+(tamanho_var+1)), {
    numero_hc: numero_hc_var,
    nome: nome_var,
    senha: tamanho_var+1,
  });

  await updateDoc(docRef, {
    tamanho: tamanho_var+1
  });

  ultimo_nome = nome_var;
  tamanho_atual = tamanho_var+1;
  return tamanho_var+1;
  // docRef.update('tamanho_fila_senhas', FieldValue.increment(1));
}
//getSenhas(db)

export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="localizahc/*" element={<CustomChatBot />} />
        <Route path="queue/*" element={<Queue />} />
        <Route path="admin/*" element={<AdminLogin />} />
        <Route path="dashboard-fila-espera/*" element={<DashboardFilaEspera />} />
        <Route path="dashboard-fila-sem-senha/*" element={<DashboardFilaSemSenha />} />
        <Route path="dashboard-faixa-amarela/*" element={<DashboardFaixaAmarela />} />
        <Route path="dashboard-sala-23/*" element={<DashboardSala23 />} />
      </Routes>
    </Router>
  );
}
