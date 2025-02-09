import CheckIcon from './Icons/CheckIcon';
import CircleXIcon from './Icons/CircleXIcon';

interface Props {
	text: string;
	isValid?: boolean;
}

export default function ValidationIndicator({ text, isValid = false }: Props) {
	return (
		<div className="flex gap-2 items-center">
			{isValid ? (
				<CheckIcon width="1.5rem" height="1.5rem" className="text-black" />
			) : (
				<CircleXIcon width="1.5rem" height="1.5rem" className="text-primary" />
			)}
			<p>{text}</p>
		</div>
	);
}
