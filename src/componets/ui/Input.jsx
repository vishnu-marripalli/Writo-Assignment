/* eslint-disable react/prop-types */
import React,{useId} from 'react'



 const Input =React.forwardRef(function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  isRequired = true,
  ...props
 },ref){

    const id = useId()

  return (
    <>
      <div className="w-[250px]  relative">
        {label==="" ? (''):(<label className="sm:text-[16px] text-[12px] ">{label}</label>)}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
          className="sm:p-3 p-[5px] remove-arrow w-full border-gray-300 hover:border-primary border-2 rounded-md text-gray-800  appearance-none  sm:text-sm text-[12px] tracking-wider focus:border-primary outline-none duration-200 ease-out"
          {...props}
          ref={ref}
          id={id}
        />
        
      </div>
    </>
  );
}

 )

export default Input