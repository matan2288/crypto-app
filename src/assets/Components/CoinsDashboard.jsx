import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CoinDataRow } from './CoinDataRow'
import { DashboardController } from './DashboardController'
import { getCoinsFetch } from '../Redux/coinsStore/coinStore'
import { map } from 'lodash'
import '../Style/Components/coin-dashboard-style.scss'

export const CoinsDashboard = () => {

  const coinListGlobalState = useSelector(state=>state.coinsStore.coins)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCoinsFetch());
  }, [dispatch])
  console.log(coinListGlobalState)

  return (
    <div className="coin-dashboard-main-container">
      <h1>Coins Dashboard</h1>
     <DashboardController />
      {map(coinListGlobalState , coin =>
        <CoinDataRow coin={coin} key={coin.CoinInfo.Id} />
      )}
      <p>load more here</p>
    </div>
  )
}
