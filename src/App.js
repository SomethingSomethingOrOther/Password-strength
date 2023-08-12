import './App.css';
import {useState} from "react"



function App() {
      const [inputValue,setInputValue] =useState("")
      const [containsLowerCase,setContainsLowerCase]= useState(false)
      const [containsUpperCase,setContainsUpperCase]= useState(false)
      const [containsNumber,setContainsNumber]= useState(false)
      const [containsSymbols,setSymbols]= useState(false)
      const [ progress,setProgress] = useState(0)
      

      const handleInputChange=(e)=>{
        const value=e.target.value
        setInputValue(value)

        setContainsLowerCase(/[a-z]/.test(value))

        setContainsUpperCase(/[A-Z]/.test(value))

        setContainsNumber(/\d/.test(value))
        
       setSymbols(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value))


          const criteriaCount = (
            (containsLowerCase ? 1:0) +
            (containsUpperCase ? 1:0) +
            (containsNumber ? 1:0)+
            (containsSymbols ? 1:0)
          )
          const totalCriteria=4
          const calculateProgress= (criteriaCount / totalCriteria) * 100
              setProgress(calculateProgress)

      }

      const getProgressBarColor = () => {
        if (progress >= 75) {
          return 'green';
        } else if (progress >= 50) {
          return 'orange';
        } else {
          return 'red';
        }
      };

        const getStrength=()=>{
          if(inputValue.length > 8 && containsLowerCase && containsUpperCase && containsSymbols && containsNumber){
            return "Strong"
          } else if (inputValue.length > 8 && containsLowerCase && containsLowerCase){
            return "Medium"
          }else {
            return "Weak"
          }
        }


  return (
    <div className="App">
      <header className="App-header">
          <h1>
            Password - Strength
          </h1>
      </header>
      <div>
        <input 
        name="enter-password"
        value={inputValue}
        type="text" 
        onChange={handleInputChange}
        placeholder="Enter your password..." />

        <div className="contains">
       <span className={containsLowerCase ? "contains-lowercase":null}>Lowercase{""}</span>{" "} 
       <span className={containsUpperCase ? "contains-uppercase":""}>Uppercase</span> {" "} 
       <span className={containsNumber ? "contains-number":""}>Number</span> {" "}
       <span className={containsSymbols ? "contains-symbols":""}>Symbols</span>
</div>
        <div className="progress-bar" style={{backgroundColor:getProgressBarColor(),border:"1px solid black",height:"3rem"}}>

        </div>
      </div>
      <div className="char-number">
        Your password has {inputValue.length} chars
      </div>
      <div className="password-strength-message">
        Your password is {getStrength()}
      </div>
    </div>
  );
}

export default App;
