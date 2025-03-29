import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useParametersName(userId: string) {
  const [parameterNames, setParameters] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchParameterNames = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          BASE_URL + `/api/textParameters/names/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch parameter names");
        }

        const data: string[] = await response.json();
        setParameters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchParameterNames();
  }, [userId]);

  return { parameterNames, loading, error };
}
