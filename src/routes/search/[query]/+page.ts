import { fetchSearch } from '../../../services/fetch';
import type { SearchTypes, Result } from '../../../types/fetch-types';

interface Data {
	route: Route;
	params: Params;
	data: null;
	url: string;
}

interface Params {
	query: string;
}

interface Route {
	id: string;
}

type Returned = {
	data: Result[];
	query: string;
};

export async function load(router: Data): Promise<Returned> {
	const { params } = router,
		{ query } = params;
	const req: SearchTypes = await fetchSearch(params.query),
		data = req.results;

	return { data: data, query };
	// throw error(404, 'Not found');
}
