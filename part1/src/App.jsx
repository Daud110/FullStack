
const Header = ()  => {
  return (
    <div>
      <p> Half Stack application development </p>
    </div>
  )
}

const Content =[
  {name:'Fundamentals of React', exercises: 10}, 
  {name: 'Using props to pass data', exercises: 7},
  {name: 'State of a component', exercises: 14}
]


const Total = () =>
<div> 
  <p> Number of exercises {Content[0].exercises + Content[1].exercises + Content[2].exercises} </p>
</div>


const App = () => {
  
  return (
    <div>
      <h1> Header</h1>
      <p> { Content[0].name } {Content[0].exercises} </p>
      <p> { Content[1].name } {Content[1].exercises}</p>
      <p> { Content[2].name } {Content[2].exercises} </p>
      < Total/>


    </div>
  )
}

export default App