import Post from '../types/post'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'

import { BlogPost } from '../components/BlogPost'
import Container from '@components/Container'

type Props = {
	posts: Post[]
}

export default function Blog({ posts }: Props) {
	return (
		<Layout title="文章列表 - jsonleex" description="记录我的编程、学习、娱乐">
			<Container>
				{posts.map((post, index) => (
					<BlogPost key={index} {...post} />
				))}
			</Container>
		</Layout>
	)
}

export async function getStaticProps() {
	const posts = await getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	])
	return { props: { posts } }
}
