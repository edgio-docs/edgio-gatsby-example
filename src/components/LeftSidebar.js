import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import { Fragment, useEffect, useState } from 'react'

const LeftSidebar = ({ pathname }) => {
  const [listingItems, setListingItems] = useState([])
  useEffect(() => {
    fetch('/l0-api/categories/all')
      .then((res) => res.json())
      .then((res) => {
        setListingItems(res)
      })
  }, [])
  return (
    <div className="flex w-full flex-col">
      <Link href={`/commerce`}>
        <h3
          className={classNames(
            'text-md',
            { 'font-light text-[#FFFFFF75]': pathname !== `/commerce` },
            { 'font-medium text-[#FFFFFF]': pathname === `/commerce` }
          )}
        >
          Shop All
        </h3>
      </Link>
      {listingItems.map((item) => (
        <Fragment key={item.slug}>
          <Link to={`/commerce/${item.slug}`}>
            <h3
              className={classNames(
                'text-md mt-2',
                { 'font-light text-[#FFFFFF75]': pathname !== `/commerce/${item.slug}` },
                { 'font-medium text-[#FFFFFF]': pathname === `/commerce/${item.slug}` }
              )}
            >
              {item.name}
            </h3>
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default LeftSidebar
