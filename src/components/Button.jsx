import React from 'react'

const Button = ({ text }) => {
  return (
    <button style={styles.btn}>
      {text}
    </button>
  )
}

const styles = {
  btn: {
    padding: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
}

export default Button
