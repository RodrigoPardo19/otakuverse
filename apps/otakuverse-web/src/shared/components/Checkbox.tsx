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
				<CheckIcon width="1.5rem" height="1.5rem" className="" />
			) : (
				<CircleXIcon width="1.5rem" height="1.5rem" className="" />
			)}
			<p>{text}</p>
		</div>
	);
}
