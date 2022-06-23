
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAcount from './AddAcount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Accounting from './Components/Accounting';
// import Accounts from './Components/Accounts';
import Banks from './Components/Banks';
import Dashboard from './Components/Dashboard';
import Nav from './Components/Nav';
import Transaction from './Components/Transaction';
import ContextApi from './ContextApi';
// import d from './Das';
import Code from './Components/Code';
import Dasing from './Dasing';

function App() {
  // const [values ,setValues]=useState({
  //   fullName:"",
  //   CnicNo:"",
  //   // BranchCode:"",
  //   // AccountCode:"", 
  //   // chose:"",

  // });
  return (
    <>
    <ContextApi>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<Nav />} /> */}
          <Route path='/banks' element={< Banks />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/accounting' element={<Accounting />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='/addacount' element={<AddAcount />} />
          <Route path='/dasing' element={<Dasing />} />
          <Route path='/code' element={<Code />} />

        </Routes>
        {/* <Accounts/> */}
            </BrowserRouter>
            </ContextApi>
    </>
  );
}

export default App;
