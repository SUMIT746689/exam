'use client'
import Image from 'next/image'
import { Search } from './components/Search'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const data = useSelector((state)=>state.products.value)
  console.log({data})
  return (
    <div>
      <Search />

      {/* hot deals section  */}
      <div className=' flex'>
        <div className='text-5xl w-96 py-2 pr-6 my-auto'> We picked some <span className=' font-bold text-yellow-500'>cool things</span> for you!</div>
        <div className=' w-full'>
          <div className=' font-semibold p-2 pb-1 border-b border-dashed border-yellow-500'>hot deals for you</div>
          <div></div>
        </div>
      </div>

      {/* thumbnail */}
      <div>

      </div>

      {/* today hot deals */}
      <div className=' grid'>
        <div className=' font-semibold p-2 pb-1 border-b border-dashed border-yellow-500'> {`Today's hot deals`}</div>
        <div></div>
      </div>

      {/* your search items */}
      <div className=' grid'>
        <div className=' font-semibold p-2 pb-1 border-b border-dashed border-yellow-500'> Your searched items</div>
        <div></div>
      </div>

      {/* second thubnail */}
      <div>
      </div>

      {/* Deals on furniture */}
      <div className=' grid'>
        <div className=' font-semibold p-2 pb-1 border-b border-dashed border-yellow-500'> Deals on furniture</div>
        <div></div>
      </div>

      {/* review your purchase */}
      <div className=' grid'>
        <div className=' font-semibold p-2 pb-1 border-b border-dashed border-yellow-500'> Review your purchase</div>
        <div></div>
      </div>
    </div>
  )
}
