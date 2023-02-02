import React from 'react'
import { createContext } from 'react'
import {app} from './FireCofig'
import { getFirestore,collection, addDoc,getDocs,doc,deleteDoc,getDoc,updateDoc} from "firebase/firestore";
import { useState } from 'react';

export const FireContext=createContext()

const db = getFirestore(app);

const FirebaseContext = ({children}) => {

 const [updatedata,setUpdatedata]=useState({})
 const [updateid,setupdateid]=useState()

const Dataadd= async(Name,Email,Sublect,Field)=>{
  const docRef = await addDoc(collection(db, "userDetails"), {
    Name: Name,
    Email: Email,
    Sublect: Sublect,
    Field: Field
  });
  return docRef
}


const ReadData=async()=>{
  const querySnapshot = await getDocs(collection(db, "userDetails"));
    return querySnapshot
}

const deleteData=async(id)=>{

  const ref= await doc(db,'userDetails',id)
  deleteDoc(ref)
}


const getDOc= async(id)=>{
  const ref=doc(db,'userDetails',id);
  const snap=await getDoc(ref);
  setUpdatedata(snap.data())
  setupdateid(id)
  console.log(snap.data());
}

const updateDocument=async(updatedata)=>{
     const docRef=doc(db,'userDetails',updateid)
     await updateDoc(docRef,{
    Name:updatedata.Name,
    Email:updatedata.Email,
    Sublect:updatedata.Sublect,
    Field:updatedata.Field
     })
}

  return (
    <div>
        <FireContext.Provider 
        value={{
          Dataadd,
          ReadData,
          deleteData,
          getDOc,
          updatedata,
          setUpdatedata,
          updateDocument,
        }}>
        {children}
        </FireContext.Provider>
    </div>
  )
}

export default FirebaseContext