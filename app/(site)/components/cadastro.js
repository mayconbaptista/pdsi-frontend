import { toast } from 'react-hot-toast';
import api from '@/app/api/api';
import { signIn, useSession } from "next-auth/react";

export default function Cadastro({tooglePage}) {

    async function onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        formData.append('username',formProps.username);
        formData.append('password',formProps.psw);

        const formjson = JSON.stringify(formData)

        const userType = formProps.plano == 'on' ? 'free' : 'member'
        
        //await signIn();
        // Logar como admin e completar o Header
        try {

            signIn('credentials', {
                email: 'admin',
                password: 'admin',
                redirect: false,
            }).then((callback) => {
                if (callback.error) {
                    toast.error("Erro ao realizar login: " + callback.error);
                }
                if (callback.ok && !callback.error) {
                    toast.success("Usuario logado com sucesso!");
                }
            });

            // const responseAdmin = await api.get('/v1/sso/token',{
            //     data: {
            //         username: 'admin',
            //         password: 'admin',
            //     },
            // });

            console.log(responseAdmin);

            const response = await api.post(`v1/sso/user/${userType}`,{
                data: formjson,
                headers: {
                    //'Authorization': "Bearer " + responseAdmin.data.accessToken,
                    'Authorization' : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaXzg2UlhKV0ptMmlkVW5rMUg4WkVXQU1zNm4tZ3c5ZTFoVzk2X25OOVFrIn0.eyJleHAiOjE2OTk2NDc5MTAsImlhdCI6MTY5OTY0NzYxMCwianRpIjoiOWI1YWE0YmItOGUwZS00NTMyLWIzMTEtY2U0ZTU1OGQ0MDY5IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL2N1bGluYXJ5LWFuc3dlciIsInN1YiI6ImFmMTM0Y2FiLWY0MWMtNDY3NS1iMTQxLTIwNWY5NzVkYjY3OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJhY2tlbmQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJhMjc1ZDAzYy02YWQyLTQ4MTYtYjk0ZC1iNTJiMDc2MjM1OGUiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW5saW1pdGVkLXF1ZXN0aW9uIiwiYWRtaW4iLCJ1c2VyIl19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiJhMjc1ZDAzYy02YWQyLTQ4MTYtYjk0ZC1iNTJiMDc2MjM1OGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJBZG1pbiBkYSBTaWx2YSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6IkFkbWluIiwiZmFtaWx5X25hbWUiOiJkYSBTaWx2YSIsImVtYWlsIjoiYWRtaW5AcHNkaS5jb20ifQ.TmAj39wvIlhmWKxcdL8Hb6iwtMTSPYcxs2V48Uc52QRP5zKj34IoYyU4oJtxpIZwvvVwZyVxShe5USYJKAlIViDrXoQhgIohoHmTVezz6Z4UtEcI1fyG271pVZbF1jXEAnPQiVuuCCEJ7ydJst0nYuNssQA6UqS7UIytohA8-1ArHtOF3o1I519_6O48Cr5QGqASghRt_ac6Zg27ZKyP4vlCHGwyA_gg49cF2J2R2ugStq-IWLJWxLDq159YwfPFx4HlxMzG7QY4mcA0FjvykbCpRkKieYqwkpXwHsCd7Uv7b_xBddgw2FLejfB1pct4JBZbfsrA_P9_KKq-izXJBQ"
                }
            });

            console.log(response);
            toast.success("Usuario criado com sucesso!");

        } catch(err) {
            console.log("error in cadastro.js",err);
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
                    />
                    <label for="username" className="left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Usuario</label>
                </div>
                {/* senha */}
                <div className="w-[266px] h-[93px] left-0 top-[173px] absolute">
                    <input 
                    id='psw'
                    name='psw'
                    className="w-[266px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="password" />
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
                        <input checked type="radio" name="plano" id="gratuito" className="w-[45px] h-[38.57px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[7px] border border-stone-300" />
                        <label htmlFor="gratuito" className="w-[164px] h-[38.57px] left-[52px] top-0 absolute text-zinc-800 text-3xl font-normal font-['Roboto']">Gratuito</label>
                    </div>
                    <div className="w-[216px] h-[38.57px] left-[239px] top-[51.43px] absolute">
                        <input type="radio" name="plano" id="vip" className="w-[45px] h-[38.57px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[7px] border border-stone-300" />
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