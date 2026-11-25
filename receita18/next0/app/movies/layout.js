import MovieSearchForm from "../MovieSearchForm";

export default function MoviesLayout({ children }) {
    return (
        <section>
            <MovieSearchForm />
            <hr />
            {children}
        </section>
    );
}
