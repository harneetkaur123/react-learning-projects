import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom]=useState("usd")
  const [to , setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo= useCurrencyInfo(from)
  //  console.log(currencyInfo);
   
  const options = Object.keys(currencyInfo)

  const swap= ()=>{

    setFrom(to)
    setTo(from)
    // setAmount(convertedAmount)
    // setConvertedAmount(amount)
   }

   const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
   }


  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
       style={{backgroundImage: `url("https://images.pexels.com/photos/1420019/pexels-photo-1420019.jpeg")`}}>
          
          <div className='w-full'>
         
           <div className='w-full max-w-md mx-auto border-gray-500 backdrop-blur-sm p-5 bg-white/40 rounded-lg'>
             <form onClick={(e)=>{
              e.preventDefault();
               convert();
             }}>

               <div className='w-full mb-1'>
                 <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency)=> setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount)=>setAmount(Math.ceil(amount))}
                 />
               </div>

               <div className='w-full relative border-amber-900 h-0.5'>

                 <button className=' absolute bg-blue-600 rounded-xl text-white px-3 py-1 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border-2 hover:bg-blue-400 cursor-pointer'
                  onClick={swap}
                 >swap
                 </button>
               </div>
                   <div className='w-full mb-3'>
                 <InputBox
                   label="To"
                   amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  selectCurrency={to}
                  amountDisable="true"
                  onAmountChange={(amount)=> setAmount(Math.ceil(amount))}
                 />
               </div>

               <button className='text-white bg-blue-600 w-full px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-400'>
                Convert {from.toUpperCase()} To {to.toUpperCase()}
                </button>

             </form>

           </div>

          </div>

      </div>

    </>
  )
}

export default App
