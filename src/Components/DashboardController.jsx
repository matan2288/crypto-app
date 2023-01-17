import { React } from 'react'
import { useSelector } from 'react-redux'
import { map } from 'lodash'
import '../Style/Components/dashboard-controller-style.scss'

export const DashboardController = () => {

  const currenciesList = useSelector(state => state.coinsStore.currenciesAvaiable)

  console.log(currenciesList)
  return (
    <div className='dashboard-controller-main-container'>
      1.currency dropdown 2.autocomplete searchbar , sort dropdown
      <div>

        <datalist id="currencies">
          {map(currenciesList, (currency, key) =>
            <option value={currency} key={key} />
          )}
        </datalist>
        <input list="currencies" id="myBrowser" name="myBrowser" />


      </div>

    </div>
  )
}
