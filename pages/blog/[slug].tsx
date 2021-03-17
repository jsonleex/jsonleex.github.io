import { FunctionComponent } from 'react'

import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import PostType from '../../types/post'

import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '../../lib/api'

import Layout from '../../components/Layout'
import Container from '../../components/Container'

type Props = {
	post: PostType
	morePosts: PostType[]
	preview?: boolean
}

const Post: FunctionComponent<Props> = ({ post, morePosts, preview }) => {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout title={post.title}>
			<Container>
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight md:leading-none mb-12 text-gray-900 dark:text-white text-center">
					{post.title}
				</h1>
				<article
					className="prose dark:prose-dark max-w-none w-full flex-1"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</Container>
		</Layout>
	)
}

export default Post

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const posts = await getAllPosts(['slug'])

	return {
		paths: posts.map((posts) => {
			return {
				params: {
					slug: posts.slug,
				},
			}
		}),
		fallback: false,
	}
}
