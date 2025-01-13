import { WarnIcon } from './Icons/WarnIcon';

type Variant = 'info' | 'warn' | 'error';

interface Props {
	message: string;
	variant?: Variant;
}

const VARIANTS = {
	error: 'ring-primary bg-primary text-primary bg-opacity-20',
	info: 'ring-secondary bg-secondary text-secondary bg-opacity-15',
	warn: 'ring-amber-300 bg-amber-300 text-amber-300 bg-opacity-15'
};

export default function Alert({ message, variant = 'error' }: Props) {
	return (
		<div
			className={`w-full flex gap-2 items-center overflow-hidden ring-1 ring-inset rounded-lg p-4 text-sm font-medium ${VARIANTS[variant]}`}
		>
			{variant === 'error' ? (
				<WarnIcon width={25} height={25} />
			) : variant === 'warn' ? (
				<WarnIcon width={25} height={25} />
			) : (
				<WarnIcon width={25} height={25} />
			)}
			<p>{message}</p>
		</div>
	);
}
