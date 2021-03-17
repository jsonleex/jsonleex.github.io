import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

type Props = {
	type?: string
	date?: string
	title?: string
	image?: string
	description?: string

	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ preview, children, ...customMeta }: Props) => {
	return (
		<>
			<Meta {...customMeta} />

			<a href="#content" className="sr-only focus:not-sr-only">
				Skip to content
			</a>

			<Header />

			<main id="content" className="bg-white dark:bg-black px-8">
				{children}
			</main>

			<Footer />
		</>
	)
}

export default Layout
