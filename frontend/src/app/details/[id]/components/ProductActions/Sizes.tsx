import { sizes } from '@/lib/data'
import React from 'react'

const Size = () => {
  return (
    <div>
          <h5>Size:L</h5>
              <ul className="flex flex-row flex-wrap gap-2 mb-4">
                {sizes?.map((size, index) => (
                  <li
                    key={index}
                    className=" p-1 px-5 rounded-lg primary-btn font-medium "
                  >
                    {size}
                  </li>
                ))}
              </ul>
    </div>
  )
}

export default Size