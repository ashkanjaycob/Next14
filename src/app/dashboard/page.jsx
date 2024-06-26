"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function page() {

  // async function getData() {
  //   const res = await fetch('https://api.example.com/...')
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.
   
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }
   
  //   return res.json()
  // }
   
  // export default async function Page() {
  //   const data = await getData()
   
  //   return <main></main>
  // }

  const [users , setUsers] = useState('');

    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }

    return (
      <div>
        <div className="z-10  min-h-screen bg-green-300 w-full items-center justify-between font-mono  p-10">
          <h1 className="p-12 text-lg font-bold">Dashboard Page</h1>
          <button className="bg-slate-800 text-white p-4 rounded-md" onClick={getData}>Get Users</button>
          <hr />
          {
          users && users.map((user)=>(
            <h2 key={user.id}>{user.name}</h2>
          ))
        }
        </div>

      </div>
    );
  }
  