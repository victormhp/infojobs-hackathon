import { Repository } from '../models';

export async function getLanguages(username: string): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);
		if (!response.ok) throw new Error('Error en la peticion');

		const repositories: Repository[] = await response.json();

		const languages: string[] = repositories.filter(repo => repo.language).map(repo => repo.language);
		const uniqueLanguages: string[] = Array.from(new Set(languages));
		const languagesString = uniqueLanguages.join('-').toLowerCase();

		return languagesString;
	} catch (error) {
		console.error(`Error al obtener los repositorios del usuario: ${error}`);
		return '';
	}
}
