import React, { PureComponent } from 'react'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'
import PropTypes from 'prop-types'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }
  state = { liked: false }

  classNames() {
    const { liked } = this.props

    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
     this.props.onChange()
  }

  render() {
    const { liked } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={this.toggleLike}>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
