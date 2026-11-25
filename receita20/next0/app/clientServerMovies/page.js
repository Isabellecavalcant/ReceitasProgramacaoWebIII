"use client"

import Form from "next/form"
import { useState } from "react"
import { searchMovies } from "../actions/movieActions"

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const result = await searchMovies(formData)
        setData(result)
    }

    return (
        <main>
            <h1>Pesquisa de Filmes com Server Actions</h1>

            <MovieForm actionHandler={handleAction} />

            {data.Search && data.Search.length > 0 && (
                <MovieTable movies={data.Search} />
            )}

            {data.error && (
                <p>{data.error}</p>
            )}

            {data.Response === "False" && (
                <p>Nenhum filme encontrado para essa pesquisa.</p>
            )}
        </main>
    )
}

function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler}>
            <div>
                <label htmlFor="idTitleSearchKey">
                    Título do filme:
                </label>

                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    type="text"
                    placeholder="Digite o nome do filme"
                    required
                />
            </div>

            <div>
                <label htmlFor="idYearSearchKey">
                    Ano de lançamento (opcional):
                </label>

                <input
                    id="idYearSearchKey"
                    name="yearSearchKey"
                    type="number"
                    min="1888"
                    max="2099"
                    placeholder="Ex.: 2022"
                />
            </div>

            <button type="submit">
                Pesquisar
            </button>
        </Form>
    )
}

function MovieTable({ movies }) {
    return (
        <section>
            <h2>Resultados da pesquisa</h2>

            {movies.map((movie) => (
                <article key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>Ano: {movie.Year}</p>
                    <p>Tipo: {movie.Type}</p>

                    {movie.Poster !== "N/A" && (
                        <img
                            src={movie.Poster}
                            alt={`Pôster de ${movie.Title}`}
                            width="100"
                        />
                    )}
                </article>
            ))}
        </section>
    )
}
