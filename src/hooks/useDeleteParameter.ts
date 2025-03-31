import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useDeleteParameter() {
  const [loading, setLoading] = useState<boolean>(true);

  const deleteParameter = async (id: string) => {
    setLoading(true);
    if (!id) return;

    try {
      await fetch(BASE_URL + `/textParameters/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      throw new Error("Failed to delete  param:" + err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteParameter };
}
