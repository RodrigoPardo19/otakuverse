import { useEffect } from 'react';

interface Props {
	size?: number;
	color?: string;
}

async function getSpinner() {
	const { ring } = await import('ldrs');
	ring.register();
}

export function Spinner({ size = 16, color = 'black' }: Props) {
	useEffect(() => {
		getSpinner();
	}, []);

	return <l-ring size={size} color={color} stroke="3" bg-opacity="0" speed="2"></l-ring>;
}
