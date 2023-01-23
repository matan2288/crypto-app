import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CoinDataRow } from './CoinDataRow';
import { DashboardController } from './DashboardController';
import { getCoinsFetch, setLoader, showMoreCoins } from '../Redux/coinsStore/store';
import { map } from 'lodash';
import { myGifs } from '../Images/index';
import '../Style/Components/coin-dashboard-style.scss';

export const CoinsDashboard = () => {
	const { coins, coinsListLimit, isLoading } = useSelector((state) => state.coinsStore);

    const dispatch = useDispatch();

	const addMoreCoins = () => {
		dispatch(showMoreCoins());
		dispatch(setLoader(true));
	};

	useEffect(() => {
		dispatch(getCoinsFetch());
		dispatch(setLoader(false));
	}, [coinsListLimit]);
	console.log(coins);

	return (
		<div className="coin-dashboard-main-container">
			<h1>Coins Dashboard</h1>
			<DashboardController />

			{map(coins, (coin) => (
				<CoinDataRow coin={coin} key={coin.CoinInfo.Id} />
			))}

			{isLoading ? <img src={myGifs.spinnerAnimation} /> : <button onClick={addMoreCoins}>load more here</button>}
		</div>
	);
};
