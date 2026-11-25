"use client"

import Form from "next/form"
import { useState, useCallback, memo } from "react"
import { useFormStatus } from "react-dom"
import styles from "./page.module.css"

export default function Home() {
    console.log("Home renderizado")

    const [resultMovies, setResultMovies] = useState([])
    const [titleSearchKey, setTitleSearchKey] = useState("")

    const handleAction = useCallback(async (formData) => {
        const title = formData.get("titleSearchKey")
        setTitleSearchKey(title)

        const params = new URLSearchParams({
            apikey: "f1cbc41e",
            s: title
        })

        const httpRes = await fetch(
            `https://www.omdbapi.com/?${params.toString()}`
        )

        const jsonRes = await httpRes.json()

        setResultMovies(jsonRes.Search || [])
    }, [])

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Pesquisa de Filmes</h1>

            <MovieForm
                handleAction={handleAction}
                titleSearchKey={titleSearchKey}
                setTitleSearchKey={setTitleSearchKey}
            />

            <MovieTable movies={resultMovies} />
        </main>
    )
}

export const MovieForm = memo(function MovieForm({
    handleAction,
    titleSearchKey,
    setTitleSearchKey
}) {
    console.log("MovieForm renderizado")

    return (
        <Form action={handleAction} className={styles.form}>
            <label
                htmlFor="idTitleSearchKey"
                className={styles.label}
            >
                Título do filme
            </label>

            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                className={styles.input}
                value={titleSearchKey}
                onChange={(event) => setTitleSearchKey(event.target.value)}
                placeholder="Digite o nome de um filme..."
            />

            <SearchButton />
        </Form>
    )
})

function SearchButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className={styles.button}
            disabled={pending}
        >
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    )
}

export function MovieTable({ movies }) {
    console.log("MovieTable renderizado")

    return (
        <section>
            <h2 className={styles.resultsTitle}>Resultados</h2>

            {movies.length === 0 ? (
                <p className={styles.emptyMessage}>
                    Nenhum filme encontrado. Faça uma pesquisa.
                </p>
            ) : (
                <div className={styles.movieList}>
                    {movies.map((m) => (
                        <article
                            key={m.imdbID}
                            className={styles.movieCard}
                        >
                            <h3 className={styles.movieName}>
                                {m.Title}
                            </h3>

                            <p className={styles.movieYear}>
                                Ano: {m.Year}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}
