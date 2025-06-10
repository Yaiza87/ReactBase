
/*
Integrantes: Borja Moreno Galván, Héctor Santana Camacho, Jenifer del Cristo Guedes Santana,
María Concepción Dacosta Villaescusa, Miguel Ángel Sequeira Sarmiento y Yaiza del Rosario Guedes Santana.
Ciclo: Desarrollo de Aplicaciones Web
Módulo: DEW
Exposición: React
Grupo nº: 1 
*/
import './ListModules.css';

/* Renderización de listas mediante un array de strings.
Normalmente será un array de objetos*/

function ListModules() {
    const modules = ["DOR", "Base de datos", "DEW"]
    
    /* Renderizado dinámico de componentes (Renderizado de listas)
       El código recorre el array modules y, para cada elemento, devuelve un componente 
       JSX que representa un párrafo (<p>) */
    const HTMLModules = modules.map((module, index) => {
        return <p key={module}>{index +1} - {module}</p>
    })

  return (
    <section className="list-modules-section">
    <h2>Lista de módulos del ciclo</h2>

    {HTMLModules}
    </section>
  )
}

export default ListModules