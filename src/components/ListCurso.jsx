import React from 'react';
import './ListCurso.css';

/* Renderización de listas mediante un array de objetos*/

function ListCurso() {

    const cursos = [
        {
          id: 1,
          name: "DOR",
          img: "/dor.jpg",
        },
        {
          id: 2,
          name: "Base de datos",
          img: "/bae.jpg",
        },
        {
          id: 3,
          name: "DEW",
          img: "/dew.jpg",
        },
    ];

    const HTMLCursos = cursos.map((curso) => {
        return (
            <li key={curso.id}>
                <h2>{curso.name}</h2>
                <img src={curso.img} alt="Imagen curso"></img>
            </li>
        )
    } )
    
    return (
      <section className="curso-section">
        <h2>Lista del curso:</h2>
        <ul>
            {HTMLCursos}
        </ul>
      </section>
  )
}

export default ListCurso