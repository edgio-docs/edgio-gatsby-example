import React from 'react'
import Seo from '../components/Seo'
import Rating from '../components/Rating'

export default function ProductPage({ pageContext: product }) {
  const meta = {
    title: product.name,
    description: product.description,
    url: `https://layer0-docs-layer0-gatsby-example-default.layer0.link${product.slug}`,
    image: `https://layer0-docs-og-image-default.layer0.link/api?title=${product.name}&width=1400&height=720`,
  }
  return (
    <>
      <Seo {...meta} />
      {product && (
        <div className="container center flex flex-col items-center md:flex-row pb-20">
          <div className="container p-5 flex flex-col items-center">
            <img src={`https://opt.moovweb.net?quality=30&height=250&width=250&img=${encodeURIComponent('https://layer0-docs-layer0-gatsby-example-default.layer0.link')}${product.picture}`} />
          </div>
          <div className="container p-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-bold py-2 m2">{product.name}</h2>
            <div className="py-2 m2">{product.description}</div>
            <div className="py-2 m2">${product.price}</div>
            <div className="py-2 m2">
              <Rating value={Number(product.rating)} />
            </div>
            <div className="py-2 m2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
