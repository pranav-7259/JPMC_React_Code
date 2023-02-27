import React from 'react'

const MyContext = React.createContext()

export default function ContextDemo() {
    const details = {course : 'React', Fees : 1000}
  return (
    <MyContext.Provider value = {details}>
        <h1>Parent</h1>
        <Child/>
    </MyContext.Provider>
  )
}


function Child(){
    return(
        <>
            <h2> Child </h2>
            <GrandChild/>
        </>
    )
}

function GrandChild(){
    return (
        <>
            <h3>GrandChild</h3>
            <h3>Course : {details.course}</h3>
            <h3>Fees : {details.Fees}</h3>
        </>
    )
}