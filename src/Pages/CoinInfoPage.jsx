import React from 'react'
import { useLocation } from 'react-router-dom'

export const CoinInfoPage = () => {

  const accessCoinState = useLocation();
  console.log(accessCoinState.state)


  return (
    <div>CoinInfoPage</div>
  )
}
