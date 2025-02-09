import type { SVGProps } from 'react';

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={256}
			height={256}
			viewBox="0 0 256 256"
			{...props}
		>
			<path
				fill="currentColor"
				d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
			></path>
		</svg>
	);
}
