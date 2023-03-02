import React from "react";

function AjouterAuxFavoris({ produit }) {
    const handleAjouterAuxFavoris = () => {
        const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
        const existeDeja = favoris.some(p => p.id === produit.id);
        if (!existeDeja) {
            favoris.push(produit);
            localStorage.setItem("favoris", JSON.stringify(favoris));
        }
    };

    return (
        <button onClick={handleAjouterAuxFavoris}>
            Ajouter aux favoris
        </button>
    );
}

export default AjouterAuxFavoris;
