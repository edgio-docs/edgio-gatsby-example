import { Link } from 'gatsby'
import { Prefetch } from '@layer0/react'
import { getCategories } from '../lib/cms'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [categories, setCategories] = useState()
  const [activeTab, setActiveTab] = useState()
  //   const router = useRouter()

  useEffect(() => {
    async function fetchCategories() {
      const { categories: results } = await getCategories()
      setCategories(results)
    }
    fetchCategories()
  }, [])

  //   useEffect(() => {
  //     router.events.on('routeChangeComplete', (url) => {
  //       if (categories) {
  //         setActiveTab(categories.findIndex(({ href }) => href === url))
  //       }
  //     })
  //   }, [categories])

  return (
    <>
      <header className="bg-white pt-2 flex flex-col items-center">
        <Link to="/">
          <img
            width={200}
            height={55.59}
            src="/assets/layer0-icon.svg"
            alt="Layer0 Logo"
            title="Layer0 Logo"
          />
          <div className="text-center text-gray-700">Gatsby Example</div>
        </Link>
        {categories && (
          <div className="flex flex-col items-center w-full border-b-[1px] border-[#eaeaea]">
            <div className={`py-4 w-2/3 md:flex flex flex-row justify-between`}>
              {categories &&
                categories.map(({ categoryName, href }, i) => {
                  return (
                    <div
                      key={categoryName}
                      className={activeTab === i ? 'border-b-[3px] border-[#ff0000]' : null}
                    >
                      <Link to={href}>
                        <Prefetch url={`/api/category/${categoryName.toLowerCase()}`}>
                          <a>{categoryName}</a>
                        </Prefetch>
                      </Link>
                    </div>
                  )
                })}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
