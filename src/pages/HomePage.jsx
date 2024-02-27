import React from "react";
import "./HomePage.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";
import Main from "../layout/Main.jsx";

function HomePage() {
  return (
    <>
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </>
  );
}

export default HomePage;
