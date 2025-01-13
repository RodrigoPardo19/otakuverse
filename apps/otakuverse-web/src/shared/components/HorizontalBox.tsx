interface Props {
	children: JSX.Element | Array<JSX.Element>;
	align?: 'start' | 'center' | 'end';
	gap?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
}

const GAPS = {
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

const ALIGNMENTS = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end'
};

export default function HorizontalBox({ children, align = 'start', gap = 'md', className }: Props) {
	return (
		<div className={`flex ${GAPS[gap]} ${ALIGNMENTS[align]} ${className ?? ''}`}>{children}</div>
	);
}
