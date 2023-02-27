import React, { useState, useEffect } from 'react'
import $ from 'jquery'

export default function ListCourses() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        $.get(
            {
                url:`http://localhost:4000/courses`,
                success:function(resp){
                    setData(resp)
                },
                error : function(){
                    alert("Server Unreachable")
                }
            }
        );
      
    }, [])
    

    
  return (
    <>
        <h1>Course Info: </h1>
        {data.length > 0 &&
            <div>
                Course Name : {data.title}
                Course Price : {data.Price}
            </div>
            
        }
    </>
  )
}
