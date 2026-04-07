

function MovieCard(){
    const movies = [
        {
            movieName:'Spiderman',
            moviePhoto:'/img/spiderman.png',
            movieDescription:'The movie is part of Marvel'
        },
        {
            movieName:'Gladiator',
            moviePhoto:'/img/gladiator.png',
            movieDescription:'The movie is about Rome'
        },
        {
            movieName:'Back to the future',
            moviePhoto:'/img/backtothefuture.png',
            movieDescription:'The movie is about traveling in time'
        }
    ];

    return <div className="cards">
                {movies.map(movie => 
                <div className="card">
                    <h2>{movie.movieName}</h2>
                    <img className="moviesPhoto" src={movie.moviePhoto}/>
                    <p>{movie.movieDescription}</p>
                </div>
            )}
            </div>

}


export default MovieCard;