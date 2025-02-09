import * as Form from '@radix-ui/react-form';
import { forwardRef, HTMLProps, Ref, useState } from 'react';
import { OpenEyeIcon } from './Icons/OpenEyeIcon';
import { ClosedEyeIcon } from './Icons/CloseEyeIcon';

interface Props extends HTMLProps<HTMLInputElement> {
	label: string;
	error?: string;
}

const Field = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
	const { label, type, error, ...inputProps } = props;
	const [inputType, setInputType] = useState(type ?? 'text');
	const [isHiddenPassword, setIsHiddenPassword] = useState(true);

	const isPasswordType = inputType === 'password';

	const revealPassword = () => {
		setInputType('text');
		setIsHiddenPassword(false);
	};

	const hidePassword = () => {
		setInputType('password');
		setIsHiddenPassword(true);
	};

	return (
		<>
			<Form.Field name="label" className="flex flex-col gap-2">
				<Form.Label className="font-semibold">{label}</Form.Label>
				<div className="flex relative">
					<Form.Control asChild>
						<input
							type={inputType}
							ref={ref}
							className="flex-1 rounded-lg border border-border bg-bg-secondary px-4 py-2 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black text-input placeholder-foreground"
							aria-invalid={error ? true : false}
							{...inputProps}
						/>
					</Form.Control>
					{isPasswordType && isHiddenPassword ? (
						<OpenEyeIcon
							width="1.5rem"
							height="1.5rem"
							className="absolute right-2 top-2 flex-none cursor-pointer hover:text-secondary"
							onClick={revealPassword}
						/>
					) : !isHiddenPassword ? (
						<ClosedEyeIcon
							width="1.5rem"
							height="1.5rem"
							className="absolute right-2 top-2 flex-none cursor-pointer hover:text-secondary"
							onClick={hidePassword}
						/>
					) : (
						<></>
					)}
				</div>
				{error && (
					<p role="alert" className="text-primary">
						{error}
					</p>
				)}
			</Form.Field>
		</>
	);
});

export default Field;
