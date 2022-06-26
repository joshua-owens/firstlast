import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

function Layout ({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
