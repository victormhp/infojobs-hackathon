'use client';

import { Button } from '@tremor/react';
import { Offer } from '@/types';

interface Props {
	item: Offer;
}

function TableButton({ item }: Props) {
	return (
		<Button
			onClick={() => {
				window.open(item.link, '_blank');
			}}
			size='xs'
			variant='secondary'
			color='gray'
		>
			Revisar oferta
		</Button>
	);
}

export default TableButton;
