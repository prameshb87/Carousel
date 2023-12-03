import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/" className="site-title">Home</Link>
      <ul>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

export const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  // console.log('resolvedPath - ', resolvedPath)
  // console.log(useMatch({ path: resolvedPath.pathname, end: true }))
  // console.log(useMatch({ path: resolvedPath.pathname }))
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li>
      <Link to={to} {...props} className={isActive && 'active'}>{children}</Link>
    </li>
  )
}

export default Navbar
