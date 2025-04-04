import { useState } from "react";
import { TextParameter } from "../model/TextParameter";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function usePostParameter() {
  const [loading, setLoading] = useState<boolean>(true);

  const formatDateForServer = (date: Date): string =>{
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).split("/").reverse().join("-");
  }

  const postParameters = async (newParameter: TextParameter | null) => {
    setLoading(true);
    if (!newParameter) return;

    try {
      const payload = {
        ...newParameter,
        date: formatDateForServer(newParameter.date),
      };

      await fetch(BASE_URL + `/textParameters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      throw new Error("Failed to post param:" + err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postParameters };
}
