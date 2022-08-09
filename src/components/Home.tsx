import React from 'react'

interface HomeProps {
  firstName: string
}



const Home: React.FC<HomeProps> = (props) => {
  
  const {firstName} = props
  return (
    <p>{firstName}</p>
    
      
    
  )
}
export default Home