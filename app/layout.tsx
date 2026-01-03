import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gerenciador de funcionários",
  description: "Frontend da aplicação de gerenciamento de funcionários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
