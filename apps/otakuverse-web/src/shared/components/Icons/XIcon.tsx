import type { SVGProps } from 'react';

export function XIcon(props: SVGProps<SVGSVGElement>) {
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
				d="m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z"
			></path>
		</svg>
	);
}
