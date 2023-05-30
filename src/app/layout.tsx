import './globals.css';
import { Inter } from 'next/font/google';
import { Logo, SearchBar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Github Offers',
	description: 'Encuentra las ofertas de trabajo que mejor se adapten a ti',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-l4`}>
				<header className='py-10'>
					<h1 className='flex flex-col items-center justify-center text-lg'>
						<Logo />
						<strong className='font-semibold tracking-wider text-black/80'>Ofertas con tus lenguajes favoritos</strong>
					</h1>
				</header>
				<main className='max-w-[1110px] mx-auto p-4 flex flex-col gap-4'>
					<SearchBar />
					{children}
				</main>
			</body>
		</html>
	);
}
