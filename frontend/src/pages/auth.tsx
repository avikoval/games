import { ReactNode } from "react"

type SignInProps = {
	children: ReactNode;
}

export const Auth = (props: SignInProps) => {
	const { children } = props;

	

	return <>{children}</>
}
