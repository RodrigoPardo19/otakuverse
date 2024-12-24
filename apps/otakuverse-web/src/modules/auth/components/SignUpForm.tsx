import { koulen } from '@/shared/fonts';
import Divider from '@/shared/components/Divider';
import * as Form from '@radix-ui/react-form';

export default function SignUpForm() {
	return (
		<Form.Root className="w-full rounded-lg border border-border bg-background p-4 md:basis-2/5">
			<div className="flex flex-col gap-4">
				<h2 className={`${koulen.className} text-xl font-bold text-primary`}>
					Create your account
				</h2>
				<Form.Field name="email" className="flex flex-col gap-2">
					<Form.Label>Email</Form.Label>
					<Form.Control asChild>
						<input
							type="email"
							className="rounded-lg border border-border bg-background px-4 py-2 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary text-input"
							name="email"
							placeholder="example@gmail.com"
							autoFocus
						/>
					</Form.Control>
				</Form.Field>

				<Form.Field name="password" className="flex flex-col gap-2">
					<Form.Label>Password</Form.Label>
					<Form.Control asChild>
						<input
							type="password"
							className="rounded-lg border border-border bg-background px-4 py-2 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
							name="password"
							placeholder="type your password..."
						/>
					</Form.Control>
				</Form.Field>

				<Form.Field name="password-confirm" className="flex flex-col gap-2">
					<Form.Label>Confirm your password</Form.Label>
					<Form.Control asChild>
						<input
							type="password"
							className="rounded-lg border border-border bg-background px-4 py-2 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
							name="password-confirm"
							placeholder="type your password..."
						/>
					</Form.Control>
				</Form.Field>

				<div className="flex justify-end gap-4">
					<button
						className={`${koulen.className} rounded-lg border border-border bg-background px-4 py-2 text-primary`}
					>
						Cancel
					</button>
					<button
						className={`${koulen.className} rounded-lg border border-border bg-primary px-4 py-2`}
					>
						Submit
					</button>
				</div>

				<div className="relative">
					<Divider position="horizontal" />
					<p
						className={`${koulen.className} absolute left-1/2 top-0 -translate-x-1/2 bg-background px-4 text-lg text-primary`}
					>
						Or
					</p>
				</div>

				<div className="flex flex-col items-center justify-center gap-4">
					<button className="flex w-64 cursor-pointer items-center justify-start rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold hover:border-secondary hover:text-secondary active:border-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							className="h6 mr-3 w-6 fill-current"
						>
							<clipPath id="svg-88ad06a86fd18f083bdc5e25e69c09da__a">
								<path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4A21.94 21.94 0 0 0 2 24c0 12.2 9.8 22 22 22 11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
							</clipPath>
							<path
								clipPath="url(#svg-88ad06a86fd18f083bdc5e25e69c09da__a)"
								fill="#FBBC05"
								d="M0 37V11l17 13z"
							></path>
							<path
								clipPath="url(#svg-88ad06a86fd18f083bdc5e25e69c09da__a)"
								fill="#EA4335"
								d="m0 11 17 13 7-6.1L48 14V0H0z"
							></path>
							<path
								clipPath="url(#svg-88ad06a86fd18f083bdc5e25e69c09da__a)"
								fill="#34A853"
								d="m0 37 30-23 7.9 1L48 0v48H0z"
							></path>
							<path
								clipPath="url(#svg-88ad06a86fd18f083bdc5e25e69c09da__a)"
								fill="#4285F4"
								d="M48 48 17 24l-4-3 35-10z"
							></path>
						</svg>

						<span className="block h-6 w-1 border-l border-border"></span>
						<span className="pl-3">Continue with Google</span>
					</button>

					<button className="flex w-64 cursor-pointer items-center justify-start rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold hover:border-secondary hover:text-secondary active:border-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 11 23"
							className="mr-3 h-6 w-6 fill-current"
						>
							<path
								fill="#fff"
								d="M6.87 7.87h3.8l-.26 3.21H6.87v11.15H2.39V11.08H0v-3.2h2.39V5.72c0-.95.03-2.42.77-3.33.78-.96 1.86-1.61 3.7-1.61 3.02 0 4.3.4 4.3.4l-.6 3.28s-1-.26-1.93-.26c-.93 0-1.76.3-1.76 1.17v2.5z"
							></path>
						</svg>

						<span className="block h-6 w-1 border-l border-border"></span>
						<span className="pl-3">Continue with Facebook</span>
					</button>

					<button className="flex w-64 cursor-pointer items-center justify-start rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold hover:border-secondary hover:text-secondary focus:outline-secondary">
						<svg
							className="mr-2 h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							width="800px"
							height="800px"
							viewBox="0 -28.5 256 256"
							version="1.1"
							preserveAspectRatio="xMidYMid"
						>
							<g>
								<path
									d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
									fill="#5865F2"
									fillRule="nonzero"
								></path>
							</g>
						</svg>
						<span className="block h-6 w-1 border-l border-border"></span>
						<span className="pl-3">Continue with Discord</span>
					</button>
				</div>
			</div>
		</Form.Root>
	);
}
