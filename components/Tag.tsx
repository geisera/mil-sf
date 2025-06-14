import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 mr-3 text-sm font-medium uppercase"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
