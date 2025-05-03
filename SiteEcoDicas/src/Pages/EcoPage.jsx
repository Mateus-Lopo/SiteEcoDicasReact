import { useParams } from "react-router-dom";



function EcoPage() {
    const { id } = useParams();

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Dica {id}</h2>
            <p>Conteúdo da dica {id}.</p>
        </div>
    );
}

export default EcoPage;