import { useEffect, useState } from "react";
import { ParamUser } from "../model/ParamUser";
import { TextParameter } from "../model/TextParameter";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useParameters(userId: string) {
  const [parameters,setParameters] = useState<TextParameter[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchParameters = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          BASE_URL + `/api/textParameters/${userId}`
        );
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

    fetchParameters();
  }, [userId]);

  return { parameters, loading, error };
}
