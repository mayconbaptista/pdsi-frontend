'use client';

import AuthForm from "./components/AuthForm";
import { useState } from "react";

import Cadastro from "./components/cadastro";

export default function Home() {

  const [typeAcess, setTypeAcess] = useState(true);

  function acess() {
    setTypeAcess(!typeAcess);
  }

  return(
    <div>
      <div style={{ width: 1440, height: 1024, position: 'relative', background: 'linear-gradient(0deg, #F5F5F5 0%, #F5F5F5 100%)', backgroundImage: 'url(/image/Rectangle3.png)' }}>
        {typeAcess ? (<AuthForm tooglePage={() => acess()}/>) : (<Cadastro tooglePage={() => acess()}/>)}
      </div>
    </div>
  )
}