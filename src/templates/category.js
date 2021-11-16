import React from 'react'
import Seo from '../components/Seo'
import ListItem from '../components/ListItem'

export default function CategoryPage({ pageContext }) {
  const { slug, products } = pageContext
  const meta = {
    title: slug,
    description: slug,
    url: `https://layer0-docs-layer0-gatsby-example-default.layer0.link/category/${slug}`,
    image: `https://layer0-docs-og-image-default.layer0.link/api?title=${slug}&width=1400&height=720`,
  }
  return (
    <>
      <Seo {...meta} />
      <div className="flex flex-col items-center">
        <div className="mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products &&
            products.map((product) => {
              return <ListItem key={product['_id']} product={product} />
            })}
        </div>
      </div>
    </>
  )
}
