interface Props {
	position?: 'horizontal' | 'vertical';
}

export default function Divider({ position = 'horizontal' }: Props) {
	if (position === 'horizontal') {
		return <hr className="my-4 h-0.5 border-t-0 bg-border/50" />;
	}

	return <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-border/50"></div>;
}
