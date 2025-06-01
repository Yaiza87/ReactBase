import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {

  // let number = 0;

  const [number, setNumber] = useState(0);
  const [myValue, setmyValue] = useState("");
  let myPlaceholder = "Escribe aquí";

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  }

  const holaMundo = () => {
    console.log("Hola Mundo!!!");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className='main-content'>
        <h2 onClick={holaMundo}> Hola Mundo</h2>

        <h2 onClick={addOne}>Number: {number}</h2>
        <input value={myValue} placeholder={myPlaceholder} type='text' onChange={handleChange} />
        <br></br>
        <br></br>
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App
