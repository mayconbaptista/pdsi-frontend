export default async function UsersLayout({children}) {
    return(
        <div>
            <h1>Layout Usuario Logado</h1>
            {children}
        </div>
    );
};