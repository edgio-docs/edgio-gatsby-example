import React from 'react'
import Seo from '../components/Seo'

const Home = () => {
  const meta = {
    title: 'Layer0 Gatsby Example',
    description:
      'This open source project demonstrates Prefetching, and Image Optimization with Layer0 using Gatsby.',
    url: 'https://layer0-docs-layer0-gatsby-example-default.layer0.link',
    image:
      'https://layer0-docs-og-image-default.layer0.link/api?title=Layer0 Gatsby Example&width=1400&height=720',
  }
  return (
    <>
      <Seo {...meta} />
      <div className="flex flex-col justify-center items-center w-full min-h-[75vh]">
        <p className="text-center">
          This is an example Gatsby app powered by Layer0. Click a category above to get started.
        </p>
      </div>
    </>
  )
}

export default Home
