import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CoinDataRow } from './CoinDataRow';
import { DashboardController } from './DashboardController';
import { getCoinsFetch, showMoreCoins } from '../Redux/coinsStore/store';
import { map } from 'lodash';
import '../Style/Components/coin-dashboard-style.scss';

export const CoinsDashboard = () => {
	const { coins, coinsListLimit } = useSelector((state) => state.coinsStore);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoinsFetch());
	}, [coinsListLimit]);
	console.log(coins);

	return (
		<div className="coin-dashboard-main-container">
			<h1>Coins Dashboard</h1>
			<DashboardController />
			{map(coins, (coin) => (
				<CoinDataRow coin={coin} key={coin.CoinInfo.Id} />
			))}
			<button onClick={() => dispatch(showMoreCoins())}>load more here</button>
		</div>
	);
};
