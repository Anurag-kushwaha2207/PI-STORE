// ─────────────────────────────────────────────
//  ErrorDisplay.jsx  –  Error state UI
// ─────────────────────────────────────────────

import React from 'react'

const ErrorDisplay = ({ message, onRetry }) => {
  return (
    <div className="error-wrapper">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-msg">{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}

export default ErrorDisplay
