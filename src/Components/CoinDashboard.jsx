import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CoinDataRow } from './CoinDataRow';
import { getCoinsFetch } from '../Redux/coinsStore/coinStore';
import { map } from 'lodash';
import '../Style/Components/coin-dashboard-style.scss';

export const CoinDashboard = () => {
	const coinListGlobalState = useSelector((state) => state.coinsStore.coins);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoinsFetch());
	}, [dispatch]);
	console.log(coinListGlobalState);

	return (
		<div className="coin-dashboard-main-container">
			<p>change currency dropdown, autocomplete searchbar Sort</p>
			<h1>Coins Dashboard</h1>
			{map(coinListGlobalState, (coin) => (
				<CoinDataRow coin={coin} key={coin.CoinInfo.Id} />
			))}
		</div>
	);
};
