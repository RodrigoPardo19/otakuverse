import { GoogleColorIcon } from './Icons/GoogleColor';
import { FacebookColorIcon } from './Icons/FacebookColorIcon';
import { DiscordColorIcon } from './Icons/DiscorColorIcon';

interface Props {
	provider: 'google' | 'facebook' | 'discord';
}

const providers = {
	google: { text: 'Continue with Google' },
	facebook: { text: 'Continue with Facebook' },
	discord: { text: 'Continue with Discord' }
};

export default function OauthButton({ provider }: Props) {
	return (
		<button className="flex w-64 cursor-pointer items-center justify-start rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold hover:border-secondary hover:text-secondary active:border-secondary">
			{provider === 'google' ? (
				<GoogleColorIcon />
			) : provider === 'facebook' ? (
				<FacebookColorIcon />
			) : (
				<DiscordColorIcon />
			)}
			<span className="block h-6 w-1 border-l border-border"></span>
			<span className="pl-3">{providers[provider].text}</span>
		</button>
	);
}
