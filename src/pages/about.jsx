import React from 'react'

// TODO: May need to create a custom dropdown if the semantic ui dropdown doesnt work
import '../styles/default.css'


const About = () => {
  return (
    <div className='div-master' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        }}
        >
          <h1>About</h1>
          <br />
          <p>Placeholder for about the project</p>
    </div>
  )
}

export default About