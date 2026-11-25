import Form from "next/form";

export default function MovieSearchForm() {
    return (
        <section>
            <h2>Pesquisar filmes</h2>

            <Form action="/movies">
                <div>
                    <label htmlFor="idTitleSearchKey">Título</label>
                    <input
                        id="idTitleSearchKey"
                        name="titleSearchKey"
                        type="text"
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="idYear">Ano de lançamento</label>
                    <input
                        id="idYear"
                        name="y"
                        type="number"
                        placeholder="Ex.: 1988"
                    />
                </div>

                <br />

                <button type="submit">Pesquisar</button>
            </Form>
        </section>
    );
}
