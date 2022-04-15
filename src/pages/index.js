import React from 'react'
import "../styles/default.css";

const Welcome = () => {
  return (
    <div className='div-master' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
        <h1>WELCOME PAGE</h1>
        <br />
        <p>
            PLACEHOLDER FOR THE WELCOME PAGE
            Will need to implement welcome button and 
            some sort of welcome image aesthetic.
        </p>
    </div>
  )
}

export default Welcome