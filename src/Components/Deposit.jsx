import React, { useContext } from 'react'
import { UserContext } from '../ContextApi'

export default function Deposit() {

    const { setUser, user, records, setRecords  ,seteditbox} = useContext(UserContext)

    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
      
        setUser({ ...user, [name]: value })
      
      }


  return (
    <div className='dd'>
        <h3>Amount Deposit</h3>
<input  required type="number" placeholder='Initial deposit '
name='deposit'


onChange={handleInputs} 
value={user.deposit}
// className=' ini '
 id="" /><button className='btn btn-warning'>Deposit</button>

    </div>
  )
}
