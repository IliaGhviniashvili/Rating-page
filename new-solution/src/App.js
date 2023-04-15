import star from "./images/icon-star.svg"
import thanks from "./images/illustration-thank-you.svg"
import {useState} from "react"

function App() {
  const [isSubmetted, setIsSubmetted] = useState(false)
  const [rate, setRate] = useState("")

  const Button = ({number}) =>{
    return <button className="btn-score h-12 w-12 pt-1 mb-2 rounded-full"
                   onClick={()=> setRate(number)}>
      {number}
      </button>
  }

  return (
    <>
    {!isSubmetted && 
      <div className="wrapper">
        <img src={star} alt="" className="starImg p-4 rounded-full mb-9"/>
        <h2 className="h2header mb-2">How did we do?</h2>
        <p className="ptext mb-8">Please let us know how we did with your support request. All feedback is appreciated 
                                  to help us improve our offering!</p>
        <ul className="grid grid-cols-5 gap-4"
              >
           <li><Button number={1}/></li>
           <li><Button number={2}/></li>
           <li><Button number={3}/></li>
           <li><Button number={4}/></li>
           <li><Button number={5}/></li>
        </ul>
        <div className="text-center mt-7">
          <button className="btn-submit pt-4 pb-3 rounded-full w-full"
                  onClick={() => {
                    {setIsSubmetted(true)}
                  }}
            >SUBMIT
          </button>
        </div>
      </div>
    }
    {isSubmetted && <ThankYou rate={rate}/>}
    </>
  )
  
  
}

const ThankYou = ({rate}) =>{
  return(
    <div className="wrapper">
      <img src={thanks} alt="" className="thanksImg mb-7"/>
      <div className="flex align-center justify-center">
        <p className="scoreTeller text-center mb-9">You selected {rate} out of 5</p>
      </div>
      <h2 className="h2header mb-2 text-center">Thank you!</h2>
      <p className="ptext mb-7 text-center"> We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </div>
  )
}
export default App;
