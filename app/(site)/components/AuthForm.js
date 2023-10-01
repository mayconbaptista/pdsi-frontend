'use client';

import React, { useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

async function loginUser(credentials) {

    console.log("AAAA");
    if(credentials.username == "Teste" && credentials.password == 123) {
        return "TRASDAWDAW";
    }

    return null;
    // Realiza request com servidor

    // se não possui login
        // manda para cadastro
    // se errou senha ou usario
        // avisar
    // se login 
        // libera acesso
    
    // return fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(credentials)
    // })
    //   .then(data => data.json())

}

export const AuthForm = () => {

    const session = useSession();

    const router = useRouter();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    useEffect( () => {
        if(session.status == 'authenticated'){
            router.push('/users');
        }
    },[router,session.status]);

    const handleSubmit = async e => {
      e.preventDefault();

      signIn('credentials',{
            email: username,
            password: password,
            redirect: false,
        }).then((callback) => {
            if(callback.error) {
                toast.error("Erro ao realizar login: " + callback.error);
            }
            if(callback.ok && !callback.error){
                toast.success("Usuario logado com sucesso!");
                router.push('/users');
            }
      });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={(event) => {setUsername(event.target.value)}} required/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} required/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AuthForm;
