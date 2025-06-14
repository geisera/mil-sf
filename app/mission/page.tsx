import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import MissionLayout from '@/layouts/MissionLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Mission' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'mission') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <MissionLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </MissionLayout>
    </>
  )
}
