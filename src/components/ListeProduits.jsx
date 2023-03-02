import React from "react";
import Produit from "./Produit";

function ListeProduits({ produits, onAjouterAuxFavoris }) {
    return (
        <div className={'text-black'}>
            {produits.map(produit => (
                <Produit
                    key={produit.id}
                    produit={produit}
                    onAjouterAuxFavoris={onAjouterAuxFavoris}
                />
            ))}
        </div>
    );
}

export default ListeProduits;
