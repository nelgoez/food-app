import React, { useRef } from 'react'
import Searcher from '../Searcher/Searcher'
import './Home.css'

export default function Home() {
  const searchRef = useRef(null)

  const handleStart = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home">
      <section className="home-hero">
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
      <div ref={searchRef}>
        <Searcher />
      </div>
    </div>
  )
}
