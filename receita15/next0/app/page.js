import Link from "next/link";
import { MensagemBoasVindas } from "./componentes";

export default function Home() {
    return (
        <div>
            <h1>Viva Santana!</h1>

            <Link href="/novarota">
                Rota 1
            </Link>

            <br />
            <br />

            <a href="/novarota">
                Rota 1, jeito antigo
            </a>

            <MensagemBoasVindas />
        </div>
    );
}
