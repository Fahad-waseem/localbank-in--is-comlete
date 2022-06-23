import React, { useContext }   from 'react'
import Card from 'react-bootstrap/Card'
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReceiptIcon from '@mui/icons-material/Receipt';

import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../ContextApi';


export default function Accounts(props) {
 const {records,user,items,index} =useContext(UserContext)
 
  return (
    <div className='card'>


<Card className='card1' style={{ width: '26rem' }}>

  <Card.Body>
    <Card.Title className='tit'> <AccountBoxIcon className='AccountBoxIcon'/>Accounts</Card.Title>
    <hr className='hr1'/>
    <div className="card-link">
{/* <a href="#" className='link2' style={{marginLeft:'0px'}}> */}
   <Button 
  className='link2'
    style={{borderRadius:'10px' ,height:'30px',marginLeft:'100px'}} variant="contained" color="secondary">
<AddIcon/> <Link className='l' to="/AddAcount"> Add New Account </Link>  
</Button>
{/* </a> */}


{/* <a href="#" className='link2'style={{marginLeft:'0px'}} > */}
   <Button  className='link2'  style={{borderRadius:'10px',height:'30px',marginLeft:'100px'}} variant="contained" color="success">
<VisibilityIcon/> <Link className='l' to="/accounting"> View All Account  </Link>
</Button>
{/* </a> */}
<hr className='hr1'/>


    </div>
    <Card.Text >
    <small className='c' style={{fontSize:'3rem',marginLeft:'190px',fontFamily:'monoSpace',marginTop:'-30px'}}>{index +1}</small>
     {/* <small style={{marginLeft:'160px',marginTop:'-10px' ,fontFamily:'arialNarrow',fontSize:'bolder'}}>Accounts</small> */}
    </Card.Text>

  </Card.Body >
</Card >
<Card className='card2' style={{ width: '26rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title className='tit'><ReceiptIcon className='ReceiptIcon'/>
 Transactions   </Card.Title>
    <hr className='hr1' />
    <div className="card-links">
{/* <a href="#" className='link' style={{marginLeft:'90px'}}> */}
  <Button 
className='link'
 style={{borderRadius:'10px',height:'30px' ,marginLeft:'90px'}} variant="contained">
  <VisibilityIcon/>     <Link className='l' to="/transaction"> View All Transactions </Link></Button>
  {/* </a> */}
<hr className='hr1'/>

    </div>
    <Card.Text>
        <small style={{fontSize:'3rem',marginLeft:'180px',fontFamily:'monoSpace'}}>{index +1}</small>
     {/* <small style={{marginLeft:'150px',marginTop:'-10px' ,fontFamily:'monoSpace',fontSize:'bolder'}}>Transactions</small> */}
    </Card.Text>

  </Card.Body>
</Card>

    </div>
  )
}
