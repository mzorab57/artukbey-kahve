import React from 'react'

const MenuItem = ({ imgSrc, altText, title, description, price }) => {
  return (
    <div className="flex  w-full gap-x-8 items-center">
      {/* Image Section */}
      <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
        <a href="images/menu1.jpg" className="block h-full w-full">
          <img
            src={imgSrc}
            alt={altText}
            className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
          />
        </a>
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {/* Ensure the title text wraps */}
        <h5 className="text-xl font-semibold text-white break-words">{title}</h5>

        {/* Allow description to wrap naturally */}
        <div className="text-gray-400 py-4">{description}</div>

        {/* Price styling */}
        <div className="text-primary font-bold mt-2">{price}</div>
      </div>
    </div>
  )
}

export default MenuItem;
