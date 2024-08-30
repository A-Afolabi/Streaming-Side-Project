import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import tvPlaceholder from './assets/tvPlaceholder.avif'
import comingSoonPlaceholder from './assets/comingSoonPlaceholder.png'
// import imagePlaceholder from './assets/imgComingSoon.webp'

const Main = () => {

  // const [search, setSearch] = useState([])
  const [releases, setReleases] = useState([])

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const searchField = async () => {
      // Search results work for auto complete, but need to change next for values changing
      const { data } = await axios.get('https://api.watchmode.com/v1/autocomplete-search/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ&search_value=dwayne%johnson&search_type=1')
      console.log(data.results)
      // 'https://api.watchmode.com/v1/list-titles/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ&source_ids=203,57'
    }
    searchField()
  }, [])

  const handleSearch = () => {

  }

  useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await axios.get('https://api.watchmode.com/v1/releases/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ')
        // console.log(data.releases)
        setReleases(data.releases)
      } catch (error) {
        setIsError(true)
      }
    }
    getReleases()
  }, [])

  return (
    <div className='container'>
      <h1 className="title is-1">TV Show -- Movie -- Find where to stream it</h1>
      <h4>USA🇺🇸, Canada🇨🇦, Australia🇦🇺, England🏴󠁧󠁢󠁥󠁮󠁧󠁿, Spain🇪🇸 & Brazil🇧🇷 all Supported</h4>
      <form onSubmit={handleSearch}>
        <input type='text' id='search' name='movieOrTvshow' placeholder='Search for a TV Show, Movie or person...' />
        <input type='submit' value='Search' />
      </form>
      <br></br>
      <br></br>
      {/* Replace br with padding later */}
      {
        isError ?
          <p>There was an error! Please try again</p>
          :
          <>
            <h3>Upcoming Releases</h3>
            {releases.map(release => {
              return (
                <div key={release.id} className>
                  <div className="card-image">
                    {/* May change the placeholder image */}
                    <img src={release.poster_url || comingSoonPlaceholder} alt='image poster / coming soon placeholder' />
                  </div>
                  <div className="card-content">
                    {release.title} - {release.source_release_date}
                  </div>
                </div>
              )
            })}
          </>
      }
    </div>
  )
}

export default Main