
const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}


const Part = ({part}) => {
  return ( 
    <p> 
      {part.name} {part.exercises}
    </p>
  )
} 

const Total = ({parts}) =>{
  const total = parts.reduce( (i, j) => i + j.exercises , 0) 
  return (
    <div> 
      <p> total of {total} exercise</p>
    </div>
  )
}

const Content = ({course}) => {
return ( 
  <div> 
    {course.parts.map(part => < Part key = {part.id} part = {part} />
    )}
  </div>

)
}

const Course = ({course}) => {
  return (
    <div>
      < Header course = {course} />
      < Content course = {course} />
      < Total parts = {course.parts} />
    </div>
  )
}

  
  export default Course