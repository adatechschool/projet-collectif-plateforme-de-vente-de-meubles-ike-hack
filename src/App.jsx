  import { useState } from 'react'
  import './App.css'
  import furnituresData from './assets/IkeHack.json'

function App() {
  return (
    <div className="grid">
      {furnituresData.map((furniture, index) => (
        <Furniture key={index} data={furniture} />
      ))}
    </div>
  )
}

function Furniture({ data }){
  return (
    <div className="card">
      <img src={data.pictures}/>
      <h1>{data.name}</h1>
      <p>{data.type}</p>
      <p>Price: {data.price}€</p>
      <button>Buy</button>
    </div>
  )
}

export default App
