import { mainStore } from '../Redux/mainStore';

export const dispatchReducer = (reducer) => {
	if (reducer.length > 0) {
		reducer.forEach((reducer) => {
			return mainStore.dispatch(reducer);
		})
	}
	return mainStore.dispatch(reducer);
};
