import React from 'react'

const MenuItem = ({ imgSrc, altText, title, description, price }) => {
  return (
    <div className="flex gap-x-8 items-center">
    <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
      <a href="images/menu1.jpg" className="block h-full w-full">
        <img
          src={imgSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
        />
      </a>
    </div>
    <div>
      <h5 className="text-xl font-bold text-white">{title}</h5>
      <div className="text-gray-400 py-4">{description}</div>
      <div className="text-yellow-500 font-bold mt-2">{price}</div>
    </div>
  </div>
  )
}

export default MenuItem
