import React from 'react'

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
    />
  )
}

export default InputField
