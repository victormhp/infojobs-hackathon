import { Card, Title, Subtitle } from '@tremor/react';
import Image from 'next/image';

function HomeCard() {
	return (
		<Card className='w-full flex flex-col gap-6'>
			<Title>Github Offers</Title>
			<div className='flex flex-row justify-around sm:flex-col'>
				<Subtitle>Encuentra las ofertas que mejor se adapten a tu perfil como programdor</Subtitle>
				<Image width={100} height={100} src='/pic-search.svg' alt='Search' />
			</div>
		</Card>
	);
}

export default HomeCard;
