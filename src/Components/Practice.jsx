import React from 'react'
import './Practice.css'

const Practice = () => {
  return (
    <div className='practice'>
      <div className='practice-container'>
        <nav className='cardss header1'>Header</nav>
        <main className='cardss main'>Main</main>
        <div className='cardss sidebar' id='sidebar'>Sidebar</div>
        <div className='cardss content' id='content1'>Content 1</div>
        <div className='cardss content' id='content2'>Content 2</div>
        <div className='cardss content' id='content3'>Content 3</div>
        <footer className='cardss footer'>Footer</footer>
      </div>
    </div>
  )
}

export default Practice
