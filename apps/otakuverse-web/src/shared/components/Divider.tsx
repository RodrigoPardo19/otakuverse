import { koulen } from '@/shared/fonts';

interface Props {
	position?: 'horizontal' | 'vertical';
	text?: string;
}

export default function Divider({ position = 'horizontal', text }: Props) {
	if (text && position === 'horizontal') {
		return (
			<div className="relative">
				<hr className="my-4 h-0.5 border-t-0 bg-border/50" />
				<p
					className={`${koulen.className} absolute left-1/2 top-0 -translate-x-1/2 bg-background px-4 text-lg text-primary`}
				>
					{text}
				</p>
			</div>
		);
	}

	if (position === 'horizontal') {
		return <hr className="my-4 h-0.5 border-t-0 bg-border/50" />;
	}

	return <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-border/50"></div>;
}
