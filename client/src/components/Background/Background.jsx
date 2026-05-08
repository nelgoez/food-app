import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

function Background({ recipes }) {
  const bgRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const img = recipes && recipes.length > 0 && recipes[0].image
    if (img) {
      el.style.backgroundImage =
        `linear-gradient(rgba(15, 12, 41, 0.75), rgba(26, 26, 46, 0.85)), url(${img})`
      el.style.filter = 'blur(12px)'
    } else {
      el.style.backgroundImage =
        `linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)`
      el.style.filter = 'none'
    }
    el.style.backgroundSize = 'cover'
    el.style.backgroundPosition = 'center'
  }, [recipes])

  return (
    <div
      ref={bgRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        transform: 'scale(1.1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Background)
