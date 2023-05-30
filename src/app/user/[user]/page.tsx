import { Card, Flex, Title, Badge, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text } from '@tremor/react';
import { getLanguages, getOffers } from '@/app/user/[user]/services';
import { TableButton } from '@/components';
import { Fragment } from 'react';

async function UserPage({ params }: { params: { user: string } }) {
	const user = params.user;
	const languages = user ? await getLanguages(user) : null;
	const infoJobsOffers = languages ? await getOffers(languages, 1) : null;
	const offers = infoJobsOffers?.listOfOffers;

	return (
		<Card>
			<Flex justifyContent='start' className='space-x-2'>
				<Title>Ofertas de trabajo de InfoJobs</Title>
				<Badge color='gray'>{offers?.length}</Badge>
			</Flex>

			<Text className='mt-2'>Las ofertas de trabajo que mejor se adaptan a tu perfil</Text>

			<Table className='mt-6'>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Puesto</TableHeaderCell>
						<TableHeaderCell>Provincia</TableHeaderCell>
						<TableHeaderCell>Experiencia</TableHeaderCell>
						<TableHeaderCell className='text-center'>Acción</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{offers?.map(item => (
						<Fragment key={item.id}>
							<TableRow className='transition-colors hover:bg-sky-300'>
								<TableCell>{item.title}</TableCell>
								<TableCell>{item.province}</TableCell>
								<TableCell>{item.experienceMin}</TableCell>
								<TableCell className='text-center'>
									<TableButton item={item} />
								</TableCell>
							</TableRow>
						</Fragment>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}

export default UserPage;
