import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<Container>
				<div className="py-12 flex flex-col lg:flex-row items-center">
					jsonleex @2021
				</div>
			</Container>
		</footer>
	)
}

export default Footer
