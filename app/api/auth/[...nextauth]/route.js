import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'},
            },
            async authorize(credentials) {

                // Fazer login

                if(!credentials.email || !credentials.password) {
                    throw new Error('Eita');
                }

                if(credentials.email !== "admin" && credentials.password !== "admin") {
                    throw new Error('Credenciais Invalidas');
                }

                const user = { id: 1, name: 'Felipe', email: 'felipe@example.com'}
                return user;

            }
        }),
    ],
    debug: process.env.NODE_ENV == 'development',
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};