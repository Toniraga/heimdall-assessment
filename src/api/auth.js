import Axios from '../Axios.config';
import { toast } from 'react-toastify';

// make http request here
export const httpLogin = async (params) => {
	try {
		const { data } = await Axios.init().post('/login', params);
		const user = data;
		localStorage.setItem('x-access-token', user.token);
		return user.data;
	} catch (error) {
		toast.error('Email or Password incorrect');
		throw new Error(error);
	}
};
