function Movie (props) {
    const {
        Title: title, 
        Year: year, 
        imdbID: id, 
        Type: type, 
        Poster: poster
    } = props;    
    
    return (
        <div id = {id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A" ?
                    <img className="activator" src={`https://fakeimg.pl/400x600?text=${title}`} alt="N/A"/>
                    :
                    <img className="activator" src={poster} alt="N/A"/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text 
                text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
    );
};

export default Movie;