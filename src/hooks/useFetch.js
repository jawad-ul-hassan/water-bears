import { useCallback, useState } from "react"
import { parseJson } from "../helpers/parse-json"

export const useFetch = () => {
  const [state, setState] = useState({})
  return {
    fetch: useCallback(async unresolvedPromise => {
      try {
        setState({ loading: true })
        return unresolvedPromise.then(data => {
          setState({ data })
          return data
        })
      } catch (error) {
        setState({
          error: true,
          errorMessage: parseJson(error.message)
        })
      }
    }, []),
    state
  }
}
