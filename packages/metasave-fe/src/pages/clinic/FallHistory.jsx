import React from 'react'
import Sidebar from './Sidebar'
const FallHistory = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col md:flex-row justify-between items-center my-4">
          <h1 className="poppins text-[#3a3a3a] text-3xl mb-3 md:mb-0 ml-5">
            Patient Fall History
          </h1>
        </div>
      </div>
    </div>
  )
}

export default FallHistory
