type Props = {
	content: string
}

const PostBody = ({ content }: Props) => {
	return (
		<article
			className="prose dark:prose-dark max-w-none w-full flex-1"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}

export default PostBody
