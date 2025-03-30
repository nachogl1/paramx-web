import { useEffect, useState } from "react";
import { ParamUser } from "../model/ParamUser";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useFetchParamUser(userId: string) {
  const [user, setUser] = useState<ParamUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchParamUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          BASE_URL + `/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: ParamUser = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchParamUser();
  }, [userId]);

  return { user, loading, error };
}
