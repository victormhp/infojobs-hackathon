import { APIResultOffer } from '../models';

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? '';

export async function getOffers(languages: string, pageParam: number) {
	const response = await fetch(
		`https://api.infojobs.net/api/9/offer?category=informatica-telecomunicaciones&q=${languages}&page=${pageParam}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${infoJobsToken}`,
			},
		}
	);

	if (!response.ok) throw new Error('Error en la peticion');

	const offersData = await response.json();
	const { currentPage, totalResults, totalPages } = offersData;
	const { items }: { items: APIResultOffer[] } = offersData;

	const listOfOffers = items.map(item => {
		const { id, title, province, experienceMin, link, teleworking } = item;

		return {
			id,
			title,
			province: province.value,
			experienceMin: experienceMin.value,
			link,
			teleworking: teleworking?.value ?? 'No especificado',
		};
	});

	return {
		currentPage,
		listOfOffers,
	};
}
