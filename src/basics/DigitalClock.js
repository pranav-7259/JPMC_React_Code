import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
    var [clock, setClock]  = useState("")
    
    useEffect(() => {setInterval(changeClock, 1000)},[])
    
    function changeClock(){
        var ct = new Date()
        setClock(`${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}`)
    }
  return (
    <>
        <h1>{clock}</h1>
    </>
  )
}
