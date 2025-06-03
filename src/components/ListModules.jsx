import './ListModules.css';

/* Renderización de listas mediante un array de strings.
Normalmente será un array de objetos*/

function ListModules() {
    const modules = ["DOR", "Base de datos", "DEW"]

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