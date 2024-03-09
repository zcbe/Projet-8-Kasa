
import { useState, useEffect } from "react";

// Importez les données de votre fichier JSON
import db from "../../public/db.json"; 

// Hook qui permet de récupérer les données d'appartements
export const useApartments = () => {
  const [apartments, setApartments] = useState([]); // Initialisation d'un état 'apartments' avec un tableau vide et une fonction 'setApartments' pour le mettre à jour

  useEffect(() => {
    // Utilisation du hook useEffect pour effectuer des opérations de côté
    setApartments(db); // Mettre à jour l'état 'apartments' avec les données récupérées de db
  }, []); // Le tableau vide indique que cet effet ne s'exécute qu'une seule fois après le montage initial du composant

  return apartments;
};
