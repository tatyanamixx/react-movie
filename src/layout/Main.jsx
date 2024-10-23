import React from "react";
import Movies from "../components/Movies"
import Preloader from "../components/Preloader";
import Search from "../components/Search";


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=6e049cc1&s=matrix')
            .then (response => response.json())
            .then ((data) => this.setState({movies: data.Search}))

    }

    searchMoveis (str, type = 'all') {

        if (this.props.str.length  === 0) return null;
        
        fetch (
            `http://www.omdbapi.com/?apikey=6e049cc1&s=${str}
            ${type !== 'all' ? `&type=${type}`: ''
            }`
        )
        .then (response => response.json())
        .then ((data) => this.setState({movies: data.Search}))           
    }

    render () {
        const {movies} = this.state;

        return <main className = "container content">
            <Search searchMoveis={this.searchMoveis}/>
            {   movies.length ? (
                    <Movies movies={this.state.movies}/>
                ) : 
                <Preloader/>
             } 
        </main>
    }
}

export default Main;