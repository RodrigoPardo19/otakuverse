import Image from 'next/image';

interface Props {
	src: string;
	width: number;
	height: number;
	className?: string;
}

export default function ImageCard({ src, width, height, className }: Props) {
	return (
		<div
			className={`${className ?? className} overflow-hidden rounded-lg border border-gray-600 bg-background`}
		>
			<Image className="object-scale-down" src={src} alt="itachi" width={width} height={height} />
		</div>
	);
}
