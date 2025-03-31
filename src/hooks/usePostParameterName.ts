import { useState } from "react";
import { TextParameterName } from "../model/TextParameterName";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function usePostParameterName() {
  const [loading, setLoading] = useState<boolean>(true);

  const postParametersName = async (
    newParameterName: TextParameterName | null
  ) => {
    setLoading(true);
    if (!newParameterName) return;

    try {
      await fetch(BASE_URL + `/textParameters/names`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParameterName),
      });
    } catch (err) {
      throw new Error("Failed to post paramName:" + err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postParametersName };
}
