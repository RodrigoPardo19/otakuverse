import { DiscordIcon } from './Icons/DiscordIcon';
import { GithubIcon } from './Icons/GithubIcon';
import { InstagramIcon } from './Icons/InstagramIcon';
import { XIcon } from './Icons/XIcon';

export default function Footer() {
	return (
		<footer className="mt-4 flex flex-col items-center justify-center gap-4 border-t border-border py-4">
			<div className="flex gap-8">
				<XIcon width="2rem" height="2rem" className="cursor-pointer hover:text-primary" />
				<InstagramIcon width="2rem" height="2rem" className="cursor-pointer hover:text-primary" />
				<DiscordIcon width="2rem" height="2rem" className="cursor-pointer hover:text-primary" />
				<GithubIcon width="2rem" height="2rem" className="cursor-pointer hover:text-primary" />
			</div>
			<div className="text-sm">©2024 All Rights Reserved to Otakuverse.</div>
		</footer>
	);
}
