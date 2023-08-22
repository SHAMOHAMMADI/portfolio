import React from 'react'
import "./test.css"

export default function Test() {
  return (
    <div className="test">
        {true ? <p>isLogin</p> : <p>isNotLogin</p> }
    </div>
  )
}
