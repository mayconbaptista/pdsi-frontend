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
                toast.error("Erro ao realizar login: Nome de usuário ou senha errada")
                console.log("Erro ao realizar login: " + callback.error);
            }
            if (callback.ok && !callback.error) {
                toast.success("Usuario logado com sucesso!");
                router.push('/users');
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="w-[1313px] h-[892px] left-[62px] top-[66px] absolute bg-white rounded-[15px] border border-stone-300" />
                <div className="w-[650px] h-[892px] left-[62px] top-[66px] absolute">
                    <div className="w-[650px] h-[892px] left-0 top-0 absolute bg-orange rounded-tl-[15px] rounded-bl-[15px]" />
                    <img className="w-[650px] h-[892px] left-0 top-0 absolute rounded-tl-[15px] rounded-bl-[15px]" src='/image/Rectangle3.png' />
                </div>
                <div className="w-[512px] h-[780px] left-[793px] top-[119px] absolute">
                    {/* senha */}
                    <div className="w-[512px] h-[72px] left-0 top-[329px] absolute">
                        <input type="password" onChange={(event) => { setPassword(event.target.value) }} required
                            className="w-[501px] left-[11px] top-[27px] absolute text-zinc-800 text-3xl font-bold font-['Roboto'] border-b-2 border-zinc-800 outline-none"
                            placeholder="Senha" />
                    </div>
                    {/* usuário */}
                    <div className="w-[512px] h-[72px] left-0 top-[217px] absolute">
                        <input type="text" onChange={(event) => { setUsername(event.target.value) }} required
                            className="w-[501px] left-[11px] top-[27px] absolute text-zinc-800 text-3xl font-bold font-['Roboto'] border-b-2 border-zinc-800 outline-none"
                            placeholder="Usuário" />
                    </div>
                    <div className="w-[258px] h-[63px] left-[127px] top-[453px] absolute">
                        <div className="w-[258px] h-[63px] left-0 top-0 absolute bg-emerald-500 rounded-lg shadow border border-red-400 border-opacity-10" />
                        <button type="submit" 
                            className="w-[258px] h-[63px] left-0 top-0 absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto']">
                                Entrar
                        </button>
                    </div>
                    <div className="w-[258px] h-[63px] left-[127px] top-[717px] absolute">
                        <div className="w-[258px] h-[63px] left-0 top-0 absolute bg-orange rounded-lg shadow border border-red-400 border-opacity-10" />
                        <button type='button' onClick={() => tooglePage()}
                            className="w-[258px] h-[63px] left-0 top-0 absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto']">
                                Cadastre-se
                        </button>
                    </div>
                    <a href="/pagina-de-recuperacao-de-senha" className="w-[258px] left-[127px] top-[529px] absolute text-center text-zinc-800 text-xl font-normal font-['Roboto'] underline">Esqueceu sua senha?</a>
                    <div className="w-[282px] left-[115px] top-[681px] absolute text-center text-zinc-800 text-xl font-normal font-['Roboto']">Não possui uma conta ainda?</div>
                    <img className="w-60 h-[189px] left-[127px] top-0 absolute" src="/image/Logo Chef Virtual.png" />
                </div>
                <img className="w-[48px] h-[82px] left-[1273px] top-[66px] absolute" src="/image/Vector.png" />
                <div className="w-[584px] h-[376px] left-[95px] top-[322px] absolute text-center text-white text-[45px] font-bold font-['Roboto']">Precisou de ajuda na cozinha? Deixa com o Chef!</div>
        </form>
    )
}

export default AuthForm;
