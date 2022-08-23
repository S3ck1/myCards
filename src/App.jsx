import { useState } from 'react'
import reactLogo from './assets/react.svg'
import User from './components/User';
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const me = {
    title: "Sobre mí",
    item1: "José",
    item2: "Película favorita: Matrix",
    item3: "Música favorita: Hip-hop",
    background: "#90ee90",
  }
  const hobbies = {
    title: "Mis hobbies",
    item1: "Música",
    item2: "Leer",
    item3: "Ejercicio",
    background: "#f08080",
  }
  const freeTime = {
    title: "En mi tiempo libre me gusta",
    item1: "Programar",
    item2: "Jugar videojuegos",
    item3: "Salir con amigos",
    background: "#add8e6",
  }
  const favoriteFood = {
    title: "Mi comida favorita",
    item1: "Pizza y Pasta",
    item2: "Tacos",
    item3: "Asado",
    background: "#ffa07a"
  }
  const stack = {
    title: "Mi stack es",
    item1: "HTML y CSS",
    item2: "JavaScript",
    item3: "setTimeout('React', 5 semanas 😉 )",
    background: "#ffff00"
  }


  let alertTitle = () => alert("Sobre mí");
  return (
    <div className="App">
      <div className="cards-container">
      <Card {...me}/>
      <Card {...hobbies}/>
      <Card {...freeTime}/>
      <Card {...favoriteFood}/>
      <Card {...stack}/>
      </div>
    </div>
  )
}

export default App
