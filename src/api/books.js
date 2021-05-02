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

export const httpBorrowBook = async (payload) => {
	try {
		const response = await Axios.init().patch(`/update`, payload);
		console.log(response.data);
		return response.data;
	} catch (error) {
		toast.error(error.response?.data?.message);
		throw new Error(error);
	}
};
