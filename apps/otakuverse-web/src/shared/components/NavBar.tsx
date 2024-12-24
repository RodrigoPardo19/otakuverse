'use client';

import { usePathname } from 'next/navigation';
import { koulen } from '@/shared/fonts';
import Link from 'next/link';
import Divider from '@/shared/components/Divider';
import * as Popover from '@radix-ui/react-popover';

const menu = [
	{
		name: 'Anime',
		paths: [
			{ name: 'Top All Time', url: '' },
			{ name: 'Top Airing', url: '' },
			{ name: 'Top Uncoming', url: '' },
			{ name: 'Top by Seasons', url: '' },
			{ name: 'Top Episodes', url: '' }
		]
	},
	{
		name: 'Manga',
		paths: [
			{ name: 'Top All Time', url: '' },
			{ name: 'Top Airing', url: '' },
			{ name: 'Top Uncoming', url: '' },
			{ name: 'Top by Seasons', url: '' },
			{ name: 'Top Episodes', url: '' }
		]
	},
	{
		name: 'News',
		paths: [{ name: 'Top All Time', url: '' }]
	},
	{
		name: 'Your Lists',
		paths: [{ name: 'Top All Time', url: '' }]
	}
];

export default function NavBar() {
	const pathName = usePathname();

	return (
		<nav className="flex justify-between border-b border-slate-600 py-4">
			<ul className="flex gap-8">
				{menu.map((el) => (
					<li key={el.name}>
						<Popover.Root>
							<Popover.Trigger asChild>
								<button
									className={`${koulen.className} text-lg focus:outline-none data-[active]:text-primary data-[hover]:text-primary`}
								>
									{el.name}
								</button>
							</Popover.Trigger>
							<Popover.Portal>
								{el.paths.map((path) => (
									<Link key={path.name} href={path.url} className="p-4 hover:text-primary">
										{path.name}
									</Link>
								))}
							</Popover.Portal>
						</Popover.Root>

						{/* <Popover className="relative"> */}
						{/* 	<PopoverButton */}
						{/* 		className={`${koulen.className} text-lg focus:outline-none data-[active]:text-primary data-[hover]:text-primary`} */}
						{/* 	> */}
						{/* 		{el.name} */}
						{/* 	</PopoverButton> */}
						{/* 	<PopoverPanel */}
						{/* 		transition */}
						{/* 		anchor="bottom" */}
						{/* 		className="flex flex-col divide-y divide-border rounded border border-border bg-background px-4 shadow-2xl transition duration-200 ease-in-out" */}
						{/* 	> */}
						{/* 		{el.paths.map((path) => ( */}
						{/* 			<Link key={path.name} href={path.url} className="p-4 hover:text-primary"> */}
						{/* 				{path.name} */}
						{/* 			</Link> */}
						{/* 		))} */}
						{/* 	</PopoverPanel> */}
						{/* </Popover> */}
					</li>
				))}
			</ul>
			<div className="flex gap-4">
				<Link href="/login" className={`${pathName === '/login' ? 'text-primary' : 'text-white'}`}>
					Login
				</Link>
				<Divider position="vertical" />
				<Link
					href="/signup"
					className={`${pathName === '/signup' ? 'text-primary' : 'text-white'}`}
				>
					Sign up
				</Link>
			</div>
		</nav>
	);
}
