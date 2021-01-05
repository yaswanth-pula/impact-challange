import { useState, useEffect } from "react";
import API_EndPoint from "../utils/apiConfig";

/**
 * A Custom hook for the Api Call to fetch
 * Candidate Details for domain api.
 *
 */
function useApiFetch() {
  // hooks for storing candidate List and api fetching status
  const [candidateList, setCandidateList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // handle api call
  async function getCandidateList() {
    const api_response = await fetch(API_EndPoint);
    const json_data = await api_response.json();
    setCandidateList(json_data);
    setIsFetching(false);
  }

  useEffect(() => {
    getCandidateList();
  }, []);

  return [candidateList, isFetching];
}

export default useApiFetch;
