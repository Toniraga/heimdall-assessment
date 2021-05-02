import Axios from '../Axios.config';
import { toast } from 'react-toastify';

// make http request here
export const httpUserProfile = async (userId) => {
	try {
		const { data } = await Axios.init().get(`/user/${userId}`);
		return data.user;
	} catch (error) {
		toast.error('User is currently unavailable');
		throw new Error(error);
	}
};
