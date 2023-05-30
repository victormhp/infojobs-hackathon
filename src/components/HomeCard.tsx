import { Card, Title, Subtitle } from '@tremor/react';
import Image from 'next/image';

function HomeCard() {
	return (
		<Card className='w-full flex flex-col gap-6'>
			<Title>Github Offers</Title>
			<div className='flex flex-col justify-center items-center'>
				<Subtitle>
					¡Bienvenido(a) a nuestro filtrador de ofertas de trabajo de InfoJobs personalizado para usuarios de GitHub! Para comenzar, ingresa
					tu nombre de usuario de GitHub en la barra de búsqueda y verás las ofertas de trabajo filtradas según los lenguajes más utilizados
					en tus repositorios.
				</Subtitle>
				<picture>
					<source media='(min-width: 640px)' srcSet='/content.svg' />
					<source media='(max-width: 640px)' srcSet='/pic-search.svg' />
					<img src='/pic-search.svg' alt='Search' />
				</picture>
			</div>
		</Card>
	);
}

export default HomeCard;
