import React, { useState } from 'react'
import { createContext } from 'react'
export const UserContext = createContext();
export default function ContextApi({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    code: "",
    branch: "",
    chose: "",
    deposit: ""
  });
  const [records, setRecords] = useState([]);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser, records, setRecords }}>
        {children}
      </UserContext.Provider>

    </div>
  )
}
