import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useFetchParametersName() {
  const [parameterNames, setParameterNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchParameterNames = async (userId: string) => {
    if (!userId) return;
    try {
      setLoading(true);
      const response = await fetch(
        BASE_URL + `/textParameters/names/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch parameter names");
      }

      const data: string[] = await response.json();
      setParameterNames(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return { parameterNames, loading, error, fetchParameterNames };
}
