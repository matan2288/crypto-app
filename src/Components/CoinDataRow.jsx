import React from 'react';
import { URLS } from '../utils/consts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Style/Components/coin-data-row-style.scss';

export const CoinDataRow = (props) => {
	const currentCurrency = useSelector((state) => state.coinsStore.currentCurrency);

	const { Name, FullName, ImageUrl } = props.coin.CoinInfo;
	const { PRICE } = props.coin.DISPLAY[currentCurrency];

	return (
		<div className="coin-row-main-container">
			<img src={URLS.cryptoCompareURL + ImageUrl} alt={Name} className="data-row-icon" />
			<div className="coin-names-container">
				<Link to={`/coin/${FullName.toLowerCase()}`} state={props.coin}>
					<span className="coin-full-name">{FullName}</span>
					<span className="coin-short-name">{Name}</span>
				</Link>
			</div>
			<span className="coin-price">{PRICE}</span>
		</div>
	);
};
