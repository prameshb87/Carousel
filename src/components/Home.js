import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HashLink to="/about#contact" smooth>Contact Me</HashLink>
    </div>
  )
}

export default Home;