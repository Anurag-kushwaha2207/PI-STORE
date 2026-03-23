
import { useState, useEffect, useCallback } from 'react'

/**
 * useFetch – a reusable custom hook that fetches data from any URL.
 *
 * @param {string} url  – The API endpoint to fetch data from.
 * @returns {{ data: any, loading: boolean, error: string | null, refetch: Function }}
 */
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // useCallback ensures fetchData reference stays stable
  // so the useEffect doesn't re-run unnecessarily
  const fetchData = useCallback(async () => {
    if (!url) return

    setLoading(true)   // start loader
    setError(null)     // clear previous errors
    setData(null)      // clear previous data

    try {
      const response = await fetch(url)

      // If HTTP status is not OK (e.g. 404, 500), throw an error
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} – ${response.statusText}`)
      }

      const json = await response.json()
      setData(json)

    } catch (err) {
      // Catches both network errors AND the error we threw above
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)  // stop loader regardless of success/failure
    }
  }, [url])

  // Run fetchData whenever the URL changes
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Return data, loading flag, error message, and a refetch function
  return { data, loading, error, refetch: fetchData }
}

export default useFetch
