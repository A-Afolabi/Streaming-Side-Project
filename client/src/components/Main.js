import React, { useEffect } from "react";
import axios from 'axios'

const Main = () => {

  useEffect(() => {
    const getTvshows = async () => {
      const res = await axios.get('https://api.watchmode.com/v1/list-titles/?apiKey=LaxojFOaUr7urwdEmUb8lBwJET1Wq3fMTRpvSSGQ&source_ids=203,57')
      console.log(res)
    }
    getTvshows()
  }, [])

  const handleSearch = () => {

  }

  return (
    <div className='container'>
      <h1>TV Show --> Movie --> Find where to stream it</h1>
      <h4>USA🇺🇸, Cananda🇨🇦, Australia🇦🇺, England🏴󠁧󠁢󠁥󠁮󠁧󠁿, Spain🇪🇸 & Brazil🇧🇷 all Supported</h4>
      <form onSubmit={handleSearch}>
        <input type='text' name='movieOrTvshow' placeholder='Search TV Show or Movie...' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Main