'use client';

import { koulen } from '@/shared/fonts';
import Divider from '@/shared/components/Divider';
import * as Form from '@radix-ui/react-form';
import ValidationIndicator from '@/shared/components/Checkbox';
import { useForm } from 'react-hook-form';
import { SignUpFormFields } from '../types';
import Field from '@/shared/components/Field';
import OauthButton from '@/shared/components/OauthButton';
import VerticalBox from '@/shared/components/VerticalBox';
import HorizontalBox from '@/shared/components/HorizontalBox';
import OtakuButton from '@/shared/components/OtakuButton';
import Alert from '@/shared/components/Alert';

export default function SignUpForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<SignUpFormFields>();

	const MIN_LENGTH_PASSWORD = 8;
	const MAX_LENGTH_PASSWORD = 16;

	const password = watch('password');
	const hasRightLength =
		password?.length >= MIN_LENGTH_PASSWORD && password?.length <= MAX_LENGTH_PASSWORD;
	const hasOneNumber = /\d/.test(password);
	const hasOneUpperCaseLetter = /[A-Z]/.test(password);
	const passwordsMatch = password?.length > 0 && password === watch('passwordConfirmation');

	const onSubmit = (data: SignUpFormFields) => {
		if (hasRightLength && hasOneNumber && hasOneUpperCaseLetter && passwordsMatch) {
			console.log('data', data);
		}
	};

	return (
		<Form.Root
			className="w-full rounded-lg border border-border bg-background p-4 md:basis-2/5"
			onSubmit={handleSubmit(onSubmit)}
		>
			<VerticalBox>
				<h2 className={`${koulen.className} text-xl font-bold text-primary`}>
					Create your account
				</h2>
				<Alert message="Ups, something went wrong, contact us" variant="error" />
				<Field
					type="email"
					autoFocus
					label="Email"
					placeholder="example@gmail.com"
					{...register('email', { required: 'email is required' })}
					error={errors.email?.message}
				/>
				<Field
					type="password"
					label="Password"
					placeholder="type your password"
					{...register('password', { required: 'password is required' })}
					error={errors.password?.message}
				/>
				<Field
					type="password"
					label="Confirm your password"
					placeholder="type your password again"
					{...register('passwordConfirmation', { required: 'confirm your password' })}
					error={errors.passwordConfirmation?.message}
				/>
				<VerticalBox gap="sm">
					<ValidationIndicator text="Between 8 an 16 characters" isValid={hasRightLength} />
					<ValidationIndicator text="Contains at least 1 number" isValid={hasOneNumber} />
					<ValidationIndicator
						text="Contains at least 1 uppercase letter"
						isValid={hasOneUpperCaseLetter}
					/>
					<ValidationIndicator text="Passwords match" isValid={passwordsMatch} />
				</VerticalBox>
				<HorizontalBox align="end">
					<OtakuButton variant="outline" text="Cancel" />
					<OtakuButton type="submit" variant="solid" text="Submit" />
				</HorizontalBox>
				<Divider position="horizontal" text="or" />
				<VerticalBox align="center">
					<OauthButton provider="google" />
					<OauthButton provider="facebook" />
					<OauthButton provider="discord" />
				</VerticalBox>
			</VerticalBox>
		</Form.Root>
	);
}
