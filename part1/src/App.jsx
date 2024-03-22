
const Header = ()  => {
  return (
    <div>
      <h1> Half Stack application development</h1>
    </div>
  )
}
const Part = (props) => {
  return ( 
    <p> {props.part.name} {props.part.exercises} </p>
  )
} 


const Content = (props) => {
return ( 
  <div> 
    <Part part= {props.course[0]} />
    <Part part= {props.course[1]} />
    <Part part= {props.course[2]} />
  </div>

)
}

  


const Total = (props) =>
<div> 
  <p> Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises} </p>
</div>


const App = () => {
  const course = 
    [
      {name:'Fundamentals of React', exercises: 10}, 
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14},
    ]
  
  
  return (
    <div>
      < Header />
      < Content course = {course} />
      < Total course = {course} />
    </div>
  )
}

export default App