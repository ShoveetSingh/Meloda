import React from 'react'


const Footer = () => {
  return (
    <div>
    <div className="bottom-0 bg-gray-300">
      <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Contact Us</h2>
      <form className="rounded-lg">  
        <div className="mb-4">
          <label className="text-gray-400 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="w-full px-3 py-2 text-gray-400 border rounded-lg"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-gray-400 border rounded-lg"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="text-gray-400 text-sm font-bold mb-2" >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-gray-400 border rounded-lg"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-400 font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            Submit
          </button>
      </div>
    </form>
    </div>
  </div>
  </div>
  )
}

export default Footer