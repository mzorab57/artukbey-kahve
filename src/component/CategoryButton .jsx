import React from 'react'

const CategoryButton  = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
        isActive ? 'bg-[#b89272] text-white' : 'bg-black text-gray-400'
      } hover:bg-[#b89272] hover:text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CategoryButton 
