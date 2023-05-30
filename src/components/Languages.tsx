import { Card, Title, Legend } from '@tremor/react';

interface Props {
	languages: string[];
}

function Languages({ languages }: Props) {
	return (
		<Card className='w-full mx-auto'>
			<Title>Tus 5 lenguajes más utilizados son </Title>
			<Legend className='mt-3' categories={languages} colors={['sky']} />
		</Card>
	);
}

export default Languages;
