import React, { useContext } from 'react'
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import Icon from '@material-ui/core/Icon';

import ReceiptIcon from '@mui/icons-material/Receipt';

import { Link } from 'react-router-dom'
import { UserContext } from '../ContextApi';


export default function Transaction() {
const {records,user}=useContext(UserContext)
  return (
    <div className='container'>
        {/* <ArrowBackIcon/> */}
        <button className='bac-dash'><Link className='l' to="/Das"> Back To Dashboard</Link></button>
  <ReceiptIcon className='rec-2'/> <h2 className='tra-hea'>Transaction</h2> <br />
 <hr  className='hr4'/>

 <hr className='hr5'/>

{user ?
 
 <table className='table'>
        <thead>
          <tr>
            <th scope='col'>transaction code</th>
          <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>branch</th>
            <th scope='col'>chose</th>
            <th scope='col'>deposit</th>

          </tr>

        </thead>



        <tbody className=''>
          {records?.map((item) => {
            return (
              <tr>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.branch}</td>
                <td>{item.chose}</td>
                <td>{item.deposit}</td>
              </tr>
            );
          })}
        </tbody>

      </table>:


<h2 className='dt'>You did not make a transaction yet</h2>
       }
    </div>
  
  )
}





























