import React from 'react'
import { useId } from 'react';

function InputBox({
    label,
    amount,
    currencyOptions=[],
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className=""

}) {
  const randomidInput=useId();
   
  return (
    <>
     
     <div className='bg-white rounded-lg flex p-3 text-sm'>
          <div className='w-1/2 flex text-left flex-col '>
             <label  className='inline-block text-black/80 mb-2' htmlFor={randomidInput}>
                {label||"label"}
             </label>
             <input 
             id={randomidInput}
             placeholder='Amount'
             type="number"
             className='bg-transparent outline-none py-1.5 w-full'
             value={amount}
              disable={amountDisable}
             onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className='w-1/2 text-right flex flex-col justify-end '>

             <p className='text-black/40 inline-block mb-2'>Currency Type</p>
             <select className='bg-gray-200 rounded-lg outline-none w-1/2 ml-auto p-2'
              value={selectCurrency}
              disabled={currencyDisable}
              onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
             >
                {currencyOptions.map((currency)=>(
                  <option
                   key={currency}
                   value={currency}
                  >
                   {currency}
                  </option>
                ))}
             </select>
          </div>
     </div>
    
    </>
  )
}

export default InputBox;