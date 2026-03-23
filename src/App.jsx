
import React, { useState } from 'react'
import useFetch from './hooks/useFetch'
import ProductCard from './components/ProductCard'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorDisplay from './components/ErrorDisplay'
import './App.css'

const API_URL = 'https://api.escuelajs.co/api/v1/products'

const App = () => {
  const [limit, setLimit] = useState(12)
  const { data: products, loading, error, refetch } = useFetch(
    `${API_URL}?limit=${limit}`
  )

  const handleLoadMore = () => {
    setLimit((prev) => prev + 12)
  }

  return (
    <div className="app">
      {/*  HEADER  */}
      <header className="header">
        <div className="header-inner">
          <div className="header-badge">SALE OFFER ONLY 24hr</div>

          <h1 className="header-title">Product<span>Store</span></h1>
          <p className="header-subtitle">
            OUR ONLINE MARKET  <code>useFetch</code> React hook
          </p>
        </div>
        {/* Decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </header>

      {/*  MAIN CONTENT  */}
      <main className="main">

        {/* Loading state */}
        {loading && <LoadingSpinner />}

        {/* Error state */}
        {error && !loading && (
          <ErrorDisplay message={error} onRetry={refetch} />
        )}

        {/* Data state */}
        {!loading && !error && products && (
          <>
            <div className="results-info">
              Showing <strong>{products.length}</strong> products
            </div>

            <div className="grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="load-more-wrapper">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More Products
              </button>
            </div>
          </>
        )}
      </main>

      {/* FOOTER  */}
      <footer className="footer">
        <p>Built with React Custom Hooks · Assignment 5</p>
      </footer>
    </div>
  )
}

export default App
