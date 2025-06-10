
/*
Integrantes: Borja Moreno Galván, Héctor Santana Camacho, Jenifer del Cristo Guedes Santana,
María Concepción Dacosta Villaescusa, Miguel Ángel Sequeira Sarmiento y Yaiza del Rosario Guedes Santana.
Ciclo: Desarrollo de Aplicaciones Web
Módulo: DEW
Exposición: React
Grupo nº: 1 
*/
import "./HeaderComponent.css";

// Muestra el header de la página
function HeaderComponent (props) {
    //Props pasa el saludo y la lista de enlaces de cabecera
    const {greetings, links} = props;

    return (
        <header className="header">
            <h1 className="title">{greetings}</h1>
            <nav>
                <ul className="header-list">
                    <li>
                        <a className="link" href="#">{links.home}</a>
                    </li>
                     <li>
                        <a className="link" href="#">{links.blog}</a>
                    </li>
                     <li>
                        <a className="link" href="#">{links.news}</a>
                    </li>
                     <li>
                        <a className="link" href="#">{links.contact}</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;