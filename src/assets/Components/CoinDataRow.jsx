import React from 'react'
import { URLS } from '../utils/consts'
import '../Style/Components/coin-data-row-style.scss'

export const CoinDataRow = (props) => {
  const { Name, FullName, ImageUrl } = props.coin.CoinInfo;
  const { PRICE } = props.coin.DISPLAY.USD;
 
  return (
    <div className='coin-row-main-container'>
      <img src={URLS.cryptoCompareURL+ImageUrl} alt={Name} className="data-row-icon"/>
      <h5>{FullName}</h5>
      <h5>{PRICE}</h5>
    </div>
  )
}
