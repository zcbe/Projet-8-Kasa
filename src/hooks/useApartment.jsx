// useApartment.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    fetch("dbjson")
      .then((res) => res.json())
      .then((flats) => {
        const foundFlat = flats.find((flat) => flat.id === params.id);
        if (!foundFlat) {
          navigate("/ErrorPageNotFound");
        } else {
          setFlat(foundFlat);
        }
      })
      .catch((error) => {
        console.error("Error fetching apartment data:", error);
        // Gérer l'erreur (par exemple, setFlat(null), afficher un message d'erreur)
      });

    return () => {
      abortController.abort();
    };
  }, [params.id, navigate]);

  return flat;
}
