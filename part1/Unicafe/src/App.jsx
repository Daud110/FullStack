import { useState } from 'react'


const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}

  </button>
)

const Statistics = (props) => {
  if (props.total === 0 ) {
    return (
      'No feedback given'
      )
  }
  return (
    <div>
      <StatisticLine text = "good" value = {props.good} /> 
      <StatisticLine text =  "neutral" value =  {props.neutral} /> 
      <StatisticLine text  = "bad" value =  {props.bad} />  
      <StatisticLine text =  "total" value = {props.total} /> 
      <StatisticLine text = "avarage" value = {props.avarage}/> 
      <StatisticLine text = "positive" value = {props.positive} />
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )

}
  





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeurtal= () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const total = good + bad + neutral
  const avarage = ((good-bad)/ total).toFixed(1)
  const positive = ((good / total)*100).toFixed(1)+ '%'

  return (
    <div>
      <h1> give feedback</h1>
      <div>
        <Button handleClick={handleGood} text ='good'/>
        <Button handleClick={handleNeurtal} text = 'neutral' />
        <Button handleClick={handleBad} text = 'bad' />
      </div>
      <h1> statistics</h1>
      < Statistics 
      good= {good}
      neutral= {neutral}
      bad= {bad}
      total = {total}
      avarage= {avarage} 
      positive = {positive}
      />

      
    </div>
  )
}

export default App