import React from 'react';
import Favoris from "../components/Favoris";
import ListeProduits from "../components/ListeProduits";
import AjouterAuxFavoris from "../components/AjouterAuxFavoris";
import Produit from "../components/Produit";

function TryFavoris() {

    return (
        <div className='w-[300px] m-auto'>
           <Favoris />
            <ListeProduits />
            <AjouterAuxFavoris />
            <Produit />
        </div>
    );
};

export default TryFavoris;
