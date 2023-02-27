import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfo() {
    const userid = React.createRef()
    const [data,setData] = useState({})
    const [message, setMessage] = useState('')

    function getInfo(){
        setMessage('')
        setData({})
        $.get(
            {
                url:`https://api.github.com/users/${userid.current.value}`,
                success : function(resp){
                    setData(resp)
                },
                error: function(){
                    setMessage("Invalid User ID")
                }
            }
        )
    }

    return (
    <>
        <h1> GitHub User Info</h1>
        <input type = "text" ref = {userid} defaultValue="pranav-7259" />
        <span>{message}</span>
        <p></p>
        <button onClick={getInfo}>Get Info</button>

        <p></p>
        {
            data.name && 
            <div className='row'>
                <div className='col-sm-6'>
                    {data.name}
                    <p></p>
                    {data.location}
                </div>
                <div className='col-sm-6'>
                    <img style={{width : '300px', height: '300px'}}
                    src = {data.avatar_url} alt = {data.name} title = {data.name}
                    className = "image image-responsive"/>
                </div>
            </div>
        }
    </>
  )
}
