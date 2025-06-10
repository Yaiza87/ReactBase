
/*
Integrantes: Borja Moreno Galván, Héctor Santana Camacho, Jenifer del Cristo Guedes Santana,
María Concepción Dacosta Villaescusa, Miguel Ángel Sequeira Sarmiento y Yaiza del Rosario Guedes Santana.
Ciclo: Desarrollo de Aplicaciones Web
Módulo: DEW
Exposición: React
Grupo nº: 1 
*/
import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent';
import ButtonComponent from './components/ButtonComponent';
import Login from './components/Login';
import ListModules from './components/ListModules';
import ListCurso from './components/ListCurso';

// Esta es la función principal de nuestra aplicación.
// En React, todo comienza con un componente raíz como este llamado App.

function App() {

  // let number = 0;

  // Variables de estado
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");

  //Variable normal
  let myPlaceholder = "Escribe aquí";

  const [greetings, setGreetings] = useState("¡Bienvenidos a nuestra web!")

  // Lista de los links de cabecera
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us" 
  }

  // Para la renderización condicional
  const condition = true;
  const condition2 = false;

  // Variable dinámica para el usuario
  const [user, setUser] = useState({})

  /* Para setear el usuario se pasará como prop al 
     componente login para recibir los datos del usuario 
     debe ser una función para que el hijo le pueda
     devolver el valor al padre */
  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo)
  }

  // Añadir uno cada vez que se clickea en el h2 con texto number
  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  }


  const holaMundo = () => {
    console.log("¡¡¡Hola Mundo!!!");
  }

  // Captura del evento onchange del input text
  const handleChange = (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value);
  }

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent> {/*Nuestro componente importado para la cabecera de nuestra App.*/}

      <main className='main-content'> {/*Contenido principal de la página.*/}
        <h2 onClick={holaMundo}> ¡Hola Mundo!</h2> {/*Texto de bienvenida.*/}
        
        {user.username && <h2>Bienvenid@ {user.username}</h2>} {/*Renderización condicional*/}

        <Login handleLogin={login}></Login>

        <br></br>

        <h2>Renderización de variables</h2>
        {/*Renderización mediante operadores lógicos*/}
        {condition && <h3>La condición se cumple</h3>} {/*Por ejemplo para cuando añadimos un producto en una compra*/}
        {!condition && <h3>La condición no se cumple</h3>} {/*Se suele usar para redireccionar la página*/}

        {/*Renderización mediante el operador ternario, estamos obligados a indicar que ocurre en caso de no cumplirse la condición.*/}
        { condition2 ? (
          <h3>La condición se cumple</h3>
        ) : (
          <h3>La condición no se cumple</h3>
        )}

        <br></br>

        <h2>Renderización de listas de elementos</h2>
        {/*Creamos nuevos componentes: MovieList.jsx*/}
        <ListModules></ListModules>

        <ListCurso></ListCurso>
       

        <h2 onClick={addOne}>Number: {number}</h2>
        <input value={myValue} placeholder={myPlaceholder} type='text' onChange={handleChange} />
        <br></br>
        <br></br>
        <ButtonComponent/> {/*Nuestro componente importado que representa un botón.*/}
      </main>
    </>
  );
}

export default App
