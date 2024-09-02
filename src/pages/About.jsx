import React from 'react'
import about from "../assets/images/about_img.webp";


const About = () => {

  

  return (
    <section className="bg-black py-12  ">
    <div className="container max-w-[1280px]  mx-auto px-4 flex flex-wrap justify-between   items-center">
      {/* Text Section */}
      <div className="w-full  lg:w-1/3 text-white">
        <div className="kf-titles mb-6">
          <div className="text-yellow-500 uppercase mb-2">About Us</div>
          <h3 className="text-4xl font-bold mb-4">
            Organic &amp; Fresh Coffee <br />
            Provider Center
          </h3>
        </div>
        <p className="text-gray-400 mb-6">
          Sed ut perspiciatis unde omnis iste natus error voluptate
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa
          quae abillo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
          aspernatur aut odit aut fugit sed quia consequuntur magni dolores
          eos qui ratione
        </p>
        <div className="flex items-center bg-yellow-500 rounded-lg p-4">
          <img
            src="images/quote_img.png"
            alt="quote"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="text-black italic">
            Quis autem vel eum iure reprehenderit in ealuptate velit esse
            molestiae
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
        <div className="relative">
          <img
            src={about}
            alt="about"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/background-flower.png"
            alt="background decoration"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
