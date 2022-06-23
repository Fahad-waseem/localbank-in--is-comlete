
import React from 'react'
import { Link } from 'react-router-dom'





export default function Nav() {
  return (


    <div className=' nav'>
<h1 className='bak'><Link className='l' to="/Banks">  My Bank </Link></h1>
<div className="nav-links">     
<ul>

<li><Link className='l' to="/dashboard">Dashboard</Link></li>
<li><Link className='l' to="/Accounting">Accounting</Link></li>
<li><Link className='l' to="/Transaction">Transactions</Link></li>


</ul>


        </div>
    </div>
  )
}
