import React from 'react'

const Rating = () => {
  return (
    <div className="rating rating-xs">
    <input
      type="radio"
      name="rating-1"
      className="mask mask-star"
    />
    <input
      type="radio"
      name="rating-1"
      className="mask mask-star"
      checked
    />
    <input
      type="radio"
      name="rating-1"
      className="mask mask-star"
    />
    <input
      type="radio"
      name="rating-1"
      className="mask mask-star"
    />
    <input
      type="radio"
      name="rating-1"
      className="mask mask-star"
    />
  </div>
  )
}

export default Rating