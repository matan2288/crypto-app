import { mySvgs } from './assets/Images'
import { URLS } from './assets/utils/consts'
import './assets/Style/main/App.css'
import axios from 'axios'
import { useState } from 'react';


function App() {



// axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
// .then(res=>{
//   console.log(res)
// })

console.log(import.meta.env.VITE_BINANCE_API_KEY)



return (
    <div className="App">
      <div>
        <a href={URLS.reactjsURL} target="_blank">
          <img src={mySvgs.viteLogo} className="logo" alt="Vite logo" /> 
        </a>
        <a href={URLS.bitcoinURL} target="_blank">
          <img src={mySvgs.bitcoinLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dashboard component goes here</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App