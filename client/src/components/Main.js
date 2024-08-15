import React, { useEffect } from "react";
import axios from 'axios'

const Main = () => {

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
      const { data } = await axios.get('https://api.watchmode.com/v1/releases/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ')
      console.log(data.releases)
    }
    getReleases()
  }, [])

  return (
    <div className='container'>
      <h1 className="title is-1">TV Show --> Movie --> Find where to stream it</h1>
      <h4>USA🇺🇸, Canada🇨🇦, Australia🇦🇺, England🏴󠁧󠁢󠁥󠁮󠁧󠁿, Spain🇪🇸 & Brazil🇧🇷 all Supported</h4>
      <form onSubmit={handleSearch}>
        <input type='text' name='movieOrTvshow' placeholder='Search TV Show or Movie...' />
        <button>Search</button>
      </form>
      <br></br>
      <br></br>
      {/* Replace br with padding later */}
      <h3>TV Show</h3>

      <br></br>
      <h3>Movies</h3>
    </div>
  )
}

export default Main