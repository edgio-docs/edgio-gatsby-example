import React from 'react'
import { filterProducts } from '../lib/helper'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import ProductPreview from '../components/ProductPreview'

const Commerce = ({ pageContext, location }) => {
  const data = Object.keys(pageContext).map((i) => pageContext[i])
  return (
    <>
      <div className="flex-col items-center justify-start">
        <div className="mb-5 flex w-full flex-row items-start px-5">
          <div className="hidden w-[15%] pt-5 md:block">
            <LeftSidebar {...location} />
          </div>
          <div className="flex w-full flex-col items-start pt-5 md:w-[70%]">
            <h2 className="text-[#FFFFFF75]">Showing {data.length} Results</h2>
            <div className="mt-5 flex flex-row flex-wrap items-start">
              {filterProducts(data, new URLSearchParams(location.search.substring(1)).get('filter')).map((i) => (
                <ProductPreview key={i.path} {...i} />
              ))}
            </div>
          </div>
          <div className="hidden w-[15%] pt-5 md:block">
            <RightSidebar {...location} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Commerce
