'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")

    if (!titleSearchKey || !titleSearchKey.trim()) {
        return { Search: [] }
    }

    try {
        const apiKey = process.env.OMDB_API_KEY

        if (!apiKey) {
            throw new Error("A chave da API OMDb não foi encontrada.")
        }

        const params = new URLSearchParams({
            apikey: apiKey,
            s: titleSearchKey.trim()
        })

        if (yearSearchKey && yearSearchKey.trim()) {
            params.append("y", yearSearchKey.trim())
        }

        const response = await fetch(
            `https://www.omdbapi.com/?${params.toString()}`
        )

        if (!response.ok) {
            throw new Error("Não foi possível consultar a API OMDb.")
        }

        const jsonRes = await response.json()

        return jsonRes

    } catch (error) {
        console.error("Erro na busca de filmes:", error)

        return {
            error: "Ocorreu um erro ao pesquisar os filmes.",
            Search: []
        }
    }
}
