import React, { useState } from 'react'
import { connect } from 'react-redux'
import Searcher from '../Searcher/Searcher'
import './Home.css'

function Home({ hasResults }) {
  const [showSearch, setShowSearch] = useState(false)

  const handleStart = () => {
    setShowSearch(true)
  }

  return (
    <div className={`home ${hasResults && showSearch ? 'has-results' : ''}`}>
      <section className={`home-hero ${hasResults && showSearch ? 'collapsed' : ''}`}>
        <div className='hero-content'>
          <h1 className='hero-title'>Recipe Finder</h1>
          <p className='hero-subtitle'>
            Discover thousands of recipes from around the world<br />
            Search by ingredients, explore diet types, and save your favorites
          </p>
          <button className='hero-cta' onClick={handleStart}>
            Start Cooking →
          </button>
        </div>
      </section>
      <div className={`search-reveal ${showSearch ? 'visible' : ''}`}>
        <Searcher />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    hasResults: state.recipes && state.recipes.length > 0
  }
}

export default connect(mapStateToProps)(Home)
