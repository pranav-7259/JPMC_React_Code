import React from 'react'

export default function CourseList(props) {
  return (
    <ul>
        {props.courses.map(c=><li>{c.title} - {c.fee}</li>)}
    </ul>
  )
}
