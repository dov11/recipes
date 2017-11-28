import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'


class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }
  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><span role="img" aria-label="vegan">🌾</span></li> }
            { !vegan && vegetarian && <li><span role="img" aria-label="vegatarian">🥕</span></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian"  /></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default RecipeItem
