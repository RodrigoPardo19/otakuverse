import { koulen } from '@/shared/fonts';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

// This button is a normal button in the app. You can use it with variant solid or outline.
// Colors are supported just 'primary' and 'secondary' at the moment.
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary';
	variant?: 'solid' | 'outline';
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
	const { text, variant = 'solid', color = 'primary', ...rest } = props;
	return (
		<button
			className={`${koulen.className} rounded-lg px-4 py-2 ${variants[variant]} ${colors[color]}`}
			ref={ref}
			{...rest}
		>
			{text}
		</button>
	);
});

export default OtakuButton;
