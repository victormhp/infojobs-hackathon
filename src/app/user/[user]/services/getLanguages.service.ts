import { Repository } from '../models';

export async function getLanguages(username: string): Promise<string[]> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);
		if (!response.ok) throw new Error('Error en la peticion');

		const repositories: Repository[] = await response.json();

		const languages: string[] = repositories.filter(repo => repo.language).map(repo => repo.language);

		const languageCountMap: Map<string, number> = new Map();
		languages.forEach(language => {
			languageCountMap.set(language, (languageCountMap.get(language) || 0) + 1);
		});

		const sortedLanguages: string[] = Array.from(languageCountMap.entries())
			.sort((a, b) => b[1] - a[1])
			.map(entry => entry[0])
			.slice(0, 5);

		return sortedLanguages;
	} catch (error) {
		console.error(`Error al obtener los repositorios del usuario: ${error}`);
		return [];
	}
}
