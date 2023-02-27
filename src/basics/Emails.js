import React, { useState } from 'react'

 
export default function Emails() {
    var[emails, setEmails] = useState([])
    var[message, setMessage] = useState('')
  
    function addEmail(){
        var email = document.getElementById("txtEmail").value
        setMessage("")
        var pos = emails.indexOf(email)
        if (pos === -1){
            setEmails([...emails,email])
        }
        else{
            setMessage("Email Already exists")
        }
    }

    function deleteEmail(idxToDelete){
        if (!window.confirm('Do you want to delete?'))
            return

        var newEmails = emails.filter((v,idx) => idx !== idxToDelete)
        setEmails(newEmails)
    }
  
    return (
    <>
        <h1>Emails</h1>
        Email : <input type="text" id = "txtEmail"/>
        
        <button onClick={addEmail}>Add</button>
        <span>{message}</span>
        <ul>
            {emails.map((v,idx) => <li key = {idx}>{v}
            <button className = 'btn-danger' onClick={() => deleteEmail(idx)}>Delete</button>
            </li>)}
        </ul>
    </>
  )
}
 