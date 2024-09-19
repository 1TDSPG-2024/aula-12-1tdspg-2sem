import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemplo Boyler Plate",
  description: "Generated by create next app",
  keywords: "boyler, plate, exemplo",

};

export const viewport = {
  width:1920,
  height:1080,
  initialScale: 1.0,
  maximumScale: 5.0,
  colorScheme: 'dark'

}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
