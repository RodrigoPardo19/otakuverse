import { koulen } from '@/shared/fonts';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { Spinner } from './Spinner';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary';
	variant?: 'solid' | 'outline';
	isLoading?: boolean;
	text: string;
}

const colors = {
	primary: 'text-primary',
	secondary: 'text-secondary'
};

const variants = {
	solid: 'bg-primary !text-black',
	outline: 'bg-background border border-border'
};

const OtakuButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
	const { text, variant = 'solid', color = 'primary', isLoading = false, ...rest } = props;
	return (
		<button
			className={`${koulen.className} rounded-lg px-4 py-2 hover:opacity-85 ${variants[variant]} ${colors[color]} ${isLoading ? 'cursor-not-allowed' : ''}`}
			disabled={isLoading}
			ref={ref}
			{...rest}
		>
			{isLoading ? <Spinner /> : <>{text}</>}
		</button>
	);
});

export default OtakuButton;
