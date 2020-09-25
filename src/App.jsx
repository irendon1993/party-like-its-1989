import React, { Component } from 'react'

// PROBLEM
// It's 1989 and the Internet has just come online
// and Tim Berners-Lee  is going to invent the World Wide Web.
// The Cold War is ending, and the Berlin Wall will be coming down.
//  It's also going to be a great year for film.
// In this assignment
// you're going to build a small webpage
//  that showcases some of the most popular movies of 1989.
//
//
//
// EXAMPLE
//
//   "popularity": 22.582,
//   "vote_count": 2896,
//   "video": false,
//   "poster_path": "/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg",
//   "id": 2493,
//   "adult": false,
//   "backdrop_path": "/aQ2ZbNqIaecoQsryNe33UmDtms.jpg",
//   "original_language": "en",
//   "original_title": "The Princess Bride",
//   "genre_ids": [12, 35, 14, 10749, 10751],
//   "title": "The Princess Bride",
//   "vote_average": 7.6,
//   "overview": "In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size. But even death can't stop these true lovebirds from triumphing.",
//   "release_date": "1987-09-25"
//
// DATA
// Movies
// Movie Info
// Header
// ALGORITHM
//
// Work with API data
// Understand and use React components
// Understand and use "props" in React
// Use map to render a collection of components in React

class Movies extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=37f20dfeddf15b0a6c56879a4f925831'
    )
    const apiData = await response.json()
    this.setState({ movies: apiData.results })
    console.log(apiData)
  }

  render() {
    console.log(this.state)
    return (
      <section>
        {this.state.movies.map(movie => (
          <article>
            <div>
              <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              />
              <p>{movie.overview}</p>
            </div>
          </article>
        ))}
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <Movies />
      </main>
    )
  }
}

export default App
