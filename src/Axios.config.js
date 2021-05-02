import axios from 'axios';

const BASE_URL = '';

class Axios {
	init = () => {
		const token = localStorage.getItem('x-access-token');
		const axiosConnect = axios.create({
			baseURL: BASE_URL,
			headers: { Authorization: `Bearer ${token}`, accept: 'application/json' },
		});

		return axiosConnect;
	};
}
export default new Axios();
