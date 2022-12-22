import { PUBLIC_API_KEY } from '$env/static/public';

export default async function fetchHeroesTop(pageNumber: number): Promise<any> {
	if (pageNumber > 3) return;
	const req = await fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`),
		data = await req.json();

	return data;
}
