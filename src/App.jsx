  import { useState } from 'react'
  import './App.css'
  import furnituresData from './assets/IkeHack.json'

function App() {
const furnitures = furniture()
let furArr = []
  for(let i = 0; i < 6; i++) {
    furArr.push(furnitures)
  }
  return (
    <div className="grid">
      {furArr.map((furniture, index) => (
        <div key={index}>{furniture}</div>
      ))}
    </div>
  )
}

function furniture(){

  return (
      <div className="card">
        <img src={tabouret} alt="tabouret 60's" />
        <h1>Tabouret 60's</h1>
        <p>
          100% plastique
        </p>
        <button>Buy</button>
      </div>
  )
}

export default App
