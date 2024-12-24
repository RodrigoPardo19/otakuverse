import type { Metadata } from 'next';
import './globals.css';
import { roboto } from '@/shared/fonts';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';

export const metadata: Metadata = {
	title: 'Otakuverse',
	description: 'A platform for anime and manga reviews'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} relative mx-auto h-full max-w-screen-xl px-4 antialiased`}
			>
				<div className="absolute bottom-1/2 right-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-white to-gray-500 blur-[270px]"></div>
				{/*<div className="absolute right-1/2 top-3/4 -z-10 h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-white to-gray-500 blur-[270px]"></div>*/}
				<div className="flex min-h-svh flex-col justify-between">
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
