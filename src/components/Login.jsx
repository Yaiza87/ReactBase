
/*
Integrantes: Borja Moreno Galván, Héctor Santana Camacho, Jenifer del Cristo Guedes Santana,
María Concepción Dacosta Villaescusa, Miguel Ángel Sequeira Sarmiento y Yaiza del Rosario Guedes Santana.
Ciclo: Desarrollo de Aplicaciones Web
Módulo: DEW
Exposición: React
Grupo nº: 1 
*/
function Login(props) {

  // Nombre de usuario en un objeto
  const user = {
    username: "Alumn@",
    email: "alumno@email.com"
  }

  // Caputura del evento click del botón
  const handleClick = () => {
    /* Para poder pasar el valor al componente padre
    debemos hacerlo mediante una función declarada en
    el componente padre */
    props.handleLogin(user);
  }

  return (
    <section>
      <h2>Login section</h2>
      <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default Login