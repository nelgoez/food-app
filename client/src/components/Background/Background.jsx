import { useEffect } from 'react'
import { connect } from 'react-redux'

function Background({ recipes }) {
  useEffect(() => {
    const img = recipes && recipes.length > 0 && recipes[0].image
    if (img) {
      document.body.style.backgroundImage =
        `linear-gradient(rgba(15, 12, 41, 0.82), rgba(26, 26, 46, 0.88)), url(${img})`
    } else {
      document.body.style.backgroundImage =
        `linear-gradient(rgba(15, 12, 41, 0.88), rgba(26, 26, 46, 0.92)), url(/cooking.png)`
    }
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundPosition = 'center'
  }, [recipes])

  return null
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Background)
