
import React ,{useEffect, useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './ContextApi';

import { collection, addDoc,getDocs} from "firebase/firestore"; 
// import { firestore } from "../config/firebase"

import { db } from './Components/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function AddAcount() {
  const { setUser, user, records, setRecords  } = useContext(UserContext)

  const navigate = useNavigate();



  const [doucuments, setdoucuments] = useState([])
  const [isLoading, setisLoading] = useState(false);
  const collectionName = "User";
  const collectionRef = collection(db, collectionName);




  useEffect(() => {
    const readDocs = async () => {
      setisLoading(true);
      let newArray = [];
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id });
      });
      setdoucuments(newArray);
      setisLoading(false);
    };
    readDocs();
  }, []);

console.log(doucuments);

 // show from in user
 const handleInputs = (e) => {
  const name = e.target.name
  const value = e.target.value
  console.log(name, value);

  setUser({ ...user, [name]: value })

}


const handleSubmit = async(e) => {
  e.preventDefault();
  const newRecord = { ...user, id: new Date().getTime().toString() }
  console.log(records)
  // navigate('/accounting')
  setRecords([...records, newRecord]);
  console.log(records)
  // setUser({
  //   name: "",
  //   email: "",
  //   branch: "",
  //   code: "",
  //   chose: "",
  //   deposit: ""
  // })

  try {


    const docRef = await addDoc(collection(db, "users"),
    {
       name:user.name,
       email:user.email,
      branch:user.branch,
      code:user.code,
     chose:user.chose,
     deposit:user.deposit
    }  );
    setUser({
      name: "",
      branch: "",
      email: "",
      code: "",
      chose: "",
      deposit: ""
    })


    toast.success("User has been added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

        console.log("Document written with ID: ", docRef.id);
  
      }
       catch (e) {
        toast.error("Something Went Wrong", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        console.error("Error adding document: ", e);
      
      }


    
  
}







    
    












    // store data in localStorage 
    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(user ))
    },[user])
    
    const getLocolItems=(e)=>{
      let list=e.localStorage.getItem('list')
    console.log('list')
    if(list){
        return JSON.parse( localStorage.getItem('list'));
      }
      }


      // const notify = () => toast("Wow so easy!");

function notify(){
 

  if(setUser===""){
    toast.error("fill all fields")
  }
  if(user.name===""){
toast.error("enetr the name")
  }
  // else{
  //   toast.success("thank")
  // }

if(user.email===""){
  toast.error("enete EMAIL")
}

if(user.branch===""){
  toast.error("Ener BRANCH")
}
  if(user.code===""){
    toast.error("Enert code")
   }
//     else if(user.code.length<9){
// toast.error("enter 9 digits code")
//     }
    if(user.chose===""){
      toast.error("Chose Deposit")
    }if(user.deposit===""){
      toast.error("Enter DEPOSIT")
    }else if(useContext.deposit.length<500){
      toast.error("Deposit 500 ")
    }
  else{
    toast.success("thanks")
  }

}



  return (
      <div className="form-input"required >
        <div className="form-label">
    <div className='container1'>

   
      <div className="head">
          <h1>Enter Your Account Detail Below</h1>
          <p className='t'>All fields are required</p>
      </div>
<form id='validateEmail' 
 onSubmit={handleSubmit}
//  onClick={handleData}
 >




<input required className='name' type="text"
 name="name"
 
 
 onChange={handleInputs}

 placeholder='Enter full name' value={user.name} id=""  />
  <br />

<input required type="email" 

 placeholder='E Mail'
  
 onChange={handleInputs} 
  
 name="email"

 value={user.email} id="" className='r' /> <br />
<input required type="numbers" 
onChange={handleInputs} 

  placeholder='Branch Code'className='bra 'value={user.branch} name="branch" id="" /> <br />
<input required type="number" placeholder='Account Code '
name="code"

onChange={handleInputs} 
value={user.code}

className=' acocode' id="" /> <br />

<br />
<select className='allaco' type="acount" 

name='chose'

onChange={handleInputs} 
value={user.chose}
placeholder='chose' id="">

  <option className='lb' value="type" >Chose acount type</option>
  <option value="current">Current</option>
  <option value="saving">Saving</option>

</select>

<br />
<input required type="number" placeholder='Initial deposit '
name='deposit'


onChange={handleInputs} 
value={user.deposit}
className=' ini' id="" /> <br />
 <button 
onClick={notify}
 className='bt ' type='submit'>create acount</button>

</form>
<ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
</div>


 

      </div>
    </div>
  )
}
