import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'



function App() {
   
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 =() =>{
    alert("don't disturb")
  }

  const addToFive =(num)=>{
    alert (num+5);
  }
  return (
    <>
      <h3>React core concept</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
    </>
  )
}

export default App
