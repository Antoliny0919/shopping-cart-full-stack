import { useState } from "react";
import { NetworkError } from "../../../commons/errors";

export default function useError() {
  const [networkError, setNetworkError] = useState(false);
  const [error, setError] = useState<string>("");

  function handleError(error: unknown) {
    if (error instanceof NetworkError) {
      clearError();
      setNetworkError(true);
      return;
    }
    if (error instanceof Error) {
      clearError();
      setError(error.message);
    }
  }

  function clearError() {
    setNetworkError(false);
    setError("");
  }

  return { networkError, error, handleError, clearError };
}
