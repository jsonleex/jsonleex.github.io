import cn from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
	className?: string
}

const Container: FunctionComponent<Props> = ({ children, className }) => {
	return (
		<div
			className={cn([
				'max-w-screen-sm md:max-w-screen-md mx-auto px-4 sm:px-6 md:px-8',
				className,
			])}
		>
			{children}
		</div>
	)
}

export default Container
