import {React , useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className=""
}){
  const randomidInput=useId();
    return (
        <>
        <div className={`bg-white rounded-lg flex  p-3 text-sm ${className}`}> 

           <div className="w-1/2 text-left flex flex-col">
                 
              <label htmlFor={randomidInput}
              className="text-black/80 inline-block mb-2">
                {label|| "Label"}
                </label>
              <input 
               id={randomidInput}
              className="outline-none w-full py-1.5 bg-transparent"
              type="number"
              placeholder="Amount"
              disable={amountDisable}
              value={amount}
              onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />
           </div>

           <div className="w-1/2 flex justify-end flex-wrap text-right flex-col">
             <p  className="text-black/40 inline-block mb-2">Currency Type</p>
               
               <select
                className="bg-gray-200 rounded-lg w-1/2 p-2 ml-auto cursor-pointer outline-none"
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                  
                    {currencyOption.map((currency)=> ( 
                         <option 
                        value={currency}
                        key={currency}>
                        {currency}
                        </option> ))}
               </select>
           </div>
             
        </div>
        </>
    )
}

export default InputBox;