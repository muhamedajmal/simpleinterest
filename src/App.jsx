import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  const [isPrinciple ,setIsPrinciple] = useState(true)
  const [isRate ,setIsRate] = useState(true)
  const [isYear ,setIsYear] = useState(true)

  const validate = (e)=>{
    const name = e.target.name 
    const value = e.target.value 
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if(name=='principle'){
        setIsPrinciple(false)
        setPrinciple(value)
      }
      else if(name=='rate'){
        setIsRate(false)
        setRate(value)
      }
      else{
        setIsYear(false)
        setYear(value)
      }
    }
  }

  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)

  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(principle=="" || rate=="" || year==""){
      alert('please fill the form completely')
    } 
    else{
      setInterest((principle*rate*year)/100)
    }
  }

  return (
    <>
      <div className="row w-100 mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center" id='main-div'>
            <div className="heading mt-5 mb-3">
            <h1 >Simple Interest app</h1>
            <h4>Calculate your simple Interest easily</h4>
            </div>
            <div className="output  p-4 border rounded w-100" id='output'>
              <h1 className='fw-bold'>₹ {interest}</h1>
              <h6>total simple interest</h6>
            </div>

            <form className='mt-4' >
              <div className="mb-3">
              <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" value={principle ||""} className='w-100' onChange={(e)=>validate(e)} name='principle' />
              {!isPrinciple && <p className='text-danger text-start'>invalid input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" value={rate ||""} className='w-100'onChange={(e)=>validate(e)} name='rate'/>
              {!isRate && <p className='text-danger text-start'>invalid input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" label="Year" variant="outlined" value={year ||""} className='w-100'onChange={(e)=>validate(e)} name='year'/>
              {!isYear && <p className='text-danger text-start'>invalid input</p>}
              </div>
              <div className="mb-3"></div>
            </form>

            <div className="buttons mb-5">
            <Button variant="contained" className='m-3' color="success" disabled={isPrinciple && isRate && isYear?false:true} type='button' onClick={handleCalculate} >CALCULATE</Button>
            <Button variant="outlined" className='m-3 ' onClick={handleReset} >RESET</Button>
            </div>

        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  )
}

export default App
