export default function Cadastro() {
    return (
        <div>
            <div style={{ width: 1313, height: 892, left: 62, top: 66, position: 'absolute', background: 'white', borderRadius: 15, border: '1px #CCCCCC solid' }} />
            <div style={{ width: 662, height: 892, left: 721, top: 66, position: 'absolute' }}>
                <div style={{ width: 654, height: 892, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 654, height: 892, left: 0, top: 0, position: 'absolute', background: '#FF6347', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                    <img style={{ width: 654, height: 892, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="/image/Rectangle3.png" />
                </div>
                <div style={{ width: 546, height: 145, left: 66, top: 274, position: 'absolute' }}>
                    <div style={{ width: 546, height: 145, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px #CCCCCC solid' }} />
                    <div style={{ width: 546, height: 145, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Perguntas ilimitadas sobre<br />tópicos culinários</div>
                </div>
                <div style={{ width: 546, height: 145, left: 66, top: 437, position: 'absolute' }}>
                    <div style={{ width: 546, height: 145, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px #CCCCCC solid' }} />
                    <div style={{ width: 515, height: 145, left: 16, top: 0, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Você consegue gerar suas receitas pelo Whatsapp</div>
                </div>
                <div style={{ width: 546, height: 145, left: 66, top: 600, position: 'absolute' }}>
                    <div style={{ width: 546, height: 145, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px #CCCCCC solid' }} />
                    <div style={{ width: 515, height: 145, left: 16, top: 0, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Salve mensagens e as melhores receitas<br />e veja quando quiser!</div>
                </div>
                <div style={{ width: 351, left: 164, top: 215, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 35, fontFamily: 'Roboto', fontWeight: '800', wordWrap: 'break-word' }}>Benefícios VIP</div>
                <div style={{ width: 513, height: 80, left: 149, top: 788, position: 'absolute', textAlign: 'center' }}>
                    <span style={{ color: 'white', fontSize: 57, fontFamily: 'Rowdies', fontWeight: '400', wordWrap: 'break-word' }}>R$ 19,90</span>
                    <span style={{ color: 'white', fontSize: 35, fontFamily: 'Rowdies', fontWeight: '400', wordWrap: 'break-word' }}> </span>
                    <span style={{ color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>por mês</span>
                </div>
                <div style={{ left: 71, top: 763, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Seja VIP por</div>
                <img style={{ width: 240, height: 189, left: 207, top: 17, position: 'absolute' }} src="/image/Logo Chef Virtual.png" />
            </div>
            <div style={{ width: 536, height: 763, left: 119, top: 133, position: 'absolute' }}>
                <div style={{ width: 536, height: 44, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Cadastro:</div>
                {/* usuário */}
                <div style={{ width: 536, height: 93, left: 0, top: 59, position: 'absolute' }}>
                    <input style={{ width: 536, height: 48, left: 0, top: 41, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 5, border: '1px #CCCCCC solid' }} type="text" />
                    <div style={{ left: 0, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Usuario</div>
                </div>
                {/* senha */}
                <div style={{ width: 266, height: 93, left: 0, top: 173, position: 'absolute' }}>
                    <input style={{ width: 266, height: 48, left: 0, top: 41, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 5, border: '1px #CCCCCC solid' }} type="password" />
                    <div style={{ width: 266, left: 0, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Senha</div>
                </div>
                {/* confirmar senha */}
                <div style={{ width: 266, height: 93, left: 270, top: 173, position: 'absolute' }}>
                    <input style={{ width: 266, height: 48, left: 0, top: 41, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 5, border: '1px #CCCCCC solid' }} type="password" />
                    <div style={{ width: 266, left: 0, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Confirmar senha</div>
                </div>
                {/* email */}
                <div style={{ width: 536, height: 93, left: 0, top: 288, position: 'absolute' }}>
                    <input style={{ width: 536, height: 48, left: 0, top: 41, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 5, border: '1px #CCCCCC solid' }} type="email" />
                    <div style={{ left: 0, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Email</div>
                </div>
                {/* checkbox */}
                <div style={{ width: 531, height: 90, left: 3, top: 403, position: 'absolute' }}>
                    <div style={{ width: 531, height: 37.71, left: 0, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Plano:</div>
                    <div style={{ width: 216, height: 38.57, left: 0, top: 51.43, position: 'absolute' }}>
                        <input type="radio" name="plano" id="gratuito" style={{ width: 45, height: 38.57, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 7, border: '1px #CCCCCC solid' }} />
                        <label htmlFor="gratuito" style={{ width: 164, height: 38.57, left: 52, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Gratuito</label>
                    </div>
                    <div style={{ width: 216, height: 38.57, left: 239, top: 51.43, position: 'absolute' }}>
                        <input type="radio" name="plano" id="vip" style={{ width: 45, height: 38.57, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0)', borderRadius: 7, border: '1px #CCCCCC solid' }} />
                        <label htmlFor="vip" style={{ width: 164, height: 38.57, left: 52, top: 0, position: 'absolute', color: '#332E2E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>VIP</label>
                    </div>
                </div>
                <div style={{ width: 258, height: 63, left: 139, top: 552, position: 'absolute' }}>
                    <div style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', background: '#0EB36D', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px rgba(198.89, 112.87, 112.87, 0.13) solid' }} />
                    <button type="submit"
                        style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#F5F5F5', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>
                        Cadastrar
                    </button>
                </div>
                <div style={{ width: 258, height: 63, left: 139, top: 700, position: 'absolute' }}>
                    <div style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', background: '#FF6347', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px rgba(198.89, 112.87, 112.87, 0.13) solid' }} />
                    <button style={{ width: 258, height: 63, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#F5F5F5', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>
                        Entrar
                    </button>
                </div>
                <div style={{ width: 282, left: 127, top: 662, position: 'absolute', textAlign: 'center', color: '#332E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Já possui uma conta?</div>
            </div>
        </div>
    )
}