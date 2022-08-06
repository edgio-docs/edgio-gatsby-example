import React from 'react'

export default function CategoryPage({ pageContext }) {
  const { slug, products } = pageContext
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <div className="xs:grid-cols-1 mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products &&
            products.map((product) => {
              return <ListItem key={product['_id']} product={product} />
            })}
        </div> */}
      </div>
    </>
  )
}
