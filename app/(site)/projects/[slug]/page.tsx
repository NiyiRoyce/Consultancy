import React from 'react'
import MDXComponents from '../../../../components/mdx-components'

type Props = { params: { slug: string } }

export default async function ProjectPage({ params }: Props) {
  try {
    const mod = await import(`../../../../content/projects/${params.slug}.mdx`)
    const MDXContent = mod.default
    return (
      <article>
        <MDXContent components={MDXComponents} />
      </article>
    )
  } catch (err) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Project `{params.slug}` was not found.</p>
      </section>
    )
  }
}
