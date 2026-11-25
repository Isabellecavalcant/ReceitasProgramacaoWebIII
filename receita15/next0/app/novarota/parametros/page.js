import { Mensagem } from "./componentes";

export default function ParametrosHome() {
    return (
        <div>
            <h1>Componentes com parâmetros</h1>

            <Mensagem
                texto="Olá! Estou aprendendo Next.js."
                autor="Isabelle"
            />

            <Mensagem
                texto="Os componentes podem ser reutilizados!"
                autor="Receita 14"
            />
        </div>
    );
}
