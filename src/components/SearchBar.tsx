'use client';

import { GithubIcon } from './Icons';
import { useState, useId, ChangeEvent, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
	const [search, setSearch] = useState('');
	const searchID = useId();
	const router = useRouter();

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearch(value);
	};

	const handleClick = (event: MouseEvent) => {
		event.preventDefault();
		router.push(`/user/${search}`);
		// router.push(`/?search=${search}`);
	};

	return (
		<div className='bg-primary-l2 flex justify-between items-center rounded p-5'>
			<form className='flex flex-col gap-4 w-full sm:flex-row sm:items-center' role='search'>
				<div className='relative flex items-center'>
					<GithubIcon />
					<input
						className='py-2 pr-3 pl-10 rounded border border-gray-l2'
						id={searchID}
						type='search'
						value={search}
						onChange={handleSearch}
						placeholder='Usuario de Github'
						autoComplete='off'
						autoCorrect='off'
						autoCapitalize='off'
						spellCheck='false'
						maxLength={32}
					/>
				</div>
				<button className='text-white	bg-accent hover:bg-accent-d1 px-5 py-2 rounded font-medium' onClick={handleClick}>
					BUSCAR
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
