
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loader-text">Fetching products…</p>
    </div>
  )
}

export default LoadingSpinner
