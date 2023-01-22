export default {
	saveToLocalStorage,
	loadFromLocalStorage,
};

function saveToLocalStorage(key, val) {
	const str = JSON.stringify(val);
	localStorage.setItem(key, str);
}

function loadFromLocalStorage(key) {
	const str = localStorage.getItem(key);
	const val = JSON.parse(str);
	return val;
}
