import { useState } from "react";
import { TextParameter } from "../model/TextParameter";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useFetchTextParameters() {
  const [parameters, setParameters] = useState<TextParameter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTextParameters = async (userId: string) => {
    if (!userId) return;
    
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + `/textParameters/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch parameters");
      }

      const data: TextParameter[] = await response.json();
      setParameters(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return { parameters, loading, error, fetchTextParameters };
}
