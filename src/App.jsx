  import { useState } from 'react'
  import './App.css'
  import tabouret from './assets/tabouret.jpeg'

function App() {

  return (

    // todo: boucle
    <div className='grid'>
      <div className="card">
        <img src={tabouret} alt="table basse 70's" />
        <h1>Table basse 70's</h1>
        <p>
          cette table rose est super !
        </p>
        <button>Buy</button>
      </div>

      <div className="card">
        <img src={tabouret} alt="tabouret 60's" />
        <h1>Tabouret 60's</h1>
        <p>
          100% plastique
        </p>
        <button>Buy</button>
      </div>

      <div className="card">
        <img src={tabouret} alt="armoire de mamie" />
        <h1>Amoire de mamie</h1>
        <p>
          ça pue et c'est lourd mais c'est super solide
        </p>
        <button>Buy</button>
      </div>

      <div className="card">
        <img src={tabouret} alt="table basse 70's" />
        <h1>Table basse 70's</h1>
        <p>
          cette table rose est super !
        </p>
        <button>Buy</button>
      </div>

      <div className="card">
        <img src={tabouret} alt="armoire de mamie" />
        <h1>Amoire de mamie</h1>
        <p>
          ça pue et c'est lourd mais c'est super solide
        </p>
        <button>Buy</button>
      </div>

      <div className="card">
        <img src={tabouret} alt="tabouret 60's" />
        <h1>Tabouret 60's</h1>
        <p>
          100% plastique
        </p>
        <button>Buy</button>
      </div>
      
    </div>
  )
}

export default App
