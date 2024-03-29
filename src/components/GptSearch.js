import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG_IMAGE_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={NETFLIX_BG_IMAGE_URL}
          alt="background"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch