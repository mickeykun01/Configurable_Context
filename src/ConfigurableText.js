import React from 'react'
import PropTypes from 'prop-types'
import './Configurable.scss'

const ConfigurableText = ({text , color}) => {
    const style = {
        color : color,
    }

  return (
    <div>
      <div className='configurable-text' style={style}>
        {text}
      </div>
    </div>
  )
}

ConfigurableText.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired
}

export default ConfigurableText
