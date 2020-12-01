import Axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(url)
        if (isMounted) {
          setIsLoading(false)
          setData(data)
        }
      } catch (err) {
        setIsLoading(false)
        setError(err.response.data)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
