import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'},
            },
            async authorize(credentials) {
                // Check the credentials and return a user object if valid
                const users = [
                    {
                        id: 1,
                        username: "admin",
                        password: "admin",
                        name: "Apenas um usuario qualquer",
                        email: "admin@example.com",
                        plusData: "23/10/2023",
                        nameSymbol: "AU",
                        plus: true,
                    },
                    {
                        id: 2,
                        username: "test",
                        password: "test",
                        name: "Teste qualquer",
                        email: "teste@example.com",
                        plusData: null,
                        nameSymbol: "TQ",
                        plus: false,
                    }
                ];
        
                const user = users.find(u => u.username === credentials.email && u.password === credentials.password);

                if (user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.plus = user.plus;
                token.plusData = user.plusData;
                token.nameSymbol = user.nameSymbol;
            }
            return token;
        },
        async session({session, token}) {
            if(token){
                session.user = token;
            }
            return session;
        },
      },
    session: {
        jwt: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV == 'development',
    
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};