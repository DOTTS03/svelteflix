import { PUBLIC_API_KEY } from '$env/static/public';
import type { SearchTypes } from '../../types/fetch-types';

export default async function fetchSearch(query: string): Promise<SearchTypes> {
	const req = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${PUBLIC_API_KEY}&query=${query}`
	);
	const data = await req.json();

	return data;
}
