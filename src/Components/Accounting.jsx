
import React, { useContext, useState, useEffect } from 'react'
import { deleteDoc, doc, collection, getDocs ,} from 'firebase/firestore'
// import { getDatabase, ref, set } from "firebase/database";
import { db } from './firebase'
// import { collection, addDoc,getDocs,deleteDoc,doc} from "firebase/firestore"; 
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { UserContext } from '../ContextApi'
import Edit from './Edit'


export default function Accounting() {

  const { records, setRecords } = useContext(UserContext)
  const [editbox,seteditbox]=useState(false)  
// to get data in firebse
  const readDocs = async () => {

    let array = []

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      // to make a unque id
      array.push({ ...doc.data(), id: doc.id })
    });

    setRecords(array)
  }

  useEffect(() => {
    readDocs()
  }, [])



  // delete data
  const delDoc = async (item) => {

    // console.log(item)
    // return

    await deleteDoc(doc(db, "users", item.id))
    let array = records.filter((record) => {
      return record.id !== item.id;
    })
alert("Your acount is deleted")
    toast.error("Account Delete", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setRecords(array)
  }




//   const db = getDatabase();
//   set(ref(db, 'user/' + records.id), {
//     // name: name,
//     // email: email,
//     // profile_picture : imageUrl
 
//     name: "",
//       branch: "",
//       email: "",
//       code: "",
//       chose: "",
//       deposit: ""
 
//   })
//   .then(() => {
//    toast.success("data save successfuly")
//   })
//   .catch((error) => {
//  toast.error("sorry ")
//   });




  // const db = getDatabase();
  // const newPostKey = push(child(ref(db), 'posts')).key;
  // const updates = {};
  // updates['/posts/' + newPostKey] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  // return update(ref(db), updates);



// useEffect(()=>{
// if (id){
//   useState({...user[id]});
// }else{
//   useState({...initialState})
// }
// return()=>{
//   useState({...initialState})
// }
// },[user,id])



  return (
    <div className='container'>


      <button className='bac-dash'><Link className='l' to="/Das"> Back To Dashboard</Link></button>
      <h2 className='as-h'>Accounts</h2>
      <button className='bac'><Link className='l' to="/Das">Create new account</Link></button>

      <br />

      <hr className='hr4' />

      <h2 className='dt'>You dont have any account</h2>
      <hr className='hr5' />




      <table className='table'>
        <thead>
          <tr >
            <th>No</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>code</th>
            <th scope='col'>branch</th>
            <th scope='col'>chose</th>
            <th scope='col'>deposit</th>
          </tr>
        </thead>

        <tbody className=''>
          {records.map((item,index) => {
            // console.log(item);
            return (
              <tr key={item.id}>
                <th scope='row'>{index +1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><Link to="/Code">
                  {item.code}  </Link>
                </td>

                <td>{item.branch}</td>
                <td>{item.chose}</td>
                <td>{item.deposit}</td>

                <td> <button className="btn bg-danger text-white"
                  onClick={() => delDoc(item)} >
                  Deleten
                </button>  </td>
                {/* <td> <button className="btn bg-success text-white"
                  onClick={() => seteditbox(true)} 
                  >
                  edit
                </button>  </td> */}

<td>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
      onClick={() => seteditbox(true)} >
 Edit
</button>
           {editbox === true && <Edit  seteditbox={seteditbox}/>}
</td>

              </tr>
            );
          })}

        </tbody>
      </table>




    </div>
  )
}
