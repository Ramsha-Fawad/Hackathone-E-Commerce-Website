import React from 'react'

const BrowseRange = () => {
  return (
    <div className='flex flex-col justify-center py-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#333333] font-bold text-2xl'>Browse The Range</h1>
        <p className='text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex justify-center items-center py-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white  p-4">
          <img
            src="/dinning.jpg"
            alt="Dinning Area Furniture"
            className="mb-4 rounded-md"
          />
          <h3 className="text-lg text-[#333333] font-semibold">Dinning</h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col  justify-center items-center bg-white p-4">
          <img
            src="/living-room.jpg"
            alt="Living Room Furnitue"
            className="mb-4 rounded-md"
          />
          <h3 className="text-lg text-[#333333] font-semibold">Living</h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white p-4">
          <img
            src="/bedroom.jpg"
            alt="Bedroom Furniture"
            className="mb-4 rounded-md"
          />
          <h3 className="text-lg text-[#333333] font-semibold">Bedroom</h3>
        </div>
      </div>
    </div>
  )
}

export default BrowseRange
