export default async function Movies({ searchParams }) {
    const {
        titleSearchKey = "bagdad",
        type,
        y,
        page = "1"
    } = await searchParams;

    const params = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: titleSearchKey,
        page
    });

    if (type) params.set("type", type);
    if (y) params.set("y", y);

    const res = await fetch(
        `https://www.omdbapi.com/?${params.toString()}`,
        { cache: "no-store" }
    );

    const data = await res.json();

    return (
        <main>
            <h1>Busca de Filmes</h1>
            <h2>Resultado para: {titleSearchKey}</h2>

            {data.Search ? (
                data.Search.map((m) => (
                    <div key={m.imdbID} style={{ marginBottom: "25px" }}>
                        <h3>{m.Title} --- {m.Year}</h3>

                        {m.Poster !== "N/A" && (
                            <img
                                src={m.Poster}
                                alt={`Cartaz de ${m.Title}`}
                                width="150"
                            />
                        )}
                    </div>
                ))
            ) : (
                <p>{data.Error || "Nenhum filme encontrado."}</p>
            )}
        </main>
    );
}
