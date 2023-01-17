import React from 'react'
import { URLS } from '../utils/consts'
import { mySvgs } from '../Images'
import { CoinsDashboard } from '../Components/CoinsDashboard'
import '../Style/Pages/homepage-style.scss'

export const Home = () => {
  return (
    <> 
      <div>
      <a href={URLS.reactjsURL} target="_blank">
        <img src={mySvgs.viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href={URLS.bitcoinURL} target="_blank">
        <img src={mySvgs.bitcoinLogo} className="logo react" alt="React logo" />
      </a>
    </div>
      <CoinsDashboard />
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
