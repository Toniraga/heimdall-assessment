import { getBooks } from '../api/books';
import { useQuery, useQueryClient } from 'react-query';

export const useFetchBooks = () => {
	const queryClient = useQueryClient();
	const books = queryClient.getQueryData('books') || [];
	const { data, isLoading } = useQuery('books', () => getBooks(), {
		enabled: !books.length,
	});
	return { data, isLoading };
};
