import type { SVGProps } from 'react';

export function FacebookColorIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 11 23"
			className="mr-3 h-6 w-6 fill-current"
			{...props}
		>
			<path
				fill="#fff"
				d="M6.87 7.87h3.8l-.26 3.21H6.87v11.15H2.39V11.08H0v-3.2h2.39V5.72c0-.95.03-2.42.77-3.33.78-.96 1.86-1.61 3.7-1.61 3.02 0 4.3.4 4.3.4l-.6 3.28s-1-.26-1.93-.26c-.93 0-1.76.3-1.76 1.17v2.5z"
			></path>
		</svg>
	);
}
