import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import api from "@/app/api/api";
import { restoreSession, saveUserSession } from "../customSession";

const jwt = require('jsonwebtoken');

function getNameAbreviation(name) {
    const nameParts = name.split(" ");
    var nameAbbreviation = ""
    if(nameParts.length >= 2) {
        nameAbbreviation = `${nameParts[0][0]}${nameParts[1][0]}`
    }else{
        nameAbbreviation = `${nameParts[0][0]}${nameParts[0][1]}`
    }

    return nameAbbreviation.toUpperCase();

}

function getTypeUser(roles) {

    return !roles.includes('free-question');
}

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
                const data = {
                    username: credentials.email,
                    password: credentials.password,
                };

                try {
                    const response = await api.post('/v1/sso/token',{
                        data:data,
                    });
                    const decoded = jwt.decode(response.data.accessToken);
                    console.log('Decoded JWT:', decoded);

                    const userData = {
                        
                        id: decoded.sid,
                        username: credentials.email,
                        name: decoded.name,
                        email: decoded.name,
                        plusData: "23/10/2023",
                        nameSymbol: getNameAbreviation(decoded.name),
                        plus: getTypeUser(decoded.realm_access.roles), 
                    }

                    //saveUserSession(credentials.email,credentials.password,decoded.exp);
                    //restoreSession();
                    return Promise.resolve(userData);

                }catch(err) {
                    if(err.response) {
                        console.log(err.response.data);
                    }
                    
                    const users = [
                        {
                            id: 1,
                            username: "admin",
                            password: "admin",
                            name: "Apenas um usuario qualquer",
                            email: "admin@example.com",
                            plusData: "23/10/2023",
                            nameSymbol: getNameAbreviation("Apenas um usuario qualquer"),
                            plus: true,
                        },
                        {
                            id: 2,
                            username: "test",
                            password: "test",
                            name: "Teste qualquer",
                            email: "teste@example.com",
                            plusData: null,
                            nameSymbol: getNameAbreviation("Teste qualquer"),
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