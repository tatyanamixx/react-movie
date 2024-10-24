import React from "react";
import Movies from "../components/Movies"
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        totalResults: 0,
        page: 1,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=1`)
            .then (response => response.json())
            .then ((data) => this.setState({movies: data.Search, loading: false, totalResults: data.totalResults}))

    }

    searchMovies = (str, type = 'all', page = 1) => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}&page=${page}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false, totalResults: data.totalResults})
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render () {
        const {movies, loading} = this.state;

        return <main className = "container content">
            <Search searchMovies={this.searchMovies} />
            { loading ? (
                <Preloader />
            ) : (
                <Movies movies={this.state.movies} />
            ) } 
        </main>
    }
}

export default Main;