import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={window.location.origin + '/images/DH.png'} alt='DH-logo' />
    </footer>
  )
}

export default Footer
