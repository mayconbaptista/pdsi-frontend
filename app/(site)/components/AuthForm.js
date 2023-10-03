'use client';

import React, { useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

async function loginUser(credentials) {

    console.log("AAAA");
    if (credentials.username == "Teste" && credentials.password == 123) {
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

export const AuthForm = ({tooglePage}) => {

    const session = useSession();

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (session.status == 'authenticated') {
            router.push('/users');
        }
    }, [router, session.status]);

    const handleSubmit = async e => {
        e.preventDefault();

        signIn('credentials', {
            email: username,
            password: password,
            redirect: false,
        }).then((callback) => {
            if (callback.error) {
                toast.error("Erro ao realizar login: " + callback.error);
            }
            if (callback.ok && !callback.error) {
                toast.success("Usuario logado com sucesso!");
                router.push('/users');
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
                <div style={{ width: 1313, height: 892, left: 62, top: 66, position: 'absolute', background: 'white', borderRadius: 15, border: '1px #CCCCCC solid' }} />
                <div style={{ width: 650, height: 892, left: 62, top: 66, position: 'absolute' }}>
                    <div style={{ width: 650, height: 892, left: 0, top: 0, position: 'absolute', background: '#FF6347', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                    <img style={{ width: 650, height: 892, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src='/image/Rectangle3.png' />
                </div>
                <div style={{ width: 512, height: 780, left: 793, top: 119, position: 'absolute' }}>
                    {/* senha */}
                    <div style={{ width: 512, height: 72, left: 0, top: 329, position: 'absolute' }}>
                        <input type="password" onChange={(event) => { setPassword(event.target.value) }} required
                            style={{ width: 501, left: 11, top: 27, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word', border: 'none', outline: 'none', borderBottom: '2px #332E2E solid' }} 
                            placeholder="Senha" />
                    </div>
                    {/* usuário */}
                    <div style={{ width: 512, height: 72, left: 0, top: 217, position: 'absolute' }}>
                        <input type="text" onChange={(event) => { setUsername(event.target.value) }} required
                            style={{ width: 501, left: 11, top: 27, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word', border: 'none', outline: 'none', borderBottom: '2px #332E2E solid' }} 
                            placeholder="Usuário" />
                    </div>
                    <div style={{ width: 258, height: 63, left: 127, top: 453, position: 'absolute' }}>
                        <div style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', background: '#0EB36D', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px rgba(198.89, 112.87, 112.87, 0.13) solid' }} />
                        <button type="submit" 
                            style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#F5F5F5', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>
                                Entrar
                        </button>
                    </div>
                    <div style={{ width: 258, height: 63, left: 127, top: 717, position: 'absolute' }}>
                        <div style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', background: '#FF6347', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px rgba(198.89, 112.87, 112.87, 0.13) solid' }} />
                        <button type='button' onClick={() => tooglePage()}
                            style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#F5F5F5', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>
                                Cadastre-se
                        </button>
                    </div>
                    <div style={{ width: 258, left: 127, top: 529, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Esqueceu sua senha?</div>
                    <div style={{ width: 282, left: 115, top: 681, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Não possui uma conta ainda?</div>
                    <img style={{ width: 240, height: 189, left: 127, top: 0, position: 'absolute' }} src="/image/Logo Chef Virtual.png" />
                </div>
                <img style={{ width: 48, height: 82, left: 1273, top: 66, position: 'absolute' }} src="/image/Vector.png" />
                <div style={{ width: 584, height: 376, left: 95, top: 322, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 45, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Precisou de ajuda na cozinha? Deixa com o Chef!</div>
        </form>
    )
}

export default AuthForm;
