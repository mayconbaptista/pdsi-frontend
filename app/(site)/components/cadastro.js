export default function Cadastro() {
    return (
        <div>
            <div className="w-[1313px] h-[892px] left-[62px] top-[66px] absolute bg-white rounded-[15px] border border-stone-300" />
            <div className="w-[662px] h-[892px] left-[721px] top-[66px] absolute">
                <div className="w-[654px] h-[892px] left-0 top-0 absolute">
                    <div className="w-[654px] h-[892px] left-0 top-0 absolute bg-orange rounded-tr-[15px] rounded-br-[15px]" />
                    <img className="w-[654px] h-[892px] left-0 top-0 absolute rounded-tr-[15px] rounded-br-[15px]" src="/image/Rectangle3.png" />
                </div>
                <div className="w-[546px] h-[145px] left-[66px] top-[274px] absolute">
                    <div className="w-[546px] h-[145px] left-0 top-0 absolute bg-neutral-100 rounded-[10px] shadow border border-stone-300" />
                    <div className="w-[546px] h-[145px] left-0 top-0 absolute text-center text-zinc-800 text-3xl font-normal font-['Roboto']">Perguntas ilimitadas sobre<br />tópicos culinários</div>
                </div>
                <div className="w-[546px] h-[145px] left-[66px] top-[437px] absolute">
                    <div className="w-[546px] h-[145px] left-0 top-0 absolute bg-neutral-100 rounded-[10px] shadow border border-stone-300" />
                    <div className="w-[515px] h-[145px] left-[16px] top-0 absolute text-center text-zinc-800 text-3xl font-normal font-['Roboto']">Você consegue gerar suas receitas pelo Whatsapp</div>
                </div>
                <div className="w-[546px] h-[145px] left-[66px] top-[600px] absolute">
                    <div className="w-[546px] h-[145px] left-0 top-0 absolute bg-neutral-100 rounded-[10px] shadow border border-stone-300" />
                    <div className="w-[515px] h-[145px] left-[16px] top-0 absolute text-center text-zinc-800 text-3xl font-normal font-['Roboto']">Salve mensagens e as melhores receitas<br />e veja quando quiser!</div>
                </div>
                <div className="w-[351px] left-[164px] top-[215px] absolute text-center text-zinc-800 text-[35px] font-extrabold font-['Roboto']">Benefícios VIP</div>
                <div className="w-[513px] h-20 left-[149px] top-[788px] absolute text-center">
                    <span style={{ color: 'white', fontSize: 57, fontFamily: 'Rowdies', fontWeight: '400', wordWrap: 'break-word' }}>R$ 19,90</span>
                    <span style={{ color: 'white', fontSize: 35, fontFamily: 'Rowdies', fontWeight: '400', wordWrap: 'break-word' }}> </span>
                    <span style={{ color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>por mês</span>
                </div>
                <div className="left-[71px] top-[763px] absolute text-center text-white text-[27px] font-normal font-['Roboto']">Seja VIP por</div>
                <img className="w-60 h-[189px] left-[207px] top-[17px] absolute" src="/image/Logo Chef Virtual.png" />
            </div>
            <div className="w-[536px] h-[763px] left-[119px] top-[133px] absolute">
                <div className="w-[536px] h-11 left-0 top-0 absolute text-black text-[35px] font-bold font-['Roboto']">Cadastro:</div>
                {/* usuário */}
                <div className="w-[536px] h-[93px] left-0 top-[59px] absolute">
                    <input className="w-[536px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="text" />
                    <div className="left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Usuario</div>
                </div>
                {/* senha */}
                <div className="w-[266px] h-[93px] left-0 top-[173px] absolute">
                    <input className="w-[266px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="password" />
                    <div className="w-[266px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Senha</div>
                </div>
                {/* confirmar senha */}
                <div className="w-[266px] h-[93px] left-[270px] top-[173px] absolute">
                    <input className="w-[266px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="password" />
                    <div className="w-[266px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Confirmar senha</div>
                </div>
                {/* email */}
                <div className="w-[536px] h-[93px] left-0 top-[288px] absolute">
                    <input className="w-[536px] h-[48px] left-0 top-[41px] absolute bg-transparent rounded-md border border-gray-300" type="email" />
                    <div className="left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Email</div>
                </div>
                {/* checkbox */}
                <div className="w-[531px] h-[90px] left-[3px] top-[403px] absolute">
                    <div className="w-[531px] h-[37.71px] left-0 top-0 absolute text-zinc-800 text-3xl font-bold font-['Roboto']">Plano:</div>
                    <div className="w-[216px] h-[38.57px] left-0 top-[51.43px] absolute">
                        <input type="radio" name="plano" id="gratuito" className="w-[45px] h-[38.57px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[7px] border border-stone-300" />
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
                    <button className="w-[258px] h-[63px] left-0 top-0 absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto']">
                        Entrar
                    </button>
                </div>
                <div className="w-[282px] left-[127px] top-[662px] absolute text-center text-zinc-800 text-xl font-normal font-['Roboto']">Já possui uma conta?</div>
            </div>
        </div>
    )
}