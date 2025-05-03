import React from "react";
import { Link } from "react-router-dom";
import './ecoCard.css';

function EcoCard({ id, titulo, imagem, descricao }) {
    return (
        <div className="eco-card">
            <img src={imagem} alt={titulo} className="eco-img" />
            <div className="eco-info">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <Link to={`/dica/${id}`} className="eco-botao">Saiba mais</Link>
            </div>
        </div>
    );
}

export default EcoCard;