import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return <div><div>Home</div>
  <Link to="/post">Link to post</Link>
  </div>
}