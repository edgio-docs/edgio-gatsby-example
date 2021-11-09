import React from 'react'
import { meta } from '../lib/data'
import Seo from '../components/Seo'

const Home = () => {
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
