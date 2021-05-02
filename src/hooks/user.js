import { httpUserProfile } from '../api/user';
import { useQuery, useQueryClient } from 'react-query';

export const useFetchUser = (userId) => {
	const queryClient = useQueryClient();
	const user = queryClient.getQueryData('user');
	const { isLoading, isError, isFetched } = useQuery(
		'user',
		() => httpUserProfile(userId),
		{
			enabled: !user,
			retry: 0,
		}
	);

	return { isLoading, isError, isFetched, user };
};
