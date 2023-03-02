import React from "react";

function Produit({ produit, onAjouterAuxFavoris }) {
    return (
        <div>
            <h3>{produit.nom}</h3>
            <p>{produit.description}</p>
            <button onClick={() => onAjouterAuxFavoris(produit)}>
                Ajouter aux favoris
            </button>
        </div>
    );
}

export default Produit;
