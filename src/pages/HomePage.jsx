import "../scss/HomePage.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";
import Main from "../layout/Main.jsx";
import { useApartments } from "../hooks/useApartments.jsx"; // Import du hook personnalisé useApartments qui récupère les données des appartements

function HomePage() {
  const apartments = useApartments();   // Utilisation du hook useApartments pour récupérer les données des appartements
  console.log("Appartements récupérés dans HomePage:", apartments); // Ajouter un console.log pour vérifier les données récupérées

  return (
    <>
      <Main>
        <Banner />
        <ApartmentGrid apartments={apartments} />  {/* Affichage de la grille des appartements en passant les données récupérées en tant que prop */}
      </Main>
    </>
  );
}

export default HomePage;
