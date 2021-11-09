import Seo from '../../components/Seo'
import { getCategory } from '../../lib/cms'
import ListItem from '../../components/ListItem'
import React, { useEffect, useState } from 'react'
import { meta as defaultMeta } from '../../lib/data'

export default function ProductListingPage({ location, params }) {
  const { slug } = params
  const [products, setProducts] = useState()
  const [meta, setMeta] = useState(defaultMeta)
  useEffect(async () => {
    if (slug) {
      const { products } = await getCategory(slug)
      setProducts(products)
      setMeta({
        title: slug,
        description: slug,
        url: `https://layer0-docs-layer0-gatsby-example-default.layer0.link/category/${slug}`,
        image: `https://layer0-docs-og-image-default.layer0.link/api?title=${slug}&width=1400&height=720`,
      })
    }
  }, [location.pathname])
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
