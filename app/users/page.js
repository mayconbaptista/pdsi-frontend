import { Logo } from "@/public/image/Logo"

const Users = () => {
    return (
        <div className={`
            h-screen
            w-full
            flex justify-center items-center
        `}>
            <h1 className="text-xl font-bold">
                <Logo height={300}/>
                Bem vindo Usuario, selecione um chat
            </h1>
        </div>
    );
}

export default Users;