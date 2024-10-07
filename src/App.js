import { useState, useEffect } from 'react';
import './App.css';
import { collection, deleteDoc } from 'firebase/firestore'; 
import {db} from './firebase-config'
import { getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

function App() {
  const [newName,setNewName]= useState('')
  const [newAge,setNewAge]= useState(0)
  const [users,setUsers]= useState([])
  const usersCollectionRef = collection(db, "users") 


  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, Age: Number(newAge)});

  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)

  }

  const updateUser = async (id, age) =>{
    const userDoc = doc(db, "users", id)
    const newFields = {Age: age+1}
    await updateDoc(userDoc, newFields)

  }

  useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))

    }

    getUsers()

  },[])

  return (
    <div className="App">
      <input placeholder='name' type='text' onChange={(event)=>{setNewName(event.target.value)}}/>
      <input placeholder='Age' type='number' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return (
        <div>
          <h1>Name : {user.name}</h1>
          <h1>Age : {user.Age}</h1>
          <button onClick={()=>{updateUser(user.id, user.Age)}}> Increase age</button>
          <button onClick={()=>{deleteUser(user.id)}}> Delete user</button>
        </div>
        );
      })}
         
    </div>
  );
}

export default App;
