import { Card, Flex, Title, Badge, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text } from '@tremor/react';
import { getLanguages, getOffers } from './services';
import { TableButton, Languages } from '@/components';
import { Fragment } from 'react';

async function UserPage({ params }: { params: { user: string } }) {
	const user = params.user;
	const languages = await getLanguages(user);
	const languagesString = languages.join('-').toLowerCase();

	const infoJobsOffers = await getOffers(languagesString, 1);
	const offers = infoJobsOffers?.listOfOffers;

	return (
		<>
			<Languages languages={languages} />
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
								<TableRow>
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
		</>
	);
}

export default UserPage;
