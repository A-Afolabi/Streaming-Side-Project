import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {

  const [releases, setReleases] = useState([])

  const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   const searchField = async () => {
  //     const res = await axios.get('https://api.watchmode.com/v1/list-titles/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ&source_ids=203,57')
  //     console.log(res)
  //     // 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=YOUR_API_KEY&search_value=Breaking%20bad&search_type=1'
  //   }
  //   searchField()
  // }, [])

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
        <input type='text' name='movieOrTvshow' placeholder='Search TV Show or Movie...' />
        <button>Search</button>
      </form>
      <br></br>
      <br></br>
      {/* Replace br with padding later */}
      <h3>Upcoming Releases</h3>
      <ul>
        {releases.map(
          release => <li key={release.id}><img src={release.poster_url} alt={release.title} /> - {release.title} - {release.source_release_date}</li>
        )}
      </ul>
    </div>
  )
}

export default Main