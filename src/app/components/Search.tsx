import { CiLocationOn } from 'react-icons/ci';

export const Search = () => {
  return (
    <div className='flex my-2 content-center justify-between'>

      <div className=' rounded-lg bg-yellow-500 p-2 flex '>
      <CiLocationOn className='text-lg'/>  
      <span className=' text-xs mt-0.5'>Dhaka, 1212</span> 
      </div>

      {/* search input */}
      <div className=' w-1/3'>
        <label htmlFor="default-search" className=" text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search " required />
        </div>
      </div>
    </div>
  )
}