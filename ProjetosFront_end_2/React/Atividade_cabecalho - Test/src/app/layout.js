import HeaderNav from "@/components/header";
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Atividade do cabeçalho - Queijini",
  description: "Aplicação simples de cabeçalho com React Next",
  charset: 'UTF-8',
  author: 'João Gabriel Soares Inglez',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <HeaderNav />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon"/>
        {children}
      </body>
    </html>
  );
}
