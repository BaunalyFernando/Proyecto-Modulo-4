import CardList from "@/components/card/cardList";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importar estilos
import { useState } from "react";
config.autoAddCss = false;


export default function Home() {
  
  return (
    <>
      <div className="bg-white">
        <CardList />
      </div>
       
    </>
  );
}
