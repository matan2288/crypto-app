import React from 'react'
import { useLocation } from 'react-router-dom'

export const CoinInfoPage = () => {
  const accessCoinState = useLocation();
  const { CoinInfo, DISPLAY, RAW } = accessCoinState.state;
  console.log(accessCoinState.state)


  return (
    <div><b>{CoinInfo.FullName}</b> Info Page</div>
  )
}
