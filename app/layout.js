'use client';

import './globals.css'
import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

/*
export const metadata = {
  title: 'Chef Virtual',
  description: 'O Chef Virtual é um sistema culinário inovador projetado para auxiliar cozinheiros, sejam eles amadores ou profissionais. Nosso Chef Virtual se adapta às suas necessidades e dúvidas, tornando sua jornada culinária mais deliciosa e eficiente. Faça perguntas sobre tópicos culinários, compartilhe com seus amigos, salve as suas melhores receitas.',
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextUIProvider>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </NextUIProvider>
      </body>
    </html>
  )
}
