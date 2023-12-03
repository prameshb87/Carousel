import React from 'react'
import '../styles/Projects.css'
import { Outlet } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
import { CustomLink } from './Navbar'
// import Carousel from './Carousel'

const Projects = () => {
  return (
    <div className='projects'>
      <aside className='project-selector'>
        <h2>Projects</h2>
        <ul>
          <CustomLink to="/projects/carousel">Carousel</CustomLink>
          <CustomLink to="/projects/progress-bar">Progress Bar</CustomLink>
        </ul>
      </aside>
      <div className='current-project'>
        <Outlet />
      </div>
    </div>
  )
}

export default Projects
