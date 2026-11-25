export const metadata = {
    title: "Receita 13 - Next.js",
    description: "Primeira aplicação desenvolvida com Next.js"
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}
