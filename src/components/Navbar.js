import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <CustomLink to="/carousel">Carousel</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar
