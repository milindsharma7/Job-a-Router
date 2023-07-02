import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Optio nemo adipisci doloribus suscipit a consectetur repellendus! 
            Quod eius nisi eum!
        </p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
