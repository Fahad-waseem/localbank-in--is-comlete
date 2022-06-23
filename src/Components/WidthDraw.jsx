import React, { useContext } from 'react'
import { UserContext } from '../ContextApi'

export default function WidthDraw() {
    const { setUser, user, records, setRecords  ,seteditbox} = useContext(UserContext)

    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
      
        setUser({ ...user, [name]: value })
      
      }

  return (
    <div>


<div className='widt'>

<h3>Amount Withdraw</h3>
<input  required type="number" placeholder='Initial widthdraw '
name='deposit'


onChange={handleInputs} 
value={user.deposit}
// className=' ini '
 id="" /><button className='btn btn-success'>WiDTH DRAW</button>
</div>
    </div>
  )
}
