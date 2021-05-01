import Axios from '../Axios.config';
import { toast } from 'react-toastify';

export const getBooks = async () => {
	try {
		const response = await Axios.init().get(`/books`);
		return response.data.books;
	} catch (error) {
		toast.error('Could not fetch books');
		throw new Error(error);
	}
};
