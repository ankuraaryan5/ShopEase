import React from 'react'
// import { useNavigate } from 'react-router-dom'

function Story() {
//   const navigate = useNavigate();

//   const handleReadMore = () => {
//     navigate('/story');
//   };

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1694428344133-f3f35568ceb2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Discover the journey, passion, and dedication that shapes everything we do. 
          Experience our legacy through every detail and story we share.
        </p>
        <button
        //   onClick={handleReadMore}
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default Story