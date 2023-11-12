import { toast } from 'react-hot-toast';
import api from '@/app/api/api';
import axios from 'axios';
import { signIn, useSession } from "next-auth/react";

export default function Cadastro({tooglePage}) {

    async function register(data,userType) {

        let isSuccess = false;
        
        try {
            
            const responseToken = await api.post('/v1/sso/token',{
                username: 'admin',
                password: 'admin' 
            });

            const response = await api.post(`v1/sso/user/${userType}`,
            data,
            {
                headers:{
                    Authorization: "Bearer "+ responseToken.data.accessToken
                }
                
            });
            console.log("User",response);
            isSuccess = true

        } catch (err) {
            console.log(err);
        } finally {
            return isSuccess;
        }
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        const userType = formProps.plano;

        // Logar como admin e completar o Header
        
        const data = {
            username: formProps.username,
            password: formProps.psw
        }

        const successRegister = await register(data,userType)

        if(successRegister) {
            toast.success("Usuario criado com sucesso!");
        } else {
            toast.error("Erro ao criar usuário");
        }
    
    }

    return (
        <div>
            <div className="w-[1313px] h-[892px] left-[62px] top-[66px] absolute bg-white rounded-[15px] border border-stone-300" />
            <div className="w-[662px] h-[892px] left-[721px] top-[66px] absolute">
                <div className="w-[654px] h-[892px] left-0 top-0 absolute bg-orange bg-food-pattern rounded-tr-[15px] rounded-br-[15px]" />
                <img className="w-[662px] h-[892px] left-0 top-0 absolute" src="/image/promocionalChef.png" />
            </div>
            <form onSubmit={onFormSubmit} id="cadastro" className="w-[536px] h-[763px] left-[119px] top-[133px] absolute">
                <div className="w-[536px] h-11 left-0 top-0 absolute text-black text-[35px] font-bold font-['Roboto']">Cadastro:</div>
                {/* usuário */}
                <div className="w-[536px] h-[93px] left-0 top-[59px] absolute">
                    <input 
                        id='username'
                        name='username'
                        className="w-[536px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" 
                        type="text"
                        required 
                        autoFocus
                    />
                    <label for="username" className="left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Usuario</label>
                </div>
                {/* senha */}
                <div className="w-[266px] h-[93px] left-0 top-[173px] absolute">
                    <input 
                        id='psw'
                        name='psw'
                        className="w-[266px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" 
                        type="password" 
                        required
                    />
                    <label for="psw" className="w-[266px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Senha</label>
                </div>
                {/* confirmar senha */}
                <div className="w-[266px] h-[93px] left-[270px] top-[173px] absolute">
                    <input 
                    id='pswConf'
                    name='pswConf'
                    className="w-[266px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="password" />
                    <label for="pswConf" className="w-[266px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Confirmar senha</label>
                </div>
                {/* email */}
                <div className="w-[536px] h-[93px] left-0 top-[288px] absolute">
                    <input 
                    id='email'
                    name='email'
                    className="w-[536px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="email" />
                    <label for="email" className="left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Email</label>
                </div>
                {/* checkbox */}
                <div className="w-[531px] h-[90px] left-[3px] top-[403px] absolute">
                    <label for="plano" className="w-[531px] h-[37.71px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Plano:</label>
                    <div className="w-[216px] h-[38.57px] left-0 top-[51.43px] absolute">
                        <input 
                            checked 
                            type="radio" 
                            name="plano" 
                            id="gratuito" 
                            className="w-[45px] h-[38.57px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[7px] border border-stone-300" 
                            value={'free'}
                        />
                        <label htmlFor="gratuito" className="w-[164px] h-[38.57px] left-[52px] top-0 absolute text-zinc-800 text-3xl font-normal font-['Roboto']">Gratuito</label>
                    </div>
                    <div className="w-[216px] h-[38.57px] left-[239px] top-[51.43px] absolute">
                        <input 
                            type="radio" 
                            name="plano" 
                            id="vip" 
                            className="w-[45px] h-[38.57px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[7px] border border-stone-300" 
                            value={'member'}
                        />
                        <label htmlFor="vip" className="w-[164px] h-[38.57px] left-[52px] top-0 absolute text-zinc-800 text-3xl font-normal font-['Roboto']">VIP</label>
                    </div>
                </div>
                <div className="w-[258px] h-[63px] left-[139px] top-[552px] absolute">
                    <div className="w-[258px] h-[63px] left-0 top-0 absolute bg-emerald-500 rounded-lg shadow border border-red-400 border-opacity-10" />
                    <button type="submit"
                        className="w-[258px] h-[63px] left-0 top-0 absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto']">
                        Cadastrar
                    </button>
                </div>
                <div className="w-[258px] h-[63px] left-[139px] top-[700px] absolute">
                    <div className="w-[258px] h-[63px] left-0 top-0 absolute bg-orange rounded-lg shadow border border-red-400 border-opacity-10" />
                    <button className="w-[258px] h-[63px] left-0 top-0 absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto']" onClick={() => tooglePage()}>
                        Entrar
                    </button>
                </div>
                <div className="w-[282px] left-[127px] top-[662px] absolute text-center text-zinc-800 text-xl font-normal font-['Roboto']">Já possui uma conta?</div>
            </form>
        </div>
    )
}