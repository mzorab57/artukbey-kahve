import React from 'react'
import category_bg from '../assets/images/category_bg.jpg'
import menu_logo from '../assets/images/menu_logo.png'
import coffee from "../assets/images/cup-coffee-with-word-coffee-it.jpg";


const Menu = () => {
  return (
    <section
    className="section bg-cover bg-center min-h-screen py-12 "
    style={{ backgroundImage: `url(${category_bg})` }}
  >
    <div className="container mx-auto p-5 max-w-[1300px]">
      <div className="text-center mb-12">
        <div className="text-yellow-500 uppercase mb-4">
          Choose Best Coffee
        </div>
        <h3 className="text-4xl font-bold text-white">
          Kaffen Popular Coffee Menu
        </h3>
      </div>
      <div
        className="bg-black/40 flex justify-center items-center rounded-lg relative px-5 py-10 "
        style={{ backgroundImage: `url(${menu_logo})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-20 ">
          {/* Menu Item 1 */}
          <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>

          {/* Menu Item 2 */}
             <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>
          {/* Menu Item 3 */}
             <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>

          {/* Menu Item 4 */}
              <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>
          {/* Menu Item 5 */}
              <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>

          {/* Menu Item 6 */}
         <div className="flex gap-x-8 items-center">
            <div className="w-40 md:h-44 h-40 overflow-hidden rounded-lg">
              <a href="images/menu1.jpg" className="block h-full w-full">
                <img
                  src={coffee}
                  alt="Americano Coffee"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-700"
                />
              </a>
            </div>
            <div className="">
              <h5 className="text-xl font-bold text-white">Americano Coffee</h5>
              <div className="text-gray-400 py-4">2/3 espresso, 1/3 streamed milk</div>
              <div className="text-yellow-500 font-bold mt-2">............. $4.9</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Menu
