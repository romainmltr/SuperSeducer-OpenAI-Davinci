import React, { useState, useEffect } from "react";

function Favoris() {
    const [favoris, setFavoris] = useState([]);

    useEffect(() => {
        const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
        setFavoris(favoris);
    }, []);

    return (
        <div>
            <h2>Favoris</h2>
            {favoris.length > 0 ? (
                <ul>
                    {favoris.map(produit => (
                        <li key={produit.id}>
                            <h3>{produit.nom}</h3>
                            <p>{produit.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun produit en favoris</p>
            )}
        </div>
    );
}

export default Favoris;
