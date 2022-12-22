import fetchHeroesById from '../../../services/fetch/fetch-heroe-byid';
// import { fetch } from "../../../services/fetch/fetch";
// import { fetchTypes } from "../../../types/fetch-types";

import type { HeroesByIdTypes } from '../../../types/fetch-types';

// import fetchHeroes from '../../../services/fetch-heroe-byid';
type Params = {
	params: {
		id: string;
	};
};

export async function load({ params }: Params): Promise<HeroesByIdTypes> {
	const data = await fetchHeroesById(params.id);
	return data;
	// throw error(404, 'Not found');
}
