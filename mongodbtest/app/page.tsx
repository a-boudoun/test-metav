'use client'

import { useState, useEffect } from "react";

export default function Home() {
  const [dataUser,setDataUser] = useState<any>([]);

  const getData = async() =>{
    try {
      const data = await fetch('http://localhost:3000/api/user' , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
  
      const user = await data.json();
      console.log('data => ', user);

      setDataUser(user)
    } catch (error) {
      console.log('error => ', error);
    }
  }
  useEffect(
    () => {
      getData()
    },[]
  );

  return (
    <main className="=">
      {dataUser.map((user) =>{
        return(
          <div className="p-2 mt-4">
             <h2>Name :{user.name}</h2>
             <h2>Email :{user.email}</h2>
             <h2>Age :{user.age}</h2>
             <h2>City :{user.city}</h2>
          </div>
        )
      })}
    </main>
  );
}
