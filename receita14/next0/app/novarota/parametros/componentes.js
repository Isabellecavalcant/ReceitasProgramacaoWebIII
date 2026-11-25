export function Mensagem({ texto, autor }) {
    return (
        <div>
            <h2>{texto}</h2>
            <p>Mensagem enviada por: {autor}</p>
        </div>
    );
}
