import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Clínica MedVital",
  description: "Site de uma Clinica Médica",
  charset: "UTF-8",
  author: "João Gabriel Soares Inglez",
  keywords: "HTML, CSS, JavaScript, React, Next.js, Clínica, Medica, MedVital, Saúde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
