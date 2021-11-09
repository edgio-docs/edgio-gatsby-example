import React from 'react'
import { Link } from 'gatsby'
import Rating from './Rating'
import { Prefetch } from '@layer0/react'

const ListItem = ({ product }) => {
  return (
    <Link to={product.href}>
      <Prefetch url={`/api${product.href}`}>
        <a>
          <div className="relative flex flex-col items-center">
            <div
              className="pb-2/3 bg-contain bg-center bg-no-repeat h-48 w-48"
              style={{ backgroundImage: `url(${product.picture})` }}
            ></div>
            <p className="text-center lowercase font-bold">{product.name}</p>
            <Rating value={product.rating} />
            <p className="text-center">{product.price}</p>
          </div>
        </a>
      </Prefetch>
    </Link>
  )
}

export default ListItem
