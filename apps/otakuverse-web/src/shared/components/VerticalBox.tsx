import { ReactElement } from 'react';

interface Props {
	children: ReactElement | Array<ReactElement>;
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
	start: 'items-start',
	center: 'items-center',
	end: 'items-end'
};

export default function VerticalBox({ children, align, gap = 'md', className }: Props) {
	return (
		<div
			className={`flex flex-col ${GAPS[gap]} ${align ? ALIGNMENTS[align] : ''} ${className ?? ''}`}
		>
			{children}
		</div>
	);
}
