import { PUBLIC_API_KEY } from '$env/static/public';
import type { HeroesByIdTypes } from '../../types/fetch-types';

export default async function fetchHeroesById(id: string): Promise<HeroesByIdTypes> {
	const movReq = await fetch(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${PUBLIC_API_KEY}&language=en-US&page=1`);

	const castReq = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${PUBLIC_API_KEY}&language=en-US&page=1`
	);

	const mov = await movReq.json();
	const cast = await castReq.json();
	return { mov, cast };
}
