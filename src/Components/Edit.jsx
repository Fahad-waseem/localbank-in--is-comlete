import React, { useContext ,useEffect, useState} from 'react'
import { UserContext } from '../ContextApi'
import { Ref } from 'react'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import {ref} from "firebase/database"
import { db } from './firebase'

import WidthDraw from './WidthDraw'
import Deposit from './Deposit'
export default function Edit() {
    const { setUser, user, records, setRecords  ,seteditbox} = useContext(UserContext)
const [widthDraw,setWidthDraw]=useState(false)
const [deposit,setDeposit]=useState(false)
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
      
        setUser({ ...user, [name]: value })
      
      }







  return (



    <div>
   



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Change user data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form action="">
      <input required className='name' type="text"
 name="name"
 
 
 onChange={handleInputs}

 placeholder='Enter  name' value={user.name} id=""  />
  <br />
<br />
<br />

<input required type="email" 

 placeholder='E Mail'
  
 onChange={handleInputs} 
  
 name="email"

 value={user.email} id="" className='r' /> 
 <br />
 <br />
 <br />

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" className="btn btn-primary" 
      onClick={() => {

        seteditbox(false)}} >Update</button>


<div className='bd'>
<button type="button" className="btn btn-outline-info"  onClick={() => setDeposit(true)} >
    Deposit</button>

<button type="button" className="btn btn-outline-secondary"  onClick={() => setWidthDraw(true)} >
    Widh draw</button>


{widthDraw === true && <WidthDraw  setWidthDraw={setWidthDraw}/>}
</div>  




    {deposit === true && <Deposit  setDeposit={setDeposit}/>}


</form>




      </div>
   
    </div>
  </div>
</div>
    </div>
  )
}
