import React ,{useRef}from 'react'
import Button from '../Button/Button'

function InputField() {
    const inputValue = useRef("");
  return (
    <div  className="flex   mobile:flex-col  items-center gap-2">
          <input
            type="text"
            ref={inputValue}
            className=" p-3  placeholder-slate-700 rounded-lg bg-[rgba(255,255,255,0.55)] text-black inp mobile:mt-8"
            placeholder="Enter City Name...."
          />
          <Button inputValue={inputValue}/>
    </div>
  )
}

export default InputField
