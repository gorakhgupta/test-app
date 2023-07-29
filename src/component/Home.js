import React from 'react'

const Home = (props) => {
  // console.log(props);
  return (
    <div>
      This is Home Component
      <button onClick={()=>props.addToCartHandler({name:"gorakh"})} >add</button>
      <button onClick={()=>props.removeFromCartHandler()} >Delete</button>
    </div>
  )
}

export default Home
