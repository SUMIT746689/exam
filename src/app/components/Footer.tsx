import { AiFillCaretDown } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className=" bg-slate-700 text-slate-100">
        <div className='flex justify-between w-10/12 py-12 mx-auto'>
        <div><strong>shop</strong>cart</div>

        <div className="flex gap-4 text-xs pt-1">
          <div>About us</div>
          <div>Contact</div>
          <div>Help</div>
        </div>

        <div className="text-xs pt-1 flex gap-1">
          English
          <AiFillCaretDown className='mt-0.5' />
        </div>
      </div>
    </div>
  )
}